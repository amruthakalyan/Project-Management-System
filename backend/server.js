const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Routes
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
const teamRoutes = require('./routes/teamRoutes');
const taskRoutes = require('./routes/taskRoutes');
const reportRoutes = require('./routes/reportRoutes');

dotenv.config();
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/admin/projects', projectRoutes);
app.use('/api/admin/teams', teamRoutes);
app.use('/api/admin/users', userRoutes);
app.use('/api/admin/tasks', taskRoutes);
app.use('/api/admin/reports', reportRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
