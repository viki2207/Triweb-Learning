CREATE DATABASE MYSQL_WORKSHOP_2023
use MYSQL_WORKSHOP_2023;

CREATE TABLE Students(
id int(11) NOT null AUTO_INCREMENT PRIMARY KEY,
student_name varchar(255) NOT null,
    class int(11) DEFAULT 6,
    mobile varchar(100)
    
);

create TABLE teacher(
id int(11) NOT null AUTO_INCREMENT PRIMARY KEY, 
teacher_name varchar(255) NOT null,
mobile varchar(100) NOT null    
)

--foreign key
CREATE TABLE classes(
id int(11) not null AUTO_INCREMENT,
class_name varchar(100) not null,
teacher_id int(11) NOT null,
PRIMARY KEY(id),
FOREIGN KEY(teacher_id) REFERENCES teacher(id)   
)
-- //change column class_name
alter table Students add FOREIGN KEY(class_id) REFERENCES classes(id)

--delete table
DROP TABLE teacher123
--Crud Operation
--insert
INSERT INTO teacher(mobile, teacher_name) values("1111", "Vinni");
--create
select * from teacher
--update
update teacher set mobile = "2222";

--Truncate
TRUNCATE TABLE class

--limit
select * from Students where class_id = 5 limit 2;
--like
select * from Students where student_name like 'V%i';
--underscore
select * from students where student_name like 'V_n';

--inoperator
select * from Students where class_id in (1,2,4);
--second highest salary
select max(salary) from teachers where salary not in (select max(salary) from teachers);
--between operator
select * from teachers where salary between 2000 and 5000;

--left join
select cl.class_name , tr.teacher_name as class_teacher from classes cl left join teachers tr on cl.teacher_id = tr.id;
--inner join
select cl.class_name , tr.teacher_name as class_teacher from classes cl INNER join teacher tr on cl.teacher_id = tr.id;
--right join
select cl.class_name , tr.teacher_name as class_teacher from classes cl RIGHT join teacher tr on cl.teacher_id = tr.id;
--cross join
select cl.class_name , tr.teacher_name as class_teacher from classes cl CROSS join teacher tr on cl.teacher_id = tr.id; 

---union
select teacher_name from teacher
UNION
select student_name from Students

--groupby
select * from Students group by class_id

select count(*) as number_of_Students from Students group by class_id

--having
select class_id,count(*) as number_of_Students from Students group by class_id having number_of_Students >1;