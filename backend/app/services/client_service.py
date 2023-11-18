from app.models.client import Client

def get_all_clients():
    clients = Client.query.all()
    # You may want to format the data or do additional processing here if needed
    return clients
