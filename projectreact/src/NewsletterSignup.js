import React, { useState } from "react";
import axios from "axios";
import "./NewsletterSignup.css";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }
  
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:2002/api/subscribe", { email });
      if (response.data.success) {
        setMessage({ type: "success", text: "Thank you for subscribing!" });
        setEmail(""); // Clear email input field
      } else {
        setMessage({ type: "error", text: response.data.message });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Server error, please try again later." });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="newsletter-signup" style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/young-plant-growing-field-agricultural-land-organic-farming-environment-care-earth-day-concept-beautiful-environmental-blurred-337317147.jpg')" }}>
      <div className="newsletter-content">
        <h1>Get the Latest News, Tips & Updates in Your Inbox</h1>
        <p>Subscribe to our newsletter to receive the best organic food updates, tips, and offers.</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="email-input"
            required
          />
          <button type="submit" disabled={loading} className="subscribe-button">
            {loading ? "Subscribing..." : "Subscribe Now"}
          </button>
        </form>

        {message && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
