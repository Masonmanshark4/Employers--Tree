const inquirer = require('inquirer');

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Passwrd20!',
    database: 'employee_db',
});
// Connect to the MySQL server
connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    start();
});
// Start the application
function start() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'Add Department',
                'Add Role',
                'Add Employee',
                'View Department',
                'View Roles',
                'View Employees',
                'Update Employee Role',
                'Delete Department',
                'Delete Role',
                'Delete Employee',
                'Exit',
            ],
        })
        .then((answer) => {
            switch (answer.action) {
                case 'Add Department':
                    addDepartment();
                    break;

                case 'Add Role':
                    addRole();
                    break;

                case 'Add Employee':
                    addEmployee();
                    break;

                case 'View Departments':
                    viewDepartments();
                    break;

                case 'View Roles':
                    viewRoles();
                    break;

                case 'View Employees':
                    viewEmployees();
                    break;

                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;

                case 'Exit':
                    connection.end();
                    break;
                
                case 'Delete Department':
                    deleteDepartment();
                    break;
                    
                case 'Delete Role':
                    deleteRole();
                    break;
                    
                case 'Delete Employee':
                    deleteEmployee();
                    break;
                        
            }
        });
}

function addDepartment() {
    inquirer
        .prompt({
            name: 'name',
            type: 'input',
            message: 'What is the name of the department?',
        })
        .then((answer) => {
            connection.query(
                'INSERT INTO department SET ?',
                {
                    name: answer.name,
                },
                (err) => {
                    if (err) throw err;
                    console.log('Department added successfully!');
                    start();
                }
            );
        });
}

function addRole() {
    inquirer
        .prompt([
            {
                name: 'title',
                type: 'input',
                message: 'What is the title of the role?',
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is the salary of the role?',
            },
            {
                name: 'department_id',
                type: 'input',
                message: 'What is the department id of the role?',
            },
        ])
        .then((answer) => {
            connection.query(
                'INSERT INTO role SET ?',
                {
                    title: answer.title,
                    salary: answer.salary,
                    department_id: answer.department_id,
                },
                (err) => {
                    if (err) throw err;
                    console.log('Role added successfully!');
                    start();
                }
            );
        });
}

function addEmployee() {
    inquirer
        .prompt([
            {
                name: 'first_name',
                type: 'input',
                message: "What is the employee's first name?",
            },
            {
                name: 'last_name',
                type: 'input',
                message: "What is the employee's last name?",
            },
            {
                name: 'role_id',
                type: 'input',
                message: "What is the employee's role id?",
            },
            {
                name: 'manager_id',
                type: 'input',
                message: "What is the employee's manager id?",
            },
        ])
        .then((answer) => {
            connection.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: answer.role_id,
                    manager_id: answer.manager_id,
                },
                (err) => {
                    if (err) throw err;
                    console.log('Employee added successfully!');
                    start();
                }
            );
        });
}
// View Departments, Roles, Employees
function viewDepartments() {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function viewRoles() {
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function viewEmployees() {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}
// Update Employee Role
function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                name: 'employee_id',
                type: 'input',
                message: "What is the employee's id?",
            },
            {
                name: 'role_id',
                type: 'input',
                message: "What is the employee's new role id?",
            },
        ])
        .then((answer) => {
            connection.query(
                'UPDATE employee SET ? WHERE ?',
                [
                    {
                        role_id: answer.role_id,
                    },
                    {
                        id: answer.employee_id,
                    },
                ],
                (err) => {
                    if (err) throw err;
                    console.log('Employee role updated successfully!');
                    start();
                }
            );
        });
}
// Delete Department, Role, Employee
function deleteDepartment() {
    inquirer
        .prompt({
            name: 'department_id',
            type: 'input',
            message: 'Enter the ID of the department you want to delete:',
        })
        .then((answer) => {
            connection.query(
                'DELETE FROM department WHERE id = ?',
                [answer.department_id],
                (err) => {
                    if (err) throw err;
                    console.log('Department deleted successfully!');
                    start();
                }
            );
        });
}

function deleteRole() {
    inquirer
        .prompt({
            name: 'role_id',
            type: 'input',
            message: 'Enter the ID of the role you want to delete:',
        })
        .then((answer) => {
            connection.query(
                'DELETE FROM role WHERE id = ?',
                [answer.role_id],
                (err) => {
                    if (err) throw err;
                    console.log('Role deleted successfully!');
                    start();
                }
            );
        });
}

function deleteEmployee() {
    inquirer
        .prompt({
            name: 'employee_id',
            type: 'input',
            message: 'Enter the ID of the employee you want to delete:',
        })
        .then((answer) => {
            connection.query(
                'DELETE FROM employee WHERE id = ?',
                [answer.employee_id],
                (err) => {
                    if (err) throw err;
                    console.log('Employee deleted successfully!');
                    start();
                }
            );
        });
}

module.exports = connection;
