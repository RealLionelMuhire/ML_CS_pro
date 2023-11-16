CREATE TABLE DataExtraction (
    ExtractionID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    Data TEXT,
    Timestamp TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

