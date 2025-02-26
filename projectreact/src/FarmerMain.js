// App.js
import React, { useState } from 'react';
import FarmerCard from './FarmerCard';
import './FarmerCard.css';

const farmersData = [
  {
    name: "Rekha Mane",
    farmName: "Green Meadows",
    location: "Bhandadara, India",
    products: "Organic Lettuce, Tomatoes, Carrots",
    story: "Rekha has been farming for over 20 years, focusing on sustainable agriculture.",
    image: "https://assets.entrepreneur.com/images/misc/1505915698_DSC03159.jpg"
  },
  {
    name: "Smidha Lahor",
    farmName: "Fresh Farms",
    location: "Vint Garden, Banglore",
    products: "Organic Apples, Grapes",
    story: "Smidha started her farm with a mission to provide pesticide-free fruits.",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201609/sp-people-october-1_647_101016052929.jpg?VersionId=Iv594aTq.._fykf.qa4prkPasgmnJ67C&size=690:388"
  },
  // More farmers can be added here...
];

const FarmerMain= () => {
  const [farmers, setFarmers] = useState(farmersData);

  return (
    <div className="app-container">
      <h1>Our Organic Farmers</h1>
      <div className="farmers-list">
        {farmers.map((farmer, index) => (
          <FarmerCard key={index} farmer={farmer} />
        ))}
      </div>
    </div>
  );
};

export default FarmerMain;
