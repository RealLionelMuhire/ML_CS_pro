CREATE TABLE Alerts (
    AlertID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    AlertType VARCHAR(50),
    Deadline DATETIME,
    Action TEXT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

