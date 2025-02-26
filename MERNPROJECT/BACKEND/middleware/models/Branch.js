const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true },
  website: { type: String, required: true },
  image: { type: String, required: true }, // Image URL for the branch
});

const Branch = mongoose.model('Branch', branchSchema);

module.exports = Branch;
