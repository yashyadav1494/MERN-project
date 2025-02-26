const express = require('express');
const router = express.Router();
const Order = require('../middleware/models/orderModel');
const Product = require('../middleware/models/productModel');

// Route to place an order
router.post('/placeOrder', async (req, res) => {
  const { userName, userEmail, userPhone, userAddress, products } = req.body;
  try {
    // Calculate total price and create order
    let totalAmount = 0;
    const orderProducts = [];

    for (let product of products) {
      const foundProduct = await Product.findById(product.productId);
      if (foundProduct) {
        const totalProductPrice = foundProduct.price * product.quantity;
        totalAmount += totalProductPrice;
        orderProducts.push({
          productId: foundProduct._id,
          quantity: product.quantity,
          totalPrice: totalProductPrice,
        });
      }
    }

    const newOrder = new Order({
      userName,
      userEmail,
      userPhone,
      userAddress,
      products: orderProducts,
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully!', totalAmount });
  } catch (error) {
    res.status(500).json({ message: 'Error placing order', error });
  }
});

module.exports = router;
