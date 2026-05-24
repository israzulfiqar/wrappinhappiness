
const express = require('express');
const router = express.Router();

// Import the user controller functions
const { registerUser, loginUser } = require('../controllers/userController');

// Point the web routes directly to the controller functions
router.post('/register', registerUser); // POST /api/users/register
router.post('/login', loginUser);       // POST /api/users/login

module.exports = router;