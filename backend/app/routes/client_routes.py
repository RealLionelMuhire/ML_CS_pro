from flask import Blueprint, jsonify
from app.services.client_service import get_all_clients

client_routes = Blueprint('client_routes', __name__)

@client_routes.route('/api/clients', methods=['GET'])
def get_clients():
    clients = get_all_clients()
    return jsonify({'clients': clients})
