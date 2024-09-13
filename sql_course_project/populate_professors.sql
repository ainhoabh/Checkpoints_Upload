USE sql_course_project;

INSERT INTO professors(professors_name)
VALUES ('Tina Fey');

INSERT INTO professors(professors_name)
VALUES ('Alec Baldwin');

INSERT INTO professors(professors_name)
VALUES ('Amy Poehler');

INSERT INTO professors(professors_name)
VALUES ('Tracy Morgan');

INSERT INTO professors(professors_name)
VALUES ('Jane Krakowsky');

SET SQL_SAFE_UPDATES = 0;
UPDATE professors
SET professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Mathematics')
WHERE professors_name = 'Tina Fey';

UPDATE professors
SET professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Sport')
WHERE professors_name = 'Alec Baldwin';

UPDATE professors
SET professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Science')
WHERE professors_name = 'Amy Poehler';

UPDATE professors
SET professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Drama')
WHERE professors_name = 'Tracy Morgan';

UPDATE professors
SET professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Spanish')
WHERE professors_name = 'Jane Krakowsky';