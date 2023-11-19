from flask import Blueprint, request, jsonify
from app.services.authentication_service import register_admin

auth_routes = Blueprint('auth', __name__)

@auth_routes.route('/register', methods=['POST'])
def register():
    try:
        # Get data from the request
        data = request.get_json()

        # Validate incoming data (you can add more validation as needed)
        required_fields = ['username', 'password', 'email', 'user_type', 'full_name', 'national_id', 'location']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400

        # Create a new admin in the database
        admin = register_admin(
            username=data['username'],
            password=data['password'],
            email=data['email'],
            user_type=data['user_type'],
            full_name=data['full_name'],
            national_id=data['national_id'],
            location=data['location']
            # Add more fields as needed
        )

        # You may want to generate and return a JWT token for the registered admin

        return jsonify({'message': 'Admin registered successfully', 'admin_id': admin.id}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500
