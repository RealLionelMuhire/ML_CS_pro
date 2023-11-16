CREATE TABLE Clients (
    ClientID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    ClientStatus VARCHAR(20),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

