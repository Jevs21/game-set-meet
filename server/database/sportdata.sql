
INSERT INTO sports (name) VALUES ('Aikido');
INSERT INTO sports (name) VALUES ('Archery');
INSERT INTO sports (name) VALUES ('Badminton');
INSERT INTO sports (name) VALUES ('Baseball');
INSERT INTO sports (name) VALUES ('Basketball');
INSERT INTO sports (name) VALUES ('Biathlon');
INSERT INTO sports (name) VALUES ('Billiards');
INSERT INTO sports (name) VALUES ('Bobsleigh');
INSERT INTO sports (name) VALUES ('Boxing');
INSERT INTO sports (name) VALUES ('Canoeing');
INSERT INTO sports (name) VALUES ('Cricket');
INSERT INTO sports (name) VALUES ('Croquet');
INSERT INTO sports (name) VALUES ('Curling');
INSERT INTO sports (name) VALUES ('Cycling');
INSERT INTO sports (name) VALUES ('Darts');
INSERT INTO sports (name) VALUES ('Disc Golf');
INSERT INTO sports (name) VALUES ('Diving');
INSERT INTO sports (name) VALUES ('Dodgeball');
INSERT INTO sports (name) VALUES ('Equestrian');
INSERT INTO sports (name) VALUES ('Fencing');
INSERT INTO sports (name) VALUES ('Field Hockey');
INSERT INTO sports (name) VALUES ('Figure Skating');
INSERT INTO sports (name) VALUES ('Football (American)');
INSERT INTO sports (name) VALUES ('Football (Soccer)');
INSERT INTO sports (name) VALUES ('Frisbee');
INSERT INTO sports (name) VALUES ('Golf');
INSERT INTO sports (name) VALUES ('Gymnastics');
INSERT INTO sports (name) VALUES ('Handball');
INSERT INTO sports (name) VALUES ('Ice Hockey');
INSERT INTO sports (name) VALUES ('Judo');
INSERT INTO sports (name) VALUES ('Karate');
INSERT INTO sports (name) VALUES ('Kayaking');
INSERT INTO sports (name) VALUES ('Kickboxing');
INSERT INTO sports (name) VALUES ('Kitesurfing');
INSERT INTO sports (name) VALUES ('Lacrosse');
INSERT INTO sports (name) VALUES ('Luge');
INSERT INTO sports (name) VALUES ('Marathons');
INSERT INTO sports (name) VALUES ('Mixed Martial Arts (MMA)');
INSERT INTO sports (name) VALUES ('Motocross');
INSERT INTO sports (name) VALUES ('Mountain Biking');
INSERT INTO sports (name) VALUES ('Netball');
INSERT INTO sports (name) VALUES ('Orienteering');
INSERT INTO sports (name) VALUES ('Paddleboarding');
INSERT INTO sports (name) VALUES ('Paintball');
INSERT INTO sports (name) VALUES ('Parkour');
INSERT INTO sports (name) VALUES ('Polo');
INSERT INTO sports (name) VALUES ('Quidditch');
INSERT INTO sports (name) VALUES ('Racquetball');
INSERT INTO sports (name) VALUES ('Rowing');
INSERT INTO sports (name) VALUES ('Rugby');
INSERT INTO sports (name) VALUES ('Sailing');
INSERT INTO sports (name) VALUES ('Skateboarding');
INSERT INTO sports (name) VALUES ('Skiing');
INSERT INTO sports (name) VALUES ('Skydiving');
INSERT INTO sports (name) VALUES ('Snooker');
INSERT INTO sports (name) VALUES ('Snowboarding');
INSERT INTO sports (name) VALUES ('Softball');
INSERT INTO sports (name) VALUES ('Squash');
INSERT INTO sports (name) VALUES ('Surfing');
INSERT INTO sports (name) VALUES ('Swimming');
INSERT INTO sports (name) VALUES ('Table Tennis');
INSERT INTO sports (name) VALUES ('Taekwondo');
INSERT INTO sports (name) VALUES ('Tennis');
INSERT INTO sports (name) VALUES ('Track and Field');
INSERT INTO sports (name) VALUES ('Triathlon');
INSERT INTO sports (name) VALUES ('Ultimate Frisbee');
INSERT INTO sports (name) VALUES ('Volleyball');
INSERT INTO sports (name) VALUES ('Wakeboarding');
INSERT INTO sports (name) VALUES ('Water Polo');
INSERT INTO sports (name) VALUES ('Weightlifting');
INSERT INTO sports (name) VALUES ('Wrestling');
INSERT INTO sports (name) VALUES ('Yoga');
INSERT INTO sports (name) VALUES ('Zumba');

INSERT INTO sports_skill_levels (sport_id, skill_level, name) SELECT id, 0, 'Beginner' FROM sports;
INSERT INTO sports_skill_levels (sport_id, skill_level, name) SELECT id, 1, 'Intermediate' FROM sports;
INSERT INTO sports_skill_levels (sport_id, skill_level, name) SELECT id, 2, 'Advanced' FROM sports;
INSERT INTO sports_skill_levels (sport_id, skill_level, name) SELECT id, 3, 'Expert' FROM sports;

