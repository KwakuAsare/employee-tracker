USE employee_db;

INSERT INTO department (name_dept)
VALUES ("Management");

INSERT INTO department (name_dept)
VALUES ("Tech");

INSERT INTO department (name_dept)
VALUES ("Accounting");

INSERT INTO department (name_dept)
VALUES ("Human Resource");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 200000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Programmer", 100000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 85000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("HR Personnel", 65000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jurgen", "Klopp", 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Virgil", "Van Dijk", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sadio", "Mane", 2, 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Mohammed", "Salah", 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Naby", "Keita", 3, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Roberto", "Firmino", 3, 4);

