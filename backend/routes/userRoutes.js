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


// // In your backend routes (e.g., routes/userRoutes.js)
// const express = require('express');
// const router = express.Router();
// const User = require('../models/User'); // Adjust to your actual user model path

// router.post('/register', async (req, res) => {
//   const { email, password, name, role } = req.body;

//   try {
//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already registered. Please login directly.' });
//     }

//     // If the user doesn't exist, proceed with registration
//     const newUser = new User({ email, password, name, role });
//     await newUser.save();
//     res.status(201).json({ message: 'Registration successful. Please log in.' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error registering user', error });
//   }
// });

// module.exports = router;
