// const mongoose = require('mongoose');

// const taskSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   assignedTo: {
//     type: String,
//     required: true,
//   },
//   dueDate: {
//     type: Date,
//     required: true,
//   },
// });

// module.exports = mongoose.model('Task', taskSchema);


const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    assignedTo: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    project: {  // Relationship with Project model
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
});

module.exports = mongoose.model('Task', taskSchema);
