const express = require('express');
const Branch = require('../middleware/models/Branch');
const router = express.Router();

// Get all branches (limit to 50 branches)
router.get('/', async (req, res) => {
  try {
    const branches = await Branch.find().limit(50);
    res.json(branches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
