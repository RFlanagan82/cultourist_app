-- FIRST RUN Countries and INSERTS
-- THEN RUN users and INSERTS
-- END with RUN Posts and INSERTS

INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("France", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Italy", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Ireland", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Albania", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Armenia", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Austria", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Belarus", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Belgium", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Bosnia", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Bulgaria", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Croatia", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Cyprus", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Czech Republic", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Denmark", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Estonia", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Finland", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("France", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Georgia", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Germany", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Greece", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Hungary", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Iceland", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Ireland", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Italy", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Latvia", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Liechtenstein", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Lithuania", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Luxembourg", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Malta", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Moldova", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Monaco", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Montenegro", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Netherlands", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("North Macedonia", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Norway", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Poland", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Portugal", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Romania", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Russia", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("San Marino", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Serbia", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Slovakia", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Slovenia", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Spain", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Sweden", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Switzerland", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Turkey", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Ukraine", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("United Kingdom", NOW(), NOW());
INSERT INTO Countries (name,createdAt,updatedAt) VALUES ("Vatican City", NOW(), NOW());

INSERT INTO users (full_name, numOfPosts,createdAt,updatedAt) VALUES ("Dane Walsh", 2, NOW(), NOW());
INSERT INTO users (full_name, numOfPosts,createdAt,updatedAt) VALUES ("Batman Wayne", 3, NOW(), NOW());
INSERT INTO users (full_name, numOfPosts,createdAt,updatedAt) VALUES ("Robin Grayson", 6, NOW(), NOW());

INSERT INTO Posts(title, body, category, createdAt, updatedAt, CountryId, UserId) VALUES("Don't Do this!", "Walking over people in any park is a big no-no.", "Taboos", NOW(), NOW(), 1, 1);
INSERT INTO Posts(title, body, category, createdAt, updatedAt, CountryId, UserId) VALUES("Pictures at the Colloseum aren't free!", "The gladiator dressed men charge an arm and a leg for these pics", "Scams", NOW(), NOW(), 2, 1);
INSERT INTO Posts(title, body, category, createdAt, updatedAt, CountryId, UserId) VALUES("Don't Order Whiskey", "When at a restaurant in Rome, don't order Whiskey. They'll look at you like you're an idiot", "Taboos", NOW(), NOW(), 2, 2);
INSERT INTO Posts(title, body, category, createdAt, updatedAt, CountryId, UserId) VALUES("France Schmance!", "Not enough criminals dressing up before commiting crimes.", "Customs", NOW(), NOW(), 1, 3);
INSERT INTO Posts(title, body, category, createdAt, updatedAt, CountryId, UserId) VALUES("Ireland?!", "Locals pee on the blarney stone. Do not kiss.", "Culture", NOW(), NOW(), 3, 3);
INSERT INTO Posts(title, body, category, createdAt, updatedAt, CountryId, UserId) VALUES("Italy Tower.", "The leaning tower is NOT made of pizza. Very dissapointing", "Scams", NOW(), NOW(), 2, 2);
INSERT INTO Posts(title, body, category, createdAt, updatedAt, CountryId, UserId) VALUES("Belfast", "Game of Thrones was filmed here. Thats culture right?", "Culture", NOW(), NOW(), 3, 3);

SELECT * FROM culTourist_db.Users;
SELECT * FROM culTourist_db.Countries;
SELECT * FROM culTourist_db.Posts;