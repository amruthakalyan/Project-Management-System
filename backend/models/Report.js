// const mongoose = require('mongoose');

// const reportSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'in progress', 'completed'],
//     default: 'pending',
//   },
// });

// module.exports = mongoose.model('Report', reportSchema);



const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed'],
        default: 'pending',
    },
    project: {  // Relationship with Project model
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
});

module.exports = mongoose.model('Report', reportSchema);
