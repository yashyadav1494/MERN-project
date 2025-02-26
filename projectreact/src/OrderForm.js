// OrderForm.js
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './OrderForm.css';

//import AddProduct from './AddProduct';

const OrderForm = () => {
  const [products, setProducts] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    userAddress: '',
    products: [],
  });

  useEffect(() => {
    // Fetch product list from backend
    axios.get('http://localhost:2002/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log('Error fetching products', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({
      ...orderDetails,
      [name]: value,
    });
  };

  const handleProductChange = (e, productId) => {
    const { value } = e.target;
    const updatedProducts = [...orderDetails.products];
    const productIndex = updatedProducts.findIndex(product => product.productId === productId);
    if (productIndex !== -1) {
      updatedProducts[productIndex].quantity = value;
    } else {
      updatedProducts.push({ productId, quantity: value });
    }
    setOrderDetails({ ...orderDetails, products: updatedProducts });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2002/api/orders/placeOrder', orderDetails);
      alert(response.data.message);
    } catch (error) {
      console.log('Error placing order', error);
    }
  };

  return (
    
    <div className="order-form-container">
      <h1 style={{color:'green'}}>PLACE YOUR ORDER</h1>

      <form onSubmit={handleSubmit} className="order-form">
        <div className="form-group">
          <input
            type="text"
            name="userName"
            placeholder="Full Name"
            value={orderDetails.userName}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="userEmail"
            placeholder="Email Address"
            value={orderDetails.userEmail}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="userPhone"
            placeholder="Phone Number"
            value={orderDetails.userPhone}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="userAddress"
            placeholder="Delivery Address"
            value={orderDetails.userAddress}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <h2>Select Products to Order</h2>
        {products.map(product => (
          <div key={product._id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <input
                type="number"
                min="1"
                placeholder="Quantity"
                onChange={(e) => handleProductChange(e, product._id)}
              />
            </div>
          </div>
        ))}

        <button type="submit">Place Order</button>
      </form><br></br><br></br>
      <hr></hr>


      {/* <div className="container text-center mb-5">
                <Link to="/newadd">
                    <button 
                        className="btn btn-success btn-lg px-4 py-2"
                        style={{ fontWeight: 'bold', borderRadius: '8px' }}
                    >
                        ADD NEW PRODUCT
                    </button>
                </Link>
            </div> */}
      </div>
  );
};

export default OrderForm;
