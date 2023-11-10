from app import db

class Administrator(db.Model):
    __tablename__ = 'administrators'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(50), nullable=False)  # Assuming roles like 'Level 1', 'Level 2', 'Level 3'
    # Add other fields as per your requirements, e.g., name, email, etc.

    def __repr__(self):
        return f"<Administrator {self.username}>"
