const express = require('express');
const router = express.Router();
const Donation = require('../middleware/models/donationModel');

// Route to handle donation submission
router.post('/donate', async (req, res) => {
  const { donorName, donorEmail, donationAmount } = req.body;

  try {
    const newDonation = new Donation({
      donorName,
      donorEmail,
      donationAmount,
    });

    await newDonation.save();
    res.status(201).json({ message: 'Donation successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Error processing donation', error });
  }
});

module.exports = router;
