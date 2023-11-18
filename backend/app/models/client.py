from app import db

class Client(db.Model):
    __tablename__ = 'Clients'

    ClientID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    UserID = db.Column(db.Integer, db.ForeignKey('users.UserID'))
    ClientStatus = db.Column(db.String(20))
    ClientName = db.Column(db.String(100), nullable=False)
    CompanyName = db.Column(db.String(100), nullable=False)
    NationalID = db.Column(db.String(20), nullable=False)
    PassportNumber = db.Column(db.String(20))
    PassportExpirationDate = db.Column(db.Date)
    TINNumber = db.Column(db.String(20), nullable=False)
    RegistrationIndexNumber = db.Column(db.String(20), nullable=False)
    OwnerShareholderID = db.Column(db.String(20), nullable=False)
    StageOfCompany = db.Column(db.String(50), nullable=False)
    CategoryOfCompany = db.Column(db.String(50), nullable=False)
    CopyOfIDOrPassport = db.Column(db.LargeBinary, nullable=False)
    RegistrationCertificate = db.Column(db.LargeBinary, nullable=False)
    TaxCertificate = db.Column(db.LargeBinary, nullable=False)
    ProofOfResidence = db.Column(db.LargeBinary, nullable=False)
    Shareholder = db.Column(db.LargeBinary, nullable=False)
    Email = db.Column(db.String(50), nullable=False)
    PhoneNumber = db.Column(db.String(20), nullable=False)
    Password = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f"<Client {self.ClientName}>"
