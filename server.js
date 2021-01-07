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
        console.log(answer);
            if(answer.questions === "View All Employees") {
                viewAllEmployees();
            }
            else if(answer.questions === 1){
                viewRoles();
            }
            else if(answer.questions === 2){
                viewDepartments();
            }
            else if(answer.questions === 3){
                addEmployee();
            }
            else if(answer.questions === 4){
                removeEmployee();
            }
            else if(answer.questions === 5){
                addDepartment();
            }
            else if(answer.questions === 6){
                addRole();
            }
            else if(answer.questions === 7){
                removeRole();
            }
            else if(answer.questions === 8){
                removeDepartment();
            }
            else if(answer.questions === 9){
                quit();
            }
        
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
    })
}
run();

// function addEmployee(){
//     connection.query("SELECT * FROM department",(err,result)=> {
//         if(err) throw err;
//         console.table(result);
//     })
// }

// function addDepartment(){
//     inquirer.prompt([
//         {
//             name: "department",
//             type: "input",
//             message: "What is the name of your department?"
//         }
//     ]).then((response)=>{
//         connection.query("INSERT INTO department(name))", [response.department])
//     })
    
//     }

