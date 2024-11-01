const Team = require('../models/Teams'); 

// Create a new team
exports.createTeam = async (req, res) => {
    try {
        const { name, members } = req.body;

        const newTeam = new Team({
            name,
            members,
            // projects,
            // tasks,
        });

        const savedTeam = await newTeam.save();
        res.status(201).json({ message: 'Team created successfully', team: savedTeam });
    } catch (error) {
        res.status(500).json({ message: 'Error creating team', error });
    }
};

// Get all teams
exports.getTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching teams', error });
    }
};

// Delete a team by ID
exports.deleteTeam = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTeam = await Team.findByIdAndDelete(id);
        if (!deletedTeam) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json({ message: 'Team deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting team', error });
    }
};
