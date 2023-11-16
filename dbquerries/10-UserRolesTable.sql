CREATE TABLE UserRoles (
    UserRoleID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    RoleID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (RoleID) REFERENCES Roles(RoleID),
    UNIQUE KEY unique_user_role (UserID, RoleID)
);

