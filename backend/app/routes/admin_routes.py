from flask import Blueprint, request, jsonify
from app.models.admin import Admin  # Assuming Admin is the renamed User model
from app import db, bcrypt

admin_routes = Blueprint('admin_routes', __name__)

@admin_routes.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    username_or_email = data.get('username_or_email')
    password = data.get('password')

    if not username_or_email or not password:
        return jsonify({'error': 'Please provide both username/email and password'}), 400

    admin = Admin.query.filter_by(username=username_or_email).first()

    if not admin:
        # Check if the username is not found, try to find by email
        admin = Admin.query.filter_by(email=username_or_email).first()

    if admin and bcrypt.check_password_hash(admin.password, password):
        # Passwords match, user is authenticated
        # You can create a JWT token here and return it if needed
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'error': 'Incorrect username/email or password'}), 401
