// backend/models/Inquiry.js

const mongoose = require('mongoose');

// Define the Inquiry schema
const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
  },
  inquiry: {
    type: String,
    required: true
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create and export the Inquiry model
const Inquiry = mongoose.model('Inquiry', inquirySchema);
module.exports = Inquiry;
