-- FIRST RUN Countries and INSERTS
-- THEN RUN USER and INSERTS
-- END with RUN POSTS and INSERTS

INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("France", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Italy", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Ireland", NOW(), NOW());

INSERT INTO Posts(title, body, category, createdAt, updatedAt, CountryId, UserId) VALUES("Don't Do this!", "Walking over people in any park is a big no-no.", "Taboos", NOW(), NOW(), 1, 1);
INSERT INTO Posts(title, body, category, createdAt, updatedAt, CountryId, UserId) VALUES("Pictures at the Colloseum aren't free!", "The gladiator dressed men charge an arm and a leg for these pics", "Scams", NOW(), NOW(), 2, 1);
INSERT INTO Posts(title, body, category, createdAt, updatedAt, CountryId, UserId) VALUES("Don't Order Whiskey", "When at a restaurant in Rome, don't order Whiskey. They'll look at you like you're an idiot", "Taboos", NOW(), NOW(), 2, 2);
INSERT INTO Posts(title, body, category, createdAt, updatedAt, CountryId, UserId) VALUES("France Schmance!", "Not enough criminals dressing up before commiting crimes.", "Customs", NOW(), NOW(), 1, 3);
INSERT INTO Posts(title, body, category, createdAt, updatedAt, CountryId, UserId) VALUES("Ireland?!", "Locals pee on the blarney stone. Do not kiss.", "Culture", NOW(), NOW(), 3, 3);
INSERT INTO Posts(title, body, category, createdAt, updatedAt, CountryId, UserId) VALUES("Italy Tower.", "The leaning tower is NOT made of pizza. Very dissapointing", "Scams", NOW(), NOW(), 2, 2);
INSERT INTO Posts(title, body, category, createdAt, updatedAt, CountryId, UserId) VALUES("Belfast", "Game of Thrones was filmed here. Thats culture right?", "Culture", NOW(), NOW(), 3, 3);


INSERT INTO users (full_name, numOfPosts,createdAt,updatedAt) VALUES ("Dane Walsh", 2, NOW(), NOW());
INSERT INTO users (full_name, numOfPosts,createdAt,updatedAt) VALUES ("Batman Wayne", 3, NOW(), NOW());
INSERT INTO users (full_name, numOfPosts,createdAt,updatedAt) VALUES ("Robin Grayson", 2, NOW(), NOW());


SELECT * FROM culTourist_db.Users;
SELECT * FROM culTourist_db.Countries;
SELECT * FROM culTourist_db.Posts;