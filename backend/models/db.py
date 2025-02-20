import os
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from dotenv import load_dotenv

load_dotenv()

# db_secret_key = os.getenv('SECRET_KEY')
db_nombre = os.getenv('db_nombre')
db_usuario = os.getenv('db_usuario')
db_host = os.getenv('db_host')
db_port = os.getenv('db_port')

mail_config = {
    'MAIL_SERVER': os.getenv('MAIL_SERVER'),
    'MAIL_PORT': int(os.getenv('MAIL_PORT')), 
    'MAIL_USE_TLS': os.getenv('MAIL_USE_TLS') == False,
    'MAIL_USE_SSL': os.getenv('MAIL_USE_SSL') == True,
    'MAIL_USERNAME': os.getenv('MAIL_USERNAME'),
    'MAIL_PASSWORD': os.getenv('MAIL_PASSWORD'),
    'MAIL_DEFAULT_SENDER': os.getenv('MAIL_DEFAULT_SENDER'), 
    'MAIL_ASCII_ATTACHMENTS': os.getenv('MAIL_ASCII_ATTACHMENTS') == True,
}

# print("Mail Config:")
# print(f"Server: {os.getenv('MAIL_SERVER')}")
# print(f"Port: {os.getenv('MAIL_PORT')}")
# print(f"TLS: {os.getenv('MAIL_USE_TLS')}")
# print(f"Username: {os.getenv('MAIL_USERNAME')}")
# print(f"Password set: {'Yes' if os.getenv('MAIL_PASSWORD') else 'No'}")


Base = declarative_base()
engine = create_engine(f'postgresql://{db_usuario}@{db_host}:{db_port}/{db_nombre}')
Session = sessionmaker(bind=engine)

def get_mail_config():
    return mail_config