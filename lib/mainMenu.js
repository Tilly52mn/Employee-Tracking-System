const Department = require('./department');
const inquirer = require("inquirer");

var mainMenu = function () {
    inquirer.prompt(menuQuestion)
        .then((menuResponce) => {
            if (menuResponce === 'view all departments') {

            }
        })
}

const menuQuestion = [
    {
        type: 'list',
        name: 'responce',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'add an employee', 'Update Employee role']
    },
]
module.exports = mainMenu