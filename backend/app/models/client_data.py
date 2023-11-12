from app import db

class ClientData(db.Model):
    __tablename__ = 'client_data'

    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'), nullable=False)
    document_type = db.Column(db.String(255), nullable=False)
    document_content = db.Column(db.Text, nullable=False)

    client = db.relationship('Client', backref='client_data', lazy=True)

    def __repr__(self):
        return f"<ClientData {self.document_type} for Client {self.client.username}>"
