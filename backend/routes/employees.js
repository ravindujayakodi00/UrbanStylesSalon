const express = require('express');

const router = express.Router();

// Get all employees
router.get('/', (req, res) => {
    res.json({mssg: 'Get all employees'});
});

// Get single employee
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get single employee'});
});

// Create employee
router.post('/', (req, res) => {
    res.json({mssg: 'Create employee'});
});

// Update employee
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update employee'});
});

// Delete employee
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete employee'});
});

module.exports = router;