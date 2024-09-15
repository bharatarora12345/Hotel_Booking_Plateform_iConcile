-- data.sql

---- Insert Users
INSERT INTO appUser (name, email) VALUES ('John Doe', 'john.doe@example.com');
INSERT INTO appUser (name, email) VALUES ('Jane Smith', 'jane.smith@example.com');

-- Insert Hotels
INSERT INTO Hotel (name, location, rating, pricePerNight) VALUES ('Hotel Sunshine', 'New York', 5, 200.00);
INSERT INTO Hotel (name, location, rating, pricePerNight) VALUES ('Grand Hotel', 'Los Angeles', 4, 150.00);

-- Insert Bookings
INSERT INTO Booking (hotel_id, user_id, isDraft, isCompleted) VALUES (1, 1, TRUE, FALSE);
INSERT INTO Booking (hotel_id, user_id, isDraft, isCompleted) VALUES (2, 2, TRUE, TRUE);
INSERT INTO Booking (hotel_id, user_id, isDraft, isCompleted) VALUES (1, 2, TRUE, FALSE);
INSERT INTO Booking (hotel_id, user_id, isDraft, isCompleted) VALUES (1, 2, FALSE, TRUE);

-- Insert Visits
INSERT INTO Visit (user_id, hotel_id, visitTime) VALUES (1, 1, CURRENT_TIMESTAMP);
INSERT INTO Visit (user_id, hotel_id, visitTime) VALUES (2, 2, CURRENT_TIMESTAMP);
