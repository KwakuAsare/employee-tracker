USE employee_db;

INSERT INTO department (name)
VALUES ("Management");

INSERT INTO department (name)
VALUES ("Tech");

INSERT INTO department (name)
VALUES ("Accounting");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 200000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Programmer", 100000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 85000, 3);


INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Morgan", "Freeman", 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mo", "Salah", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kwaku", "Asare", 2, 1);

