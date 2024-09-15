-- schema.sql (optional for H2 setup)
CREATE TABLE IF NOT EXISTS appUser (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Hotel (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    location VARCHAR(255),
    rating INT,
    pricePerNight DOUBLE
);

CREATE TABLE IF NOT EXISTS Booking (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    hotel_id BIGINT,
    user_id BIGINT,
    isDraft BOOLEAN,
    isCompleted BOOLEAN,
    FOREIGN KEY (hotel_id) REFERENCES Hotel(id),
    FOREIGN KEY (user_id) REFERENCES appUser(id)
);

CREATE TABLE IF NOT EXISTS Visit (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT,
    hotel_id BIGINT,
    visitTime TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES appUser(id),
    FOREIGN KEY (hotel_id) REFERENCES Hotel(id)
);
