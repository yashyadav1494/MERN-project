const express = require('express');
const CompanyInfo = require('../middleware/models/CompanyInfo');
const router = express.Router();

// Get company information
router.get('/', async (req, res) => {
  try {
    const companyInfo = await CompanyInfo.findOne();
    res.json(companyInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
