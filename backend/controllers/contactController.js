const Contact = require('../models/contactModel');

// Submit form data
exports.submitForm = async (req, res) => {
  try {
    const { name, email, mobileNumber, businessType, businessLocation, message } = req.body;

    // Validate the required fields
    if (!name || !email || !mobileNumber || !businessType || !businessLocation) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new contact entry
    const newContact = new Contact({
      name,
      email,
      mobileNumber,
      businessType,
      businessLocation,
      message
    });

    // Save to the database
    const savedContact = await newContact.save();

    return res.status(201).json({ message: 'Form submitted successfully', data: savedContact });
  } catch (error) {
    console.error('Error submitting form:', error.message);
    return res.status(500).json({ error: 'Server error, please try again later' });
  }
};
