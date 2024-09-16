CREATE TABLE app_user (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Hotel (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    price_per_night DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Booking (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    hotel_id INT NOT NULL,
    user_id INT NOT NULL,
    is_draft BOOLEAN NOT NULL,
    is_completed BOOLEAN NOT NULL,
    FOREIGN KEY (hotel_id) REFERENCES Hotel(ID),
    FOREIGN KEY (user_id) REFERENCES app_user(ID)
);

CREATE TABLE Visit (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    hotel_id INT NOT NULL,
    visit_time TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id) REFERENCES app_user(ID),
    FOREIGN KEY (hotel_id) REFERENCES Hotel(ID)
);

-- Insert data

INSERT INTO app_user (name, email,password) VALUES ('John Doe', 'john.doe@example.com','1234');
INSERT INTO app_user (name, email,password) VALUES ('Jane Smith', 'jane.smith@example.com','1234');

INSERT INTO Hotel (name, location, rating, price_per_night) VALUES ('Hotel Sunshine', 'New York', 5, 200.00);
INSERT INTO Hotel (name, location, rating, price_per_night) VALUES ('Grand Hotel', 'Los Angeles', 4, 150.00);
INSERT INTO Hotel (name, location, rating, price_per_night) VALUES ('Hotel Paradise', 'Miami', 4, 180.00);
INSERT INTO Hotel (name, location, rating, price_per_night) VALUES ('Ocean Breeze Hotel', 'San Francisco', 5, 220.00);
INSERT INTO Hotel (name, location, rating, price_per_night) VALUES ('Mountain View Resort', 'Denver', 3, 120.00);
INSERT INTO Hotel (name, location, rating, price_per_night) VALUES ('Desert Sands Hotel', 'Las Vegas', 5, 250.00);
INSERT INTO Hotel (name, location, rating, price_per_night) VALUES ('City Central Hotel', 'Chicago', 3, 130.00);
INSERT INTO Hotel (name, location, rating, price_per_night) VALUES ('Lakeside Inn', 'Minneapolis', 4, 160.00);
INSERT INTO Hotel (name, location, rating, price_per_night) VALUES ('Sunset Boulevard Hotel', 'Los Angeles', 3, 140.00);
INSERT INTO Hotel (name, location, rating, price_per_night) VALUES ('Riverfront Plaza', 'San Antonio', 4, 190.00);
INSERT INTO Hotel (name, location, rating, price_per_night) VALUES ('Downtown Suites', 'Seattle', 3, 110.00);
INSERT INTO Hotel (name, location, rating, price_per_night) VALUES ('Beachfront Hotel', 'Honolulu', 5, 300.00);
INSERT INTO Hotel (name, location, rating, price_per_night) VALUES ('Ski Resort Lodge', 'Aspen', 4, 230.00);
INSERT INTO Hotel (name, location, rating, price_per_night) VALUES ('Royal Palace Hotel', 'Washington, D.C.', 5, 280.00);

INSERT INTO Booking (hotel_id, user_id, is_draft, is_completed) VALUES (1, 1, TRUE, FALSE);
INSERT INTO Booking (hotel_id, user_id, is_draft, is_completed) VALUES (2, 2, FALSE, TRUE);

INSERT INTO Visit (user_id, hotel_id, visit_time) VALUES (1, 1, CURRENT_TIMESTAMP);
INSERT INTO Visit (user_id, hotel_id, visit_time) VALUES (2, 2, CURRENT_TIMESTAMP);
