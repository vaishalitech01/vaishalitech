const express = require('express');
const { submitForm } = require('../controllers/contactController');
const router = express.Router();

// POST route to handle form submission
router.post('/contact', submitForm);

module.exports = router;
