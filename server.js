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
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'add an employee', 'Update Employee role']
    },
];
//shows departments in table
function showDepartments (){
  db.query('SELECT * FROM department', function (err, results) {
      console.table(results);
    });
    return
};
//main manu handler
var mainMenu = function () {
  inquirer.prompt(menuQuestion)
      .then(menuResponce => {
          if (menuResponce === 'view all departments') {
            showDepartments();
            return
          }
          else{confirm.log('responces WIP')};
      })
};


  //starts application
var initializeETS = function(){
  //start up
  console.log('==EMPLOYEE TRACKING SYSTEM==');
  mainMenu();
  };




initializeETS();