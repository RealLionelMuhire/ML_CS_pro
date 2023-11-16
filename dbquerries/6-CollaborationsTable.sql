CREATE TABLE Collaborations (
    CollaborationID INT PRIMARY KEY AUTO_INCREMENT,
    SenderID INT,
    ReceiverID INT,
    Message TEXT,
    Document BLOB,
    Timestamp TIMESTAMP,
    FOREIGN KEY (SenderID) REFERENCES Users(UserID),
    FOREIGN KEY (ReceiverID) REFERENCES Users(UserID)
);

