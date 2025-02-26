const mongoose = require('mongoose');

// Define the subscription schema
const SubscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensures that each email is unique in the database
  },
  date: {
    type: Date,
    default: Date.now, // Automatically sets the date to the current time
  },
});

// Create a model based on the schema
const Subscription = mongoose.model('Subscription', SubscriptionSchema);

module.exports = Subscription;
