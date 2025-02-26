import React from 'react';

const  Cart = ({ cartItems, toggleSidebar, totalPrice, placeOrder }) => {
  return (
    <div
      className="cart-sidebar"
      style={{
        position: 'fixed',
        right: 0,
        top: 0,
        width: '300px',
        backgroundColor: 'lightgray',
        padding: '20px',
        display: toggleSidebar ? 'block' : 'none',
      }}
    >
      <h4>Your Cart</h4>
      <ul>
        {cartItems.map((p, index) => (
          <li key={index}>
            {p.name} - {p.price}
          </li>
        ))}
      </ul>
      <hr />
      <p>Total Price: <b>{totalPrice}</b></p>
      <button onClick={placeOrder} className="btn btn-success">
        Place Order
      </button>
    </div>
  );
};

export default Cart;
