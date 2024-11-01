// const mongoose = require('mongoose');

// const projectSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     assignedTo: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',  // Assuming you have a User model
//     }],
//     deadline: {
//         type: Date,
//         required: true,
//     },
//     status: {
//         type: String,
//         enum: ['Not Started', 'In Progress', 'Completed'],
//         default: 'Not Started',
//     },
// }, { timestamps: true });

// module.exports = mongoose.model('Project', projectSchema);
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    assignedTo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Assuming you have a User model
    }],
    deadline: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
        default: 'Not Started',
    },
    tasks: [{  // Relationship with Task model
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    }],
    reports: [{  // Relationship with Report model
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Report',
    }],
}, { timestamps: true });



// Pre-remove middleware for cascading deletion
projectSchema.pre('remove', async function (next) {
    try {
        // Cascade delete teams, tasks, and reports associated with the project
        await Team.deleteMany({ projectId: this._id });  // Delete teams
        await Task.deleteMany({ projectId: this._id });  // Delete tasks
        await Report.deleteMany({ projectId: this._id });  // Delete reports
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('Project', projectSchema);
