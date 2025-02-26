import React, { useState } from "react";
import "./OrganicSealComponent.css";

const OrganicSealComponent = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

//   useEffect(() => {
//     fetch("/api/products")
//       .then((response) => response.json())
//       .then((data) => setProducts(data));
//   }, []);

  return (
    <div className="organic-seal-container">
      <div className="header-section">
        <h1>The Organic Seal of Approval</h1>
        <p className="subheading">
          This seal represents the highest standards in organic food production.
        </p>
      </div>

      <div className="seal-description">
        <p>
          The Organic Seal of Approval signifies that our products meet the
          strict requirements of organic certification. It guarantees that the
          food you eat has been grown without synthetic fertilizers, pesticides,
          or GMOs, and follows ethical farming practices that protect the
          environment and biodiversity.
        </p>
        <img
          src="https://silvaintl.imgix.net/blog/Organic-Certified.jpg?auto=compress%2Cformat&ch=dpr&cs=srgb&dpr=1&fit=crop&fp-x=0.5&fp-y=0.5&h=460&ixlib=php-3.1.0&q=75&sharp=10&step=100&w=816"  // Replace with the actual seal image
          alt="Organic Seal"
          className="organic-seal-image"
        />
      </div>

      {showMoreInfo && (
        <div className="more-info-section">
          <h2>Why Choose Organic?</h2>
          <ul>
            <li>Healthier for you and your family</li>
            <li>Supports sustainable farming practices</li>
            <li>Better for the environment</li>
            <li>Higher nutritional value</li>
          </ul>
        </div>
      )}

      <button onClick={toggleInfo} className="more-info-button">
        {showMoreInfo ? "Show Less" : "Learn More"}
      </button>

      <div className="organic-product-section">
        <h2>Products with Organic Seal</h2>
        <div className="product-grid">
          {/* Replace with dynamic product data from backend */}
          <div className="product-card">
            <img src="https://images.yourstory.com/cs/wordpress/2015/05/yourstory_kashmir_apple.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75" alt="Product 1" />
            <p>Organic Apple</p>
          </div>
          <div className="product-card">
            <img src="https://operafoods.com/wp-content/uploads/2023/04/My-project-1.jpg" alt="Product 2" />
            <p>Organic Banana</p>
          </div>
          {/* -------------you can add more from backend also */}
        </div>
      </div>
    </div>
  );
};

export default OrganicSealComponent;
