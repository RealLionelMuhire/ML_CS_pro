# app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from config.app_config import AppConfig

db = SQLAlchemy()
bcrypt = Bcrypt()

# this is of creatin and inirialising the flask app
def create_app():
    app = Flask(__name__)
    app.config.from_object(AppConfig)

    db.init_app(app)
    bcrypt.init_app(app)

    from app.routes.admin_routes import admin_routes
    app.register_blueprint(admin_routes)


    return app
