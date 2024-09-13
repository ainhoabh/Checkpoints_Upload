USE sql_course_project;

SELECT c.courses_name, s.students_name
FROM courses c
JOIN students_courses_grades_professors sc
ON c.courses_id = sc.courses_id
JOIN students s
ON sc.students_id = s.students_id
GROUP BY s.students_name, c.courses_name;