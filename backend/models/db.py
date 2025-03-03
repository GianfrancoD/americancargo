import os
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine, text
from dotenv import load_dotenv

load_dotenv()

# db_secret_key = os.getenv('SECRET_KEY')
db_nombre = os.getenv('db_nombre')
db_usuario = os.getenv('db_usuario')
db_password = os.getenv('db_password')
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


Base = declarative_base()

# Crear la base de datos si no existe
temp_engine = create_engine(f'mysql+pymysql://{db_usuario}:{db_password}@{db_host}:{db_port}').connect().execute(text(f"CREATE DATABASE IF NOT EXISTS {db_nombre}"))

engine = create_engine(f'mysql+pymysql://{db_usuario}:{db_password}@{db_host}:{db_port}/{db_nombre}')
# engine = create_engine(f'postgresql://{db_usuario}@{db_host}:{db_port}/{db_nombre}')
Session = sessionmaker(bind=engine)

def get_mail_config():
    return mail_config