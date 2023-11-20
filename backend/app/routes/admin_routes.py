from flask import Blueprint, request, jsonify, make_response
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from app.models.admin import User
from app import db, bcrypt

admin_routes = Blueprint('admin_routes', __name__)

# Enable CORS for the entire blueprint
CORS(admin_routes, resources={r"/admin/*": {"origins": "http://127.0.0.1:3000"}})

@admin_routes.route('/login', methods=['POST', 'OPTIONS'])
def login():
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "http://127.0.0.1:3000")
        response.headers.add("Access-Control-Allow-Methods", "POST")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type")
        return response

    data = request.get_json()

    username_or_email = data.get('username_or_email')
    password = data.get('password')

    if not username_or_email or not password:
        return jsonify({'error': 'Please provide both username/email and password'}), 400

    user = User.query.filter((User.username == username_or_email) | (User.email == username_or_email)).first()

    if user and bcrypt.check_password_hash(user.password, password):
        # Passwords match, user is authenticated

        # Create a JWT token
        access_token = create_access_token(identity=user.id)

        return jsonify({'access_token': access_token}), 200
    else:
        return jsonify({'error': 'Incorrect username/email or password'}), 401

@admin_routes.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200
