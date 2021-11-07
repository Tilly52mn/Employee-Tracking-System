const express = require('express');
const db = require('./db/connection');
// const apiRoutes = require('./routes');
// const PORT = process.env.PORT || 3001;
const app = express();

const inquirer = require("inquirer");
const cTable = require('console.table');

// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use('/api', apiRoutes);

// app.use((req, res) => {
//     res.status(404).end();
// });

// Start server after DB connection
// db.connect(err => {
  //   if (err) throw err;
  //   console.log('Database connected.');
  //   app.listen(PORT, () => {
  //     console.log(`Server running on port ${PORT}`);
  //   });
  // });

// main menu question
  var menuQuestion = [
    {
        type: 'list',
        name: 'responce',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'add an employee', 'Update Employee role','Close ETS']
    },
];
//shows departments in table
function showDepartments (){
  db.query('SELECT * FROM department', function (err, results) {
      console.table(results);
    });
};

//shows roles in table
function showRoles (){
  db.query('SELECT * FROM job_title', function (err, results) {
      console.table(results);
    });
};

//shows all employees in table
function showEmployees (){
  db.query('SELECT * FROM employee;', function (err, results) {
      console.table(results);
    });
};

//main manu handler
var mainMenu = function () {
  inquirer.prompt(menuQuestion)
      .then(menuResponce => {
        console.log(menuResponce)
          if (menuResponce.responce === 'View all departments') {
            showDepartments();
          }
          if (menuResponce.responce === 'View all roles') {
            showRoles();
          }
          if (menuResponce.responce === 'View all employees') {
            showEmployees();
          }
          if (menuResponce.responce === 'Add a department') {
            showDepartments();
          }
          if (menuResponce.responce === 'Add a role') {
            showDepartments();
          }
          if (menuResponce.responce === 'add an employee') {
            showDepartments();
          }
          if (menuResponce.responce === 'Update Employee role') {
            showDepartments();
          }
          if (menuResponce.responce === 'Close ETS') {
            process.exit(1)
          }
          // else{confirm.log('responces WIP')};
      })
};

function addDepartment(params) {
  
}


  //starts application
var initializeETS = function(){
  //start up
  console.log('==EMPLOYEE TRACKING SYSTEM==');
  mainMenu();
  };




initializeETS();