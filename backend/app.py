
import os
import secrets
from flask import Flask, redirect, request, jsonify, session as flask_session, url_for
from flask_login import LoginManager, current_user, login_required, login_user, logout_user
from extensions import mail
from sqlalchemy import create_engine, func
from sqlalchemy.ext.declarative import declarative_base
from flask_cors import CORS
# from extensions import mail

from models.db import Session, get_mail_config
from router.complaint import reclamos

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000","methods": ["POST"]}}) 

mail_config = get_mail_config()
app.config.update(mail_config)
mail.init_app(app)


session = Session()

app.register_blueprint(reclamos, url_prefix="/api/v1")


if __name__ == '__main__':
    app.run(debug=True)
    