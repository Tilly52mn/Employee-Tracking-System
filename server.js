const express = require('express');
const db = require('./db/connection');
const app = express();

const inquirer = require("inquirer");
const cTable = require('console.table');

// main menu question
  var menuQuestion = [
    {
        type: 'list',
        name: 'responce',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'add an employee', 'Update Employee role','Close ETS']
    },
];

// add dept questions
var deptAddQuestion = [
  {
    type: 'input',
    name: 'deptName',
    message: 'What is the new department?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('You need to enter a department name!');
            return false;
        }
    }
},
];

//add employee questions
var employeeAddQuestion = [
  {
    type: 'input',
    name: 'first_name',
    message: 'What is the first name?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('You need to enter a first name!');
            return false;
        }
    }
},  
{
  type: 'input',
  name: 'last_name',
  message: 'What is the last name?',
  validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          console.log('You need to enter a last name!');
          return false;
      }
  }
},
{
  type: 'list',
  name: 'manager',
  message: 'Who is the new employees manager?',
  choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'add an employee', 'Update Employee role','Close ETS']
},
{
  type: 'list',
  name: 'role',
  message: 'Who is the new employees role?',
  choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'add an employee', 'Update Employee role','Close ETS']
},
];

//add a role questions
var roleAddQuestion = [
  {
    type: 'input',
    name: 'roleName',
    message: 'What is the new role?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('You need to enter a role name!');
            return false;
        }
    }
},
{
  type: 'number',
  name: 'salary',
  message: 'What is the roles salary?',
  validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          console.log('You need to enter a role salary!');
          return false;
      }
  }
},
{
  type: 'list',
  name: 'deptName',
  message: 'What department is this role in?',
  choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'add an employee', 'Update Employee role','Close ETS']
},
];
//update Employee role questions
var updateEmployeeRoleQuestion = [
  {
    type: 'list',
    name: 'employeeName',
    message: 'Who is the employee to update?',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'add an employee', 'Update Employee role','Close ETS']
},
{
  type: 'list',
  name: 'employeeNewRole',
  message: 'Who is the employees new role?',
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
  const sql = `SELECT employee.id,employee.first_name,employee.last_name,job_title.title, job_title.salary ,department.dept_name AS department,
  CONCAT(manager.first_name," ",manager.last_name)
   AS manager
  FROM employee 
  LEFT JOIN employee manager ON employee.manager_id=manager.id
  JOIN job_title ON employee.title_id =job_title.id
  JOIN department ON job_title.department_id=department.id`;
  db.query(sql, function (err, results) {
      console.table(results);
    });
};

//add a department
function addDepartment() {
  inquirer.prompt(deptAddQuestion)
  .then((data) => {
const sql =`INSERT INTO department  (dept_name)
VALUES
    (?);`
    const params = [data.deptName];
    db.query(sql, params, (err, result) => {

      if (err) {
        console.log(err);
      }
      console.log(result);
  });
showDepartments();
  });
};

//add a role
function addRole() {
  inquirer.prompt(roleAddQuestion)
  .then((data) => {
const sql =`INSERT INTO job_title  (title,salary)
VALUES
    (?,?);`
    const params = [data.roleName,data.salary];
    db.query(sql, params, (err, result) => {

      if (err) {
        console.log(err);
      }
      console.log(result);
  });
showRoles();
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
            addDepartment();
          }
          if (menuResponce.responce === 'Add a role') {
            addRole();
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
      mainMenu();
};




  //starts application
var initializeETS = function(){
  //start up
  console.log('==EMPLOYEE TRACKING SYSTEM==');
  mainMenu();
  };




initializeETS();