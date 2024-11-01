const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Ensure team names are unique
    },
    members: [{
        type: String,
        required: true,
    }],
    // projectId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Project', // Reference the Project model
    //     required: true,
    // },
    // projects: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Project', // Reference to the Project model
    // }],
    // tasks: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Task', // Reference to the Task model
    // }],
}, { timestamps: true });

module.exports = mongoose.model('Team', teamSchema);
