USE employees_db;

INSERT INTO department (name)
VALUES ("Outdoors");
INSERT INTO department (name)
VALUES ("Electronics");
INSERT INTO department (name)
VALUES ("Fashion");
INSERT INTO department (name)
VALUES ("Food");

INSERT INTO role (title, salary, department_id)
VALUES ("Outing Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Electronics Lead", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Fashion Lead", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Food Lead", 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sung", "Ji-Woo", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Katelyn", "Todd", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ash", "Ketchum", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kenny", "McKormick", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Gary", "Squarepants", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Cruise", 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Eddie", "Brock", 1, null);
