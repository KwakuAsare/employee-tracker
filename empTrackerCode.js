var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  
  port: 3306,

  
  user: "root",

  
  password: "MAKEway45@$%",
  database: "employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    manageEmp();
  });

  function manageEmp() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "View all employees by department",
          "View all employees by manager",
          "Add employee",
          "Update employee role",
          "Update employee manager",
          "Remove employee",
          "exit"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View all employees":
          allEmployees();
          break;
  
        case "View all employees by department":
          empByDept();
          break;
  
        case "View all employees by manager":
          empByManager();
          break;
  
        case "Add employee":
          addEmployee();
          break;

        case "Update employee role":
          updateRole();
          break;
        
        case "Update employee manager":
            updateMan();
            break;
        
        case "Remove employee":
             removeEmp();
             break;  

        case "exit":
          connection.end();
          break;
        }
      });
  }

function allEmployees() {
    // connection.query("SELECT * FROM employee", function(err, res) {
    //     if (err) throw err;
    //     for (var i = 0; i < res.length; i++) {
    //     console.table("ID: " + res[i].id + " || First Name: " + res[i].first_name + " || Last: " + res[i].last_name + " || Role ID: " + res[i].role_id);
    //       }
          
    //     manageEmp();
    //   });
    connection.query(
        "SELECT first_name, last_name, title FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id ORDER BY title", 
        function(err, res) {
        if (err) throw err;
        console.table(res);
        manageEmp();
      });
}

function empByDept() {
    connection.query("SELECT * FROM department", function(err,results){
        if (err) throw err;
      //once i have the departments prompt user to choose which departments
        inquirer.prompt([
          {
            type: 'rawlist',
            name: 'department',
            choices: function() {
                console.log(results);
                var choiceArray = [];
                for (var i = 0; i < results.length; i++) {
                  choiceArray.push(results[i].name);
                }
                return choiceArray;
            },
            message: 'Select a department:',
          }
        ])
        .then(function(answer) {
            console.log(answer);
            // get the information of the chosen item
            var chosenDept;
            for (var i = 0; i < results.length; i++) {
              if (results[i].name === answer.department) {
                chosenDept = results[i];
              }
              
          }
          connection.query("SELECT first_name, last_name,role_id, manage_id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE department.name = " + chosenDept, 
               function(err, result) {
                if (err) throw err;
                console.table(result);
            })
        });
     });

    manageEmp();
}

function empByManager() {

    manageEmp();
}

function addEmployee() {

    manageEmp();
}

function updateRole() {

    manageEmp();
}

function updateRole() {

    manageEmp();
}

function updateMan() {

    manageEmp();
}

function removeEmp() {

    manageEmp();
}