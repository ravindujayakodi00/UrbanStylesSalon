const express = require('express');

const router = express.Router();

const { loginClient, registerClient } = require('../controllers/clientController');

//login route
router.post('/login', loginClient)

//register route
router.post('/register', registerClient)

// router.get('/', getAllUsers);
// router.get('/:id', getUser);
// router.post('/', createUser);
// router.delete('/:id', deleteUser);
// router.patch('/:id', updateUser);

module.exports = router