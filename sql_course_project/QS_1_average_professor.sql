USE sql_course_project;

SELECT p.professors_name, AVG(g.grades_value) AS 'Average Grade'
FROM professors p
JOIN students_courses_grades_professors sc
ON p.professors_id = sc.professors_id
JOIN grades g
ON sc.grades_id = g.grades_id
GROUP BY p.professors_name;