# app/routes/client_routes.py

from flask import jsonify
from app import app, db
from app.models import Client

@app.route('/api/clients', methods=['GET'])
def get_clients():
    clients = Client.query.all()
    client_data = [{"id": client.id, "username": client.username} for client in clients]
    response = jsonify({"clients": client_data})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
