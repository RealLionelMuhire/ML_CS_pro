CREATE TABLE Clients (
    ClientID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    ClientStatus VARCHAR(20) NOT NULL,
    ClientName VARCHAR(100) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    CompanyName VARCHAR(100) NOT NULL,
    NationalID VARCHAR(20) NOT NULL,
    PassportNumber VARCHAR(20),
    PassportExpirationDate DATE,
    TINNumber VARCHAR(20) NOT NULL,
    RegistrationIndexNumber VARCHAR(20) NOT NULL,
    OwnerShareholderID VARCHAR(20) NOT NULL,
    StageOfCompany VARCHAR(50) NOT NULL,
    CategoryOfCompany VARCHAR(50) NOT NULL,
    CopyOfIDOrPassport BLOB NOT NULL,
    RegistrationCertificate BLOB NOT NULL,
    TaxCertificate BLOB NOT NULL,
    ProofOfResidence BLOB NOT NULL,
    Shareholder BLOB NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

