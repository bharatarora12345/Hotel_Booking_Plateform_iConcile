CREATE TABLE appUser (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE Hotel (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    pricePerNight DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Booking (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    hotel_id INT NOT NULL,
    user_id INT NOT NULL,
    isDraft BOOLEAN NOT NULL,
    isCompleted BOOLEAN NOT NULL,
    FOREIGN KEY (hotel_id) REFERENCES Hotel(ID),
    FOREIGN KEY (user_id) REFERENCES appUser(ID)
);

CREATE TABLE Visit (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    hotel_id INT NOT NULL,
    visitTime TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id) REFERENCES appUser(ID),
    FOREIGN KEY (hotel_id) REFERENCES Hotel(ID)
);

-- Insert data

INSERT INTO appUser (name, email) VALUES ('John Doe', 'john.doe@example.com');
INSERT INTO appUser (name, email) VALUES ('Jane Smith', 'jane.smith@example.com');

INSERT INTO Hotel (name, location, rating, pricePerNight) VALUES ('Hotel Sunshine', 'New York', 5, 200.00);
INSERT INTO Hotel (name, location, rating, pricePerNight) VALUES ('Grand Hotel', 'Los Angeles', 4, 150.00);

INSERT INTO Booking (hotel_id, user_id, isDraft, isCompleted) VALUES (1, 1, TRUE, FALSE);
INSERT INTO Booking (hotel_id, user_id, isDraft, isCompleted) VALUES (2, 2, FALSE, TRUE);

INSERT INTO Visit (user_id, hotel_id, visitTime) VALUES (1, 1, CURRENT_TIMESTAMP);
INSERT INTO Visit (user_id, hotel_id, visitTime) VALUES (2, 2, CURRENT_TIMESTAMP);
