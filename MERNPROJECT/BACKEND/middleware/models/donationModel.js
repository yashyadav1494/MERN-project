const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: { type: String, required: true },
  donorEmail: { type: String, required: true },
  donationAmount: { type: Number, required: true },
  donationDate: { type: Date, default: Date.now },
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
