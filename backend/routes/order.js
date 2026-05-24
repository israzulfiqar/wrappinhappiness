
const express = require('express');
const router = express.Router();

const { registerUser, loginUser } = require('../controllers/userController');
// protect is NOT needed here

router.post('/register', registerUser); // ✅ no middleware
router.post('/login', loginUser);       // ✅ no middleware

module.exports = router;












