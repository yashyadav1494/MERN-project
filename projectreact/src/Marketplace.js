// Marketplace.js
import React, { useState } from 'react';
import './Marketplace.css';

const products = [
  {
    id: 1,
    name: "Organic Apples",
    description: "Fresh and juicy organic apples, grown without pesticides.",
    image: "https://images.yourstory.com/cs/wordpress/2015/05/yourstory_kashmir_apple.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75",
    details: "These apples are grown using sustainable farming methods and are harvested at the peak of their freshness.",
  },
  {
    id: 2,
    name: "Organic Carrots",
    description: "Crunchy, sweet organic carrots, perfect for snacking.",
    image: "https://www.nutriharvest.com/cdn/shop/articles/carrots2_94041803-d158-41d7-8db2-57e6f2a1bb88.png?v=1712253710&width=1100",
    details: "Our organic carrots are grown without synthetic fertilizers and are rich in essential nutrients.",
  },
  {
    id: 3,
    name: "Organic Tomatoes",
    description: "Ripe and flavorful organic tomatoes, perfect for any meal.",
    image: "https://drearth.com/wp-content/uploads/tomato-iStock-174932787.jpg",
    details: "Grown without harmful chemicals, these tomatoes are full of natural flavors and antioxidants.",
  },
  {
    id: 4,
    name: "Organic Lettuce",
    description: "Crisp and fresh organic lettuce, ideal for salads.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzyWRJuA6sJn2I41MhL56wWOuWDbFZ3m2Ow&s",
    details: "Our lettuce is free from chemical pesticides and packed with vitamins and minerals.",
  },
  {
    id: 5,
    name: "Organic Bananas",
    description: "Sweet and healthy organic bananas, perfect for a quick snack.",
    image: "https://operafoods.com/wp-content/uploads/2023/04/My-project-1.jpg",
    details: "These organic bananas are grown in sustainable conditions and have a naturally sweet taste.",
  }
];

const Marketplace = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewMore = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="marketplace-container">
      {/* Background Video */}
      <div className="background-video">
        <video autoPlay muted loop>
          <source src="./Yash.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="content-container">
        <h1>Organic Food Marketplace</h1>
        
        <div className="product-list">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button className="view-more-btn" onClick={() => handleViewMore(product)}>
                View More
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="product-details">
          <div className="overlay" onClick={handleCloseDetails}></div>
          <div className="details-card">
            <h3>{selectedProduct.name}</h3>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
            <p><strong>Description:</strong> {selectedProduct.details}</p>
            <button className="close-btn" onClick={handleCloseDetails}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
