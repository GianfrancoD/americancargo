import os
import socket
from flask import Blueprint, request, jsonify, session as flask_session
from flask_mail import Message
from jsonschema import ValidationError
from unidecode import unidecode as ud
from app import mail
from models.db import Session
import secrets
import bcrypt

from models.modelcomplaint import Complaint
from models import db

# Maneja las rutas relacionadas a la base de datos
reclamos = Blueprint('complaint', __name__)

@reclamos.route('/complaint', methods=['POST'])
def create_complaint():
    if request.method == 'POST':
        session = Session()
        try:
            data = request.get_json()
            claim_data = data.get('claimData')
            if not claim_data:
                return jsonify({
                    "message": "No se encontraron datos en claimData"
                }), 400
            if not all([
                claim_data.get('claimTitle'),
                claim_data.get('name'),
                claim_data.get('trackingNumber'),
                claim_data.get('nationality'),
                claim_data.get('complaint')
            ]):
                return jsonify({
                    "message": "Todos los campos son requeridos y no pueden estar vacíos"
                }), 400
            new_complaint = Complaint(
                claim_title=claim_data['claimTitle'],
                name=claim_data['name'],
                tracking_number=claim_data['trackingNumber'],
                nationality=claim_data['nationality'],
                complaint=claim_data['complaint']
            )
            session.add(new_complaint)
            session.commit()
            try:
                send_mail(claim_data)
            except Exception as email_error:
                print(f"Error enviando email: {str(email_error)}")
                
            return jsonify({
                "message": "¡Reclamación creada con exito!",
                "complaint_id": new_complaint.id
            }), 201
        except Exception as e:
            session.rollback()
            print(f"Error detallado: {type(e).__name__}: {str(e)}")
            return jsonify({
                'message': 'Error al procesar la solicitud',
                'error': str(e)
            }), 500
        finally:
            session.close()


def send_mail(claim_data):
    sanitized_data = {
        'name': ud(str(claim_data['name'])),
        'trackingNumber': ud(str(claim_data['trackingNumber'])),
        'nationality': ud(str(claim_data['nationality'])),
        'complaint': ud(str(claim_data['complaint'])),
        'claimTitle': ud(str(claim_data['claimTitle']))
    }
    
    msg = Message(
        subject=claim_data['claimTitle'],
        sender=os.getenv('MAIL_USERNAME'),
        recipients=[os.getenv('OTHER_MAIL_USERNAME')]
    )
    
    msg.html = """
    <html>
        <body style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px;">
            <div style="width: 80%; margin: auto; background-color: #fff; padding: 40px; border: 1px solid #ddd; border-radius: 15px; box-shadow: 0 0 15px rgba(0,0,0,0.2);">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="https://enviointernacionales.com/static/media/logoZOOM3.2e82a69349f229570b46.jpeg" alt="Logo de la Empresa" style="width: 250px; height: auto;">
                </div>
                <h2 style="color: #2c3e50; font-weight: bold; margin-bottom: 20px;">Notificación de Reclamo</h2>
                <div style="background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 10px; margin-bottom: 20px;">
                    <div style="margin-bottom: 15px;">
                        <strong style="font-size: 16px; color:blue;">Detalles del Reclamo</strong>
                    </div>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd; width: 30%; font-weight: bold">Nombre del Cliente:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">{}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold">Número de Guía:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">{}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; font-weight: bold">Nacionalidad:</td>
                            <td style="padding: 10px;">{}</td>
                        </tr>
                    </table>
                </div>
                <div style="background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                    <div style="margin-bottom: 15px;">
                        <strong style="font-size: 16px; color:blue;">Descripción del Reclamo</strong>
                    </div>
                    <p style="font-size: 14px;">{}</p>
                </div>
                <div style="margin-top: 20px; text-align: center;">
                    <p style="font-size: 14px;">Agradecemos su confianza en nuestros servicios. Si necesita más información o asistencia, no dude en contactarnos.</p>
                    <p style="font-size: 14px;">Atentamente, EnvioInternacionales</p>
                </div>
            </div>
        </body>
    </html>
    """.format(
        sanitized_data['name'],
        sanitized_data['trackingNumber'],
        sanitized_data['nationality'],
        sanitized_data['complaint']
    )
    
    try:
        mail.send(msg)
    except Exception as e:
        print(f"Error al enviar el correo electrónico: {str(e)}")

    import socket

def check_smtp_server():
    server = os.getenv('MAIL_SERVER')
    try:
        # Intenta resolver el nombre del servidor
        ip = socket.gethostbyname(server)
        print(f"Servidor {server} resuelve a IP: {ip}")
        
        # Intenta conectar al puerto SMTP
        sock = socket.create_connection((server, int(os.getenv('MAIL_PORT'))), timeout=5)
        print("Conexión exitosa al puerto SMTP")
        sock.close()
    except socket.gaierror as e:
        print(f"Error resolviendo nombre del servidor: {e}")
    except socket.error as e:
        print(f"Error conectando al servidor: {e}")
check_smtp_server()