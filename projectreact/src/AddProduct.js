import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css';  // Add your styles in this CSS file
import Swal from "sweetalert2";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    stockQuantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2002/api/products/add', productData);
      //alert('Product added successfully!');
      //------------------------------------------------------------------------------------
      Swal.fire({
        title: "Success!",
        text: "Product added successfully!",
        icon: "success",
        timer: 2500, // Auto-close after 2.5 seconds
        showConfirmButton: false, // Hides the default button
        toast: true, // Makes it a toast notification
        position: "top-center", // Displays at the top-right corner
        background: "#f0f9eb", // Light green background
        color: "#2e7d32", // Dark green text
        iconColor: "#2e7d32", // Green icon color
        showClass: {
          popup: "animate__animated animate__fadeInDown", // Smooth fade-in animation
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp", // Smooth fade-out animation
        }
      });
      
      //-------------------------------------------------------------------------------------
      setProductData({
        name: '',
        price: '',
        description: '',
        image: '',
        stockQuantity: '',
      });
    } catch (error) {
      console.error('Error adding product', error);
      alert('Error adding product');
    }
  };

  return (
    <div className="add-product-container">
      <h2 className="form-title">Add New Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={productData.name}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="price"
            placeholder="Product Price"
            value={productData.price}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="description"
            placeholder="Product Description"
            value={productData.description}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="image"
            placeholder="Product Image URL"
            value={productData.image}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="stockQuantity"
            placeholder="Stock Quantity"
            value={productData.stockQuantity}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </div>

        <button type="submit" className="submit-button">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
