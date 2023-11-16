CREATE TABLE Activities (
    ActivityID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    ClientID INT,
    ActionType VARCHAR(20),
    Timestamp TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ClientID) REFERENCES Clients(ClientID)
);

