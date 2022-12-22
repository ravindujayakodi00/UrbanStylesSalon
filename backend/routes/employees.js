const express = require('express');
const { createEmployee, getAllEmployees, getEmployee, updateEmployee, deleteEmployee, loginEmployee } = require('../controllers/employeeController');

const router = express.Router();

// Get all employees
router.get('/', getAllEmployees);

// Get single employee
router.get('/:id', getEmployee);

// Create employee
router.post('/', createEmployee);

// Update employee
router.patch('/:id', updateEmployee);

// Delete employee
router.delete('/:id', deleteEmployee);

//login route
router.post('/login', loginEmployee)

module.exports = router;