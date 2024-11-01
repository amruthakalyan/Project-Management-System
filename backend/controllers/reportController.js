const Report = require('../models/Report'); // Ensure this path is correct

// Create a new report
exports.createReport = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    // Validate status
    if (!['pending', 'in progress', 'completed'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const newReport = new Report({ title, description, status });
    await newReport.save();

    res.status(201).json({ message: 'Report created successfully', report: newReport });
  } catch (error) {
    console.error('Error creating report:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error creating report', error });
  }
};


// Get all reports
exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find(); // Fetch all reports
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reports', error });
  }
};
