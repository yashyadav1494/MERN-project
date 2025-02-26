import React, { useState } from 'react';
import axios from 'axios';
import './Donate.css';

const Donate = () => {
  const [donationData, setDonationData] = useState({
    donorName: '',
    donorEmail: '',
    donationAmount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonationData({ ...donationData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2002/api/donations/donate', donationData);
      alert(response.data.message);
      setDonationData({
        donorName: '',
        donorEmail: '',
        donationAmount: '',
      });
    } catch (error) {
      console.error('Error processing donation', error);
      alert('Error processing donation');
    }
  };

  return (
    <div className="donate-container">
      <h2 className="donate-title">Make a Difference: Donate to Organic Food Initiatives</h2>
      <p className="donate-description">
        Your generous donations help us provide organic food to those in need, support sustainable farming practices, and empower local farmers. Every contribution, big or small, makes a real impact.
      </p>
      <p className="donate-info">
        Here’s how we use your donation:
        <ul>
          <li>Supporting local farmers in growing organic produce.</li>
          <li>Providing food to communities in need.</li>
          <li>Promoting sustainable and eco-friendly farming practices.</li>
          <li>Educate consumers on the importance of choosing certified organic.</li>
          <li>Expand our reach to millions of consumers across the India.</li>
          <li>Secure an organic food future for us all!</li>
          <li>Continue our Skip The Chemicals campaign.</li>
        </ul>
      </p>

      <form onSubmit={handleSubmit} className="donate-form">
        <div className="form-group">
          <input
            type="text"
            name="donorName"
            placeholder="Your Name"
            value={donationData.donorName}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="donorEmail"
            placeholder="Your Email"
            value={donationData.donorEmail}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="donationAmount"
            placeholder="Donation Amount"
            value={donationData.donationAmount}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </div>

        <button type="submit" className="submit-button">Donate Now</button>
      </form>
    </div>
  );
};

export default Donate;
