// FarmerCard.js
import React, { useState } from 'react';
import './FarmerCard.css';

const FarmerCard = ({ farmer }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleDetails = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="farmer-card">
      <div className="farmer-card-header">
        <img src={farmer.image} alt={farmer.name} className="farmer-image" />
        <h2>{farmer.name}</h2>
        <p>{farmer.farmName}</p>
      </div>
      
      {showMore && (
        <div className="farmer-card-details">
          <p><strong>Farm Location:</strong> {farmer.location}</p>
          <p><strong>Products:</strong> {farmer.products}</p>
          <p><strong>Story:</strong> {farmer.story}</p>
        </div>
      )}

      <button onClick={toggleDetails} className="see-more-btn">
        {showMore ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default FarmerCard;
