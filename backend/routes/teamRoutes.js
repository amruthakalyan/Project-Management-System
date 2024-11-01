const express = require('express');
const router = express.Router();
const {
    createTeam,
    getTeams,
    deleteTeam
} = require('../controllers/teamController'); 

// Create a new team
router.post('/', createTeam);

// Get all teams
router.get('/', getTeams);

// Delete a team by ID
router.delete('/:id', deleteTeam);

module.exports = router;