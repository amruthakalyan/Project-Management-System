const express = require('express');
const { createReport, getReports } = require('../controllers/reportController'); // Ensure this path is correct
const router = express.Router();

// Route to create a new report
router.post('/', createReport);

// Route to get all reports
router.get('/show', getReports);

module.exports = router;
