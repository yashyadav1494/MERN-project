import React from 'react';
import './Footer.css';
import { Link} from "react-router-dom";

// Branch data
const branches = [
  {
    name: 'Suminter India Organics Private Limited-Mumbai',
    location: 'Mumbai, India',
    contact: '123-456-7890',
    website: 'https://naturebiofoods.organic/',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13PnUlN2gP9AurLvOqlH3nkpjPhTLyDH_pA&s'
  },
  {
    name: 'Organic India Private Limited',
    location: 'Lucknow,India',
    contact: '987-654-3210',
    website: 'https://organicindia.com/',
    image: 'https://organicindiausa.com/wp-content/uploads/OI-logo-full-color.png'
  },
  {
    name: 'Sresta Natural Bioproducts Pvt.Ltd',
    location: 'Hyderabad,India',
    contact: '555-123-4567',
    website: 'https://sresta.com/',
    image: 'https://traceagtech.com/wp-content/uploads/2022/07/Sresta-Logo-without-PVT-01-1.png'
  },
  // Add up to 50 branches
];

// Company info
const companyInfo = {
  about:
    "We are a company committed to providing 100% organic food, free from pesticides, chemicals, and artificial additives.",
  mission:
    "Our mission is to make the world healthier by providing organic and sustainable food choices.",
  contact: "GoFood@organicfood.com",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpSH0Y1PhNWARl_fER4JbNcwvKnSwyWmHqw&s",
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Information Section */}
        <div className="company-info">
          <img
            src={companyInfo.logo}
            alt="Organic Food Company Logo"
            className="footer-logo"
          />
          <p className="about-text"><strong>About Us:</strong> {companyInfo.about}</p>
          <p className="mission-text"><strong>Mission:</strong> {companyInfo.mission}</p>
          <Link className="contact-text" to='/contact'><strong>Contact:</strong> {companyInfo.contact}</Link>
        </div>

        {/* Branches Section */}
        <div className="branches">
          <h3>Top Branches</h3>
          <ul>
            {branches.map((branch, index) => (
              <li key={index} className="branch-item">
                <img src={branch.image} alt={branch.name} className="branch-image" />
                <div className="branch-info">
                  <h4>{branch.name}</h4>
                  <p>{branch.location}</p>
                  <p>{branch.contact}</p>
                  <a href={branch.website} target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Organic Food Company | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
