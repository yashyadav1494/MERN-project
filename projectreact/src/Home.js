import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link,Outlet} from "react-router-dom";

import './ProductSection.css';
import './MenuCard.css';
import './App.css';
//import './Cart.css';
import './Sidebar.css';
import './Home.css';
import Slider from 'react-slick';
import './Toast.css';


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the default styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';



export default function Home()
{


  const [post,setPost]=useState([])
   
  const apiUrl="http://localhost:2002"


const fetchPosts=async()=>
{
const res= await  axios.get(`${apiUrl}/list`);
setPost(res.data)
}
useEffect(()=>
{
  fetchPosts();
},[]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: dots => (
        <div>
            <ul style={{
                margin: "0px", padding: "0px"
            }}> {dots} </ul>
        </div>
    ),

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }
    ]
};


const [cart, setCart] = useState([]);
const [orderConfirmed, setOrderConfirmed] = useState(false);

const addToCart = (product) => {
  setCart([...cart, product]);
};


// The removeFromCart function will now use the product object directly
// Ensure the removeFromCart function is defined like this
// The removeFromCart function will now use the product object directly
// Remove a product from the cart based on its entire object



const removeFromCart = (product) => {
  // Filter out the product by comparing the entire object///////////
  setCart(cart.filter((item) => JSON.stringify(item) !== JSON.stringify(product)));
};






const clearCart = () => {
  setCart([]);
};

const confirmOrder = () => {
  
  fetch("http://localhost:2002/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      products: cart,
      total: calculateTotal(),
      status: "Confirmed",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      setOrderConfirmed(true);
      clearCart();
      toast.success("Order Confirmed! Your order is on its way.");
    })
    .catch((error) => console.error("Error confirming order:", error));
};

const cancelOrder = () => {
  setOrderConfirmed(false);
  clearCart();
  //alert("Order Canceled!");////
  toast.info("Order Canceled! Feel free to add items to your cart.");
};

// const calculateTotal = () => {
//   return cart.reduce((total, product) => total + product.price*product.quantity, 0).toFixed(2);
// };


const calculateTotal = () => {
  return cart.reduce((total, product) => {
    return total + (product.price * product.quantity);  // Multiply price by quantity for each product
  }, 0);
};





  
  const [isOpen, setIsOpen] = useState(false);
    
    const toggleSidebar = () => setIsOpen(!isOpen);


 //------------------------------------------------------------------------------------------------------------
 

//  const handleProductChange = (event, product) => {
//   const newQuantity = parseInt(event.target.value, 10);
//   if (newQuantity >= 1) {
//     updateQuantity(product, newQuantity);
//   }
// };

// const updateQuantity = (product, quantity) => {
//   setCart((prevCart) =>
//     prevCart.filter((item) =>
//       item.id === product.id ? { ...item, quantity: quantity } : item
//     )
//   );
// };

const handleProductChange = (event, productName) => {
  const newQuantity = parseInt(event.target.value, 10);
  if (newQuantity >= 1) { // Prevent invalid quantities (less than 1)
    updateQuantity(productName, newQuantity);
  }
};

const updateQuantity = (productName, newQuantity) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.name === productName ? { ...item, quantity: newQuantity } : item
    )
  );
};



// const handleProductChange = (event, productId) => {
//   const newQuantity = parseInt(event.target.value, 10);
//   if (newQuantity >= 1) {
//     updateQuantity(productId, newQuantity);
//   }
// };



// const updateQuantity = (productId, quantity) => {
//   setCart((prevCart) =>
//     prevCart.map((item) =>
//       item.id === productId ? { ...item, quantity } : item
//     )
//   );
// };




// const downloadBill = () => {
//   const doc = new jsPDF();
//   doc.text("Bill Summary", 20, 10);
//   let yPosition = 20;

//   cart.forEach((product) => {
//     doc.text(`${product.name} x ${product.quantity} = $${product.price * product.quantity}`, 20, yPosition);
//     yPosition += 10;
//   });

//   doc.text(`Total: $${calculateTotal()}`, 20, yPosition);
//   doc.save("bill.pdf");
// };

// <button onClick={downloadBill} className="btn btn-info">Download Bill as PDF</button>

    const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:2002/list");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

    const filteredProducts = products.filter((product) => 
    product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );



  

    return(
        <>


<div className="container" style={{ marginTop: "50px", height: "100%", width: "100%" }}>
      {/* Main Header */}
      <h1 className="main-heading">
        <b>Evergreen Farms</b>
      </h1>

      {/* Image Section */}
      <div className="image-container">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/98d25f55899921.5997acd85feb8.jpg"
          alt="Organic Food"
          className="image"
        />
      </div>

      {/* Sub Header */}
      <h2 className="sub-heading">
        <b>The Organic Food Revolution</b>
      </h2>
    </div>

 
<div className="full-width-carousel">
      <Slider {...settings}>
        <div className="full-width-slide">
          <img
            src="https://cdn.smartslider3.com/wp-content/uploads/slider/cache/b4675eb2ce25c0a45df5e49cb2f47a42/organic1.jpg"
            alt="Organic Food 1"
            className="slide-image"
          />
        </div>
        <div className="full-width-slide">
          <img
            src="https://www.dwarakaorganic.com/wp-content/uploads/2024/07/Awesome-Tips-To-Up-Your-Food-Presentation-Game-1.jpg"
            alt="Organic Food 2"
            className="slide-image"
          />
        </div>
        <div className="full-width-slide">
          <img
            src="https://www.collidu.com/media/catalog/product/img/7/6/76bba9520d79d5623e31d395c6ddf92dcf88f044052c7db0bb910499e129232c/organic-food-slide3.png"
            alt="Organic Food 3"
            className="slide-image"
          />
        </div>
      </Slider>
    </div> 


<div className="min-h-screen m-5 bg-gray-50 p-6 flex flex-col items-center">
  {/* <h1 className="text-4xl font-bold mb-6 text-green-700">Organic Food Store</h1>
  
  <div className="w-full max-w-lg mb-6">
    <input
      type="text"
      placeholder="Search for a product..."
      className="w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div> */}

    <h1 className="text-4xl font-bold mb-6 text-green-700">Organic Food Store</h1>
  
  <div className="w-full max-w-lg mb-6">
    <div className="relative">
      <input
        type="text"
        placeholder="Search for a product..."
        className="w-full p-4 pl-12 pr-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out text-gray-700 placeholder-gray-400"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <i className="fas fa-search"></i>
      </span>
    </div>
  </div>
  
  {/* Optional - Add animation or creative UI feature when no input */}
  {searchQuery === "" && (
    <p className="text-gray-500 text-sm mt-2">Start typing to search for products</p>
  )}

  {/* {searchQuery && (
    <div className="w-full max-w-7xl px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-green-600 font-medium text-lg">${product.price}</p>
                <button 
                  onClick={() => addToCart(product)} 
                  className="w-full mt-4 py-2 px-4 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg">No products found.</p>
        )}
      </div>
    </div>
  )} */}

  {searchQuery && (
  <div className="w-full max-w-7xl px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
        <>
        <div className='row'>
        <div className='col-3'>
          <div
            key={product._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center">
              <div className="w-10px h-10px mb-2"> {/* Adjusted image size */}
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2> {/* Adjusted text size */}
              <p className="text-green-600 font-medium text-sm">${product.price}</p> {/* Adjusted text size */}
              <button 
                onClick={() => addToCart(product)} 
                className="w-full mt-4 py-2 px-4 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
          </div>
          </div>
          </>
        ))
      ) : (
        <p className="text-gray-500 text-lg">No products found.</p>
      )}
    </div>
  </div>
)}

</div>


  {/* carosoule */}
  {/* ------------------------------------------------------------------------------------------------ */}


  <div style={{ height: '100%', marginTop: '120px' }} className="container">
  <div className="product-page">
      <h1 className="title">
        <b><i>Organic Foods Items</i></b>
      </h1>
      <hr className="divider" />

      
      <div className="row product-container">
        {post.map((p, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <div className="card card-3">
              <img className="card-img" src={p.imageUrl} alt={p.name} />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <hr />
                <p className="card-price"><b>Price: ${p.price}</b></p>
                <button onClick={() => addToCart(p)} className="btn btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

      
      <div className="cart-toggle-container">
        <button
          className={`cart-toggle-btn ${isOpen ? 'open' : ''}`}
          onClick={toggleSidebar}
          aria-label={isOpen ? 'Close Cart' : 'Open Cart'}
        >
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-shopping-cart'}`} />
          <span>{isOpen ? 'Close Cart' : 'Open Cart'}</span>
        </button>
      </div>

      
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-container">
          <h2>Your Cart</h2>
          <div className="cart-content">
            {cart.length === 0 ? (
              <div className="empty-cart">Your cart is empty!</div>
            ) : (
              cart.map((product) => (
                <div key={product.name} className="cart-item">
                  <img src={product.imageUrl} alt={product.name} />
                  <div className="item-details">
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>

                    <input className='input' type="number" placeholder='Quantity' value={product.quantity} onChange={(e) => handleProductChange(e, product.name)} />

                    <button className="btn btn-danger" onClick={() => removeFromCart(product)}>
                      <i className="fa fa-trash"></i> Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="cart-actions">
    
              <div className="total">
                {/* <h4>Total: ${calculateTotal()}</h4> */}
                <h4>Total: ${calculateTotal().toFixed(2)}</h4> {/* Format total to 2 decimal places */}
              </div>
              <button className="btn btn-success" onClick={confirmOrder}>Confirm Order</button>
              <button className="btn btn-primary" onClick={cancelOrder}>Cancel Order</button>
              <button className="btn btn-warning" onClick={clearCart}>Clear Cart</button>
            </div>
          )}
        </div>
      </div>
    </div>

    <div>
      {/* <button onClick={confirmOrder}>Confirm Order</button>
      <button onClick={cancelOrder}>Cancel Order</button> */}

      {/* ToastContainer for notifications */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
    </div>
   
{/* -------------------------------------------------------------------------------------------------------- */}
    


<div className="menu-card-container">
      <h1 className="menu-title">
        <b><i>MENU CARD</i></b>
      </h1>

      <div className="image-container">
        <img
          className="menu-image"
          src="https://i.pinimg.com/736x/80/7b/0c/807b0c2ebe88053b8487ab8d13c581ed.jpg"
          alt="Menu"
        />
      </div>

      <div className="button-container">
        <h3>
          <button className="menu-button">
            <Link to="enter" className="menu-link">
              <b>Enter Menu List</b>
            </Link>
          </button>
        </h3>
      </div>
    </div>


    <div className="order-section-container">
      <h1 className="order-section-title">
        <b>YOU CAN ORDER IN BULK OR SEPARATE IN SINGLE ORDER ALSO....!</b>
      </h1>
    </div>

    <div className="product-section">
      {/* Organic Oil Section */}
      <div className="product-card">
        <div className="product-image">
          <img src="https://produits.bienmanger.com/35164-0w470h470_BioPlanete_Organic_Cooking_Oils_Assortment.jpg" alt="Organic Oil" />
        </div>
        <div className="product-info">
          <h1>"Organic Oil" :-</h1>
          <p>Organic cold pressed and wood pressed oils are gaining popularity due to their superior quality and health benefits...</p>
          <ul>
            <li>Groundnut Oil</li>
            <li>Mustard Oil</li>
            <li>Sesame Oil</li>
            <li>Sunflower Oil</li>
            <li>White Sesame Oil</li>
          </ul>
          <Link to="/actions" className="btn btn-order">Order Now</Link>
        </div>
      </div>

      {/* Powder Section */}
      <div className="product-card reverse">
        <div className="product-info">
          <h1>"Powder" :-</h1>
          <p>Certified Organic Coriander Powder is Quality dhania powder made from coriander seeds sourced from organic farms in India...</p>
          <Link to="/actions" className="btn btn-order">Order Now</Link>
        </div>
        <div className="product-image">
          <img src="https://orco.in/cdn/shop/products/garammasalapackagingcopy_1202x.jpg?v=1594297227" alt="Powder" />
        </div>
      </div>

      {/* Honey Section */}
      <div className="product-card">
        <div className="product-image">
          <img src="https://brownliving.in/cdn/shop/products/raw-wildflower-honey-049-01131-0001-500g-honey-syrups-brown-living-320757_500x.jpg?v=1682966773" alt="Raw Windflower Honey" />
        </div>
        <div className="product-info">
          <h1>"Raw Windflower Honey" :-</h1>
          <p>It is raw, unheated, and unpasteurized to preserve its natural nutrients and active enzymes...</p>
          <Link to="/actions" className="btn btn-order">Order Now</Link>
        </div>
      </div>

      {/* Cashew Caramel Chocolate Spread Section */}
      <div className="product-card reverse">
        <div className="product-info">
          <h1>"Cashew Caramel Chocolate Spread" :-</h1>
          <p>Cashew nuts kiss coconut and cocoa: The Lini's Bites Cashew Coconut Caramel Spread brings three power ingredients...</p>
          <Link to="/actions" className="btn btn-order">Order Now</Link>
        </div>
        <div className="product-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9M7Qokm3Yl16Lk2xSRDiO9z4NT0BuYQXX6A&s" alt="Cashew Caramel Chocolate Spread" />
        </div>
      </div>

      {/* Shahi Chai Masala Section */}
      <div className="product-card">
        <div className="product-image">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_r7U58NA-IIcnAJu5udLJoPn20waEgUfYQY0rDWTC3wi85kDWMfsMg-Vh_0qcPAz0d2e_Iaq6C40PqXwPP7sxiTmIaQN1ce2N7gHDtYK_nGGGEWoj5QzPR3re5TuQG-W0Vag0XtcbV8Qi/s1600/100_6121.JPG" alt="Shahi Chai Masala" />
        </div>
        <div className="product-info">
          <h1>"Shahi Chai Masala" :-</h1>
          <p>The spices used in masala chai often include cardamom, grated ginger, cinnamon, cloves, star anise, black peppercorns...</p>
          <Link to="/actions" className="btn btn-order">Order Now</Link>
        </div>
      </div>

      {/* Chocolate-Chip Cookies Section */}
      <div className="product-card reverse">
        <div className="product-info">
          <h1>"Chocolate-Chip Cookies" :-</h1>
          <p>Depending on the ratio of ingredients and mixing and cooking times, some recipes produce a soft, chewy cookie...</p>
          <Link to="/actions" className="btn btn-order">Order Now</Link>
        </div>
        <div className="product-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRj4Ftmbxa7klhkUsKsuvaKhD7mCH1CAuIHQ&s" alt="Chocolate-Chip Cookies" />
        </div>
      </div>
    </div>







    

    <Footer></Footer>





 



    <Outlet></Outlet>
  </>
    )
    }
