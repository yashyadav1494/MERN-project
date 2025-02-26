import React, { useState } from 'react';
import axios from 'axios';
import './OrganicLivestockRequirements.css'; 
import backgroundImage from './img/pexels-fuzzy-rescue-1957579-3669640.jpg'; 
import feedImage from './img/organic.jpg'; 
import healthImage from './img/anna.webp'; 
import certificationImage from './img/certificate.webp'; // Organic certification image

// Function to toggle sections for accordion effect
const OrganicLivestockRequirements = () => {
  const [expanded, setExpanded] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', inquiry: '' });
  const [submitMessage, setSubmitMessage] = useState('');
  
  const toggleSection = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle section open/close
  };

    // Handle form input change
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:2002/api/inquiries', formData);
        setSubmitMessage('Inquiry submitted successfully!');
        setFormData({ name: '', email: '', inquiry: '' }); // Reset form
      } catch (error) {
        setSubmitMessage('Error submitting inquiry. Please try again.');
        console.error(error);
      }
    };
  

  return (
    <div className="organic-livestock-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content-wrapper">
        <h1 className="header-title">Organic Livestock Requirements</h1>

        {/* Section 1: Organic Feed */}
        <div className={`section ${expanded === 0 ? 'expanded' : ''}`} onClick={() => toggleSection(0)}>
          <div className="section-header">
            <img src={feedImage} alt="Organic Feed" className="section-image" />
            <h2>Organic Feed for Livestock</h2>
          </div>
          {expanded === 0 && (
            <div className="section-content">
              <p>
                Organic livestock feed is free from synthetic pesticides, antibiotics, and GMOs. It ensures healthy growth and production for livestock.
              </p>
              <ul>
                <li>100% organic grains and forage</li>
                <li>No chemical additives or hormones</li>
                <li>Non-GMO ingredients</li>
              </ul>
            </div>
          )}
        </div>

        {/* Section 2: Livestock Health */}
        <div className={`section ${expanded === 1 ? 'expanded' : ''}`} onClick={() => toggleSection(1)}>
          <div className="section-header">
            <img src={healthImage} alt="Livestock Health" className="section-image" />
            <h2>Livestock Health and Welfare</h2>
          </div>
          {expanded === 1 && (
            <div className="section-content">
              <p>
                Maintaining good health is essential for organic livestock, with focus on natural living conditions and preventive care.
              </p>
              <ul>
                <li>Access to clean water and pasture</li>
                <li>Natural shelter and exercise</li>
                <li>Organic-approved treatments only</li>
              </ul>
            </div>
          )}
        </div>

        {/* Section 3: Organic Certification */}
        <div className={`section ${expanded === 2 ? 'expanded' : ''}`} onClick={() => toggleSection(2)}>
          <div className="section-header">
            <img src={certificationImage} alt="Certification" className="section-image" />
            <h2>Organic Certification for Livestock</h2>
          </div>
          {expanded === 2 && (
            <div className="section-content">
              <p>
                Certification ensures the livestock meet organic standards, and they are raised in compliance with strict organic regulations.
              </p>
              <ul>
                <li>Must be certified by an accredited body</li>
                <li>Documented organic feed and living conditions</li>
                <li>No synthetic chemicals or GMOs</li>
              </ul>
            </div>
          )}
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Inquire About Organic Livestock</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={handleChange}
              required
            />
            <textarea
              name="inquiry"
              value={formData.inquiry}
              placeholder="Your Inquiry"
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          {submitMessage && <p>{submitMessage}</p>}
        </div>

      </div>
    </div>
  );
};

export default OrganicLivestockRequirements;
