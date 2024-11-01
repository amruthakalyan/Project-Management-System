const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUsers } = require('../controllers/userController'); // Ensure this path is correct

// User registration route
router.post('/', registerUser);

// User login route
router.post('/login', loginUser); // Changed to a different endpoint to avoid conflict

// Route to get users
router.get('/', getUsers); // Ensure you have a GET endpoint for fetching users

module.exports = router;
