// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../middleware/models/productModel');

// Route to get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

// Route to add a new product
router.post('/add', async (req, res) => {
  const { name, price, description, image, stockQuantity } = req.body;
  try {
    const newProduct = new Product({
      name,
      price,
      description,
      image,
      stockQuantity,
    });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully!', newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error });
  }
});

module.exports = router;
