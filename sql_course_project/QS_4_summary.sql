USE sql_course_project;

SELECT c.courses_name, AVG(g.grades_value) AS 'Average Grade'
FROM courses c
JOIN students_courses_grades_professors sc
ON c.courses_id = sc.courses_id
JOIN grades g
ON sc.grades_id = g.grades_id
GROUP BY c.courses_name
ORDER BY AVG(g.grades_value) ASC;