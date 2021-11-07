const express = require('express');
const db = require('../db/connection');
const cTable = require('console.table');
//Get all Departments
function showDepartments (){
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
      });
      return
}
showDepartments();
module.exports = showDepartments;