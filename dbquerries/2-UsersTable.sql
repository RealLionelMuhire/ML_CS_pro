CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    UserType VARCHAR(20) NOT NULL,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(50) NOT NULL);

