CREATE TABLE Appointments (
    AppointmentID INT PRIMARY KEY AUTO_INCREMENT,
    ClientID INT,
    Date DATETIME,
    Purpose TEXT,
    FOREIGN KEY (ClientID) REFERENCES Clients(ClientID)
);

