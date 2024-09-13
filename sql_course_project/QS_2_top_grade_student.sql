USE sql_course_project;

SELECT s.students_name, MAX(g.grades_value) AS 'Top Grade'
FROM students s
JOIN students_courses_grades_professors sc
ON s.students_id = sc.students_id
JOIN grades g
ON sc.grades_id = g.grades_id
GROUP BY s.students_name;