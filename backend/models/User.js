const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true, // Password is required for authentication
  },
  role: {
    type: String,
    enum: ['Student', 'Admin'],
    default: 'Student',
  },
});

// Create an index on email for quick lookup
userSchema.index({ email: 1 });

module.exports = mongoose.model('User', userSchema);
