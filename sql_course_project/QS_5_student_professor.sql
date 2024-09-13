USE sql_course_project;

SELECT s.students_name, p.professors_name, COUNT(DISTINCT sc.courses_ID)
FROM students_courses_grades_professors sc
JOIN students s
ON s.students_id = sc.students_id
JOIN professors p
ON sc.professors_id = p.professors_id
GROUP BY sc.students_id, sc.professors_id
ORDER BY COUNT(DISTINCT sc.courses_ID) DESC;