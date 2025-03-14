// routes/contact.js
const express = require('express');
const router = express.Router();
const { validateContactForm } = require('../middleware/validator');
const Contact = require('../models/Contact');


// POST route to handle form data
router.post('/', validateContactForm, async (req, res) => {
    try {
      const contact = new Contact(req.body);
      await contact.save();
      res.status(201).json({ message: 'Contact saved successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save contact' });
    }
  });
  
  module.exports = router;


// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email:    { type: String, required: true },
  phone:    { type: String, required: true },
  company:  { type: String },
  message:  { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);