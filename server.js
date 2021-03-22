const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Slayer44?!",
    database: "employee_db"
});



function run(){
    inquirer.prompt({
        name: 'questions',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View Roles', 'View Departments', 'Add Employee', 'Remove Employee', 'Add Department', 'Add Role', 'Remove Role', 'Remove Department', 'Quit']
    }).then(function(answer) {
            if(answer.questions === "View All Employees") {
                viewAllEmployees();
            }
            else if(answer.questions === "View Roles"){
                viewRoles();
            }
            else if(answer.questions === "View Departments"){
                viewDepartments();
            }
            else if(answer.questions === "Add Employee"){
                addEmployee();
            }
            else if(answer.questions === "Remove Employee"){
                removeEmployee();
            }
            else if(answer.questions === "Add Department"){
                addDepartment();
            }
            else if(answer.questions === "Add Role"){
                addRole();
            }
            else if(answer.questions === "Remove Role"){
                removeRole();
            }
            else if(answer.questions === "Remove Department"){
                removeDepartment();
            }
            else if(answer.questions === "Quit"){
                quit();
            }
        console.log(answer.questions);
    })
}

function viewAllEmployees(){
    connection.query("SELECT * FROM employee", (err,result)=> {
        if(err) throw err;
        console.table(result);
    })
}



function viewRoles(){
    connection.query("SELECT * FROM role",(err,result)=> {
        if(err) throw err;
        console.table(result);
    })
}

function viewDepartments(){
    connection.query("SELECT * FROM department",(err,result)=> {
        if(err) throw err;
        console.table(result);
        run();
    })
}


function addEmployee(){
    inquirer.prompt([
        {
            name: "employee",
            type: "input",
            message: "What is the name of your employee?"
        }
    ])
    connection.query("INSERT INTO employee(first_name,last_name, role_id, manager_id) VALUES (?, ?, ?, ?);", [response.first_name,],(err,result)=> {
        if(err) throw err;
        console.table(result);
    })
}

function addDepartment(){
    inquirer.prompt([
        {
            name: "department",
            type: "input",
            message: "What is the name of your department?"
        }
    ]).then((response)=>{
        connection.query("INSERT INTO department(department_name) VALUES (?);", [response.department], (err,result)=> {
            if(err) throw err;
            console.log("Successfully added Department!");
            run();
        })
    })
    
    }

    function addRole(){
        inquirer.prompt([
            {
                name: "title",
                type: "input",
                message: "What is the name of the role?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary of the role?"
            },
            {
                name: "department_id",
                type: "input",
                message: "What is the department id?"
            }
        ]).then((response)=>{
            connection.query("INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?);"), [response.title, response.salary, response.department_id],(err,results)=> {
                if(err) throw err;
                console.table(results);
            }
        })
    }

run();