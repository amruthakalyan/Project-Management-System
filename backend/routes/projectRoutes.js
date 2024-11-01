const express = require('express');
const { createProject, getAllProjects, getProjectById, updateProject, deleteProject } = require('../controllers/projectController');

const router = express.Router();

// Project routes
router.post('/', createProject);
router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.put('/:id', updateProject);
// router.delete('/:id', deleteProject);
router.delete('/:id', deleteProject);  // Route to delete project

module.exports = router;
