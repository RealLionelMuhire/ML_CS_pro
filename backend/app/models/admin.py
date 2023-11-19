from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
bcrypt = Bcrypt()

class User(db.Model):
    __tablename__ = 'Users'

    UserID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    UserType = db.Column(db.String(20), nullable=False)
    Username = db.Column(db.String(50), nullable=False, unique=True)
    Password = db.Column(db.String(255), nullable=False)
    Email = db.Column(db.String(50), nullable=False, unique=True)
    FullName = db.Column(db.String(255), nullable=False)
    NationalID = db.Column(db.String(25), nullable=False, unique=True)
    Location = db.Column(db.String(100), nullable=False)

    def __init__(self, UserType, Username, Password, Email, FullName, NationalID, Location):
        self.UserType = UserType
        self.Username = Username
        self.Password = self.hash_password(Password)
        self.Email = Email
        self.FullName = FullName
        self.NationalID = NationalID
        self.Location = Location

    def hash_password(self, password):
        return bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.Password, password)
