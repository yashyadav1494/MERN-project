// server/routes/searchRoute.js
const express = require('express');
const router = express.Router();
const Organic = require('../organicfood');  // Import the Organic model

// Search Route
router.get('/search', async (req, res) => {
  const { query } = req.query;  // Capture the query parameter from the URL

  try {
    // Search for organic products that match the query in both the main 'name' and 'products.name'
    const results = await Organic.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },  // Match main product name (case-insensitive)
        { 'products.name': { $regex: query, $options: 'i' } },  // Match individual product names
      ]
    });

    res.status(200).json(results);  // Send back the search results as a JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

module.exports = router;
