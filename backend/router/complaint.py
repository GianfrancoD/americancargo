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
        subject="Reclamo: " + claim_data['claimTitle'],
        sender=os.getenv('MAIL_USERNAME'),
        recipients=[os.getenv('OTHER_MAIL_USERNAME')]
    )
    
    msg.body = """
    Nuevo Reclamo

    Nombre: {}
    Numero de Guia: {}
    Nacionalidad: {}
    Descripcion del Reclamo: {}
    """.format(
        sanitized_data['name'],
        sanitized_data['trackingNumber'],
        sanitized_data['nationality'],
        sanitized_data['complaint']
    )
    
    mail.send(msg)

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

# Añade esta función después de tu configuración y llámala
check_smtp_server()