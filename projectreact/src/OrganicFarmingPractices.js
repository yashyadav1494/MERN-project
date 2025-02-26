
import React, { useState } from 'react';
import './OrganicFarmingPractices.css'; 
import backgroundImage from './img/gobi.avif'; 
import cropRotationImage from './img/benefits.jpg'; 
import compostingImage from './img/com.avif'; 
import greenManureImage from './img/100-organic.jpg';
const OrganicFarmingPractices = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleSection = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle the section open/close
  };

  return (
    <div className="organic-farming-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content-wrapper">
        <h1 className="header-title">Organic Farming Practices</h1>

        {/* Crop Rotation Section */}
        <div className={`section ${expanded === 0 ? 'expanded' : ''}`} onClick={() => toggleSection(0)}>
          <div className="section-header">
            <img src={cropRotationImage} alt="Crop Rotation" className="section-image" />
            <h2>Crop Rotation</h2>
          </div>
          {expanded === 0 && (
            <div className="section-content">
              <p>
                Crop rotation helps maintain soil health by alternating the types of crops grown in a specific area each season. 
                This reduces pest build-up and ensures a balanced nutrient profile in the soil.
              </p>
              <ul>
                <li>Prevents soil depletion</li>
                <li>Controls pests and diseases naturally</li>
                <li>Improves soil structure</li>
              </ul>
            </div>
          )}
        </div>

        {/* Composting Section */}
        <div className={`section ${expanded === 1 ? 'expanded' : ''}`} onClick={() => toggleSection(1)}>
          <div className="section-header">
            <img src={compostingImage} alt="Composting" className="section-image" />
            <h2>Composting</h2>
          </div>
          {expanded === 1 && (
            <div className="section-content">
              <p>
                Composting is the natural process of recycling organic matter into nutrient-rich compost. It enhances soil fertility and supports plant health.
              </p>
              <ul>
                <li>Reduces waste</li>
                <li>Improves soil aeration and water retention</li>
                <li>Enhances soil fertility</li>
              </ul>
            </div>
          )}
        </div>

        {/* Green Manure Section */}
        <div className={`section ${expanded === 2 ? 'expanded' : ''}`} onClick={() => toggleSection(2)}>
          <div className="section-header">
            <img src={greenManureImage} alt="Green Manure" className="section-image" />
            <h2>Green Manure</h2>
          </div>
          {expanded === 2 && (
            <div className="section-content">
              <p>
                Green manure involves growing specific plants that are then tilled back into the soil to improve its organic matter and nutrient content.
              </p>
              <ul>
                <li>Improves soil structure and fertility</li>
                <li>Reduces erosion</li>
                <li>Suppresses weeds</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrganicFarmingPractices;
