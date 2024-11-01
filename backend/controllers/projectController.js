const Project = require('../models/Project');

// Create a new project
exports.createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json({ success: true, data: project });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json({ success: true, data: projects });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a project by ID
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ success: false, error: 'Project not found' });
        }
        res.status(200).json({ success: true, data: project });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a project
exports.updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!project) {
            return res.status(404).json({ success: false, error: 'Project not found' });
        }
        res.status(200).json({ success: true, data: project });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// // Delete a project
// exports.deleteProject = async (req, res) => {
//     try {
//         const project = await Project.findByIdAndDelete(req.params.id);
//         if (!project) {
//             return res.status(404).json({ success: false, error: 'Project not found' });
//         }
//         res.status(200).json({ success: true, message: 'Project deleted successfully' });
//     } catch (error) {
//         res.status(400).json({ success: false, error: error.message });
//     }
// };
// Delete project and cascade delete associated teams, tasks, and reports
exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        // Trigger the 'pre' middleware for cascading delete
        await project.remove();

        res.status(200).json({ message: 'Project and associated data deleted successfully' });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

