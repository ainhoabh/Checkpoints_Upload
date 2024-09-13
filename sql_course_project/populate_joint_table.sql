USE sql_course_project;

SELECT *
FROM students_courses_grades_professors;

BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Dave Smith'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Mathematics'),
  (SELECT grades_id FROM grades WHERE grades_value = 5),
  (SELECT professors_id FROM professors WHERE professors_name = 'Tina Fey')
);

BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Dave Smith'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Sport'),
  (SELECT grades_id FROM grades WHERE grades_value = 10),
  (SELECT professors_id FROM professors WHERE professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Sport'))
);

BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Dave Smith'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Science'),
  (SELECT grades_id FROM grades WHERE grades_value = 5),
  (SELECT professors_id FROM professors WHERE professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Science'))
);

BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Emma Fox'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Sport'),
  (SELECT grades_id FROM grades WHERE grades_value = 7),
  (SELECT professors_id FROM professors WHERE professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Sport'))
);


BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Emma Fox'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Drama'),
  (SELECT grades_id FROM grades WHERE grades_value = 9),
  (SELECT professors_id FROM professors WHERE professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'DRAMA'))
);

BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Emma Fox'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Spanish'),
  (SELECT grades_id FROM grades WHERE grades_value = 8),
  (SELECT professors_id FROM professors WHERE professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Spanish'))
);

BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Will Adams'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Spanish'),
  (SELECT grades_id FROM grades WHERE grades_value = 5),
  (SELECT professors_id FROM professors WHERE professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Spanish'))
);

BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Will Adams'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Sport'),
  (SELECT grades_id FROM grades WHERE grades_value = 4),
  (SELECT professors_id FROM professors WHERE professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Sport'))
);

BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Will Adams'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Mathematics'),
  (SELECT grades_id FROM grades WHERE grades_value = 5),
  (SELECT professors_id FROM professors WHERE professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Mathematics'))
);

BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Amy Simpson'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Mathematics'),
  (SELECT grades_id FROM grades WHERE grades_value = 6),
  (SELECT professors_id FROM professors WHERE professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Mathematics'))
);

BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Amy Simpson'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Sport'),
  (SELECT grades_id FROM grades WHERE grades_value = 9),
  (SELECT professors_id FROM professors WHERE professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Sport'))
);

BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Anne Allen'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Mathematics'),
  (SELECT grades_id FROM grades WHERE grades_value = 6),
  (SELECT professors_id FROM professors WHERE professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Mathematics'))
);

BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Anne Allen'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Drama'),
  (SELECT grades_id FROM grades WHERE grades_value = 5),
  (SELECT professors_id FROM professors WHERE professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Drama'))
);

BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Anne Allen'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Science'),
  (SELECT grades_id FROM grades WHERE grades_value = 7),
  (SELECT professors_id FROM professors WHERE professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Science'))
);

BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Anne Allen'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Spanish'),
  (SELECT grades_id FROM grades WHERE grades_value = 7),
  (SELECT professors_id FROM professors WHERE professors_course_id = (SELECT courses_id FROM courses WHERE courses_name = 'Spanish'))
);

BEGIN;
INSERT INTO students_courses_grades_professors (students_id, courses_id, grades_id, professors_id)
VALUES (
  (SELECT students_id FROM students WHERE students_name = 'Dave Smith'),
  (SELECT courses_id FROM courses WHERE courses_name = 'Arts'),
  (SELECT grades_id FROM grades WHERE grades_value = 7),
  (SELECT professors_id FROM professors WHERE professors_name = 'Tina Fey')
);