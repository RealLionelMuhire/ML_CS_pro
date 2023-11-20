#!/usr/bin/python3
# app/__init__.py
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from config.app_config import AppConfig

db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object(AppConfig)

    # Initialize extensions
    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)

    # ... (other configurations)

    # Register blueprints
    from app.routes.admin_routes import admin_routes
    app.register_blueprint(admin_routes, url_prefix='/admin')  # Adjust the prefix as needed

    # ... (other blueprints)

    # Error handling
    @app.errorhandler(404)
    def page_not_found(e):
        return jsonify({'error': 'Resource not found'}), 404

    @app.errorhandler(500)
    def internal_server_error(e):
        return jsonify({'error': 'Internal server error'}), 500

    return app
