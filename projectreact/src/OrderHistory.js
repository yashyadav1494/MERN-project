import React, { useEffect, useState } from "react";
import './OrderHistory.css'; // Import custom CSS

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2002/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  // Handle canceling an order
  const handleCancelOrder = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:2002/orders/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Canceled" }),
      });
      const updatedOrder = await response.json();

      if (response.ok) {
        // Update the order in the state
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? updatedOrder : order
          )
        );
      } else {
        alert(updatedOrder.message); // Show error message if cancellation failed
      }
    } catch (error) {
      console.error("Error canceling order:", error);
    }
  };

  // Function to check if the order can still be canceled (within 10 minutes)
  const canCancelOrder = (createdAt) => {
    const orderCreationTime = new Date(createdAt).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = (currentTime - orderCreationTime) / 60000; // Convert to minutes
    return timeDifference <= 10; // Cancelable if within 10 minutes
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">Order History</h1>
      <div className="row justify-content-center">
        {orders.length === 0 ? (
          <p className="text-center">No orders found.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card shadow-lg rounded">
                <div className="card-body">
                  <h5 className="card-title text-primary">Order ID: {order._id}</h5>
                  <p className="card-text"><b>Status: {order.status}</b></p>
                  <p className="card-text"><b>Total: ${order.total}</b></p>
                  <p className="card-text"><b>Created at: {new Date(order.createdAt).toLocaleString()}</b></p>
                  <h6><b>Products:</b></h6>
                  {order.products.map((product, index) => (
                    <div key={index}>
                      {/* <p><b>{product.name} - ${product.price}</b></p> */}
                      <p><b>{product.name} - ${product.price} -Quantity -{product.quantity}</b></p>

                    </div>
                  ))}

                  {/* Cancel button for all orders */}
                  <button
                    className={`btn btn-danger w-100 ${!canCancelOrder(order.createdAt) ? 'disabled' : ''}`}
                    onClick={() => handleCancelOrder(order._id)}
                    disabled={!canCancelOrder(order.createdAt)}
                  >
                    {canCancelOrder(order.createdAt) ? "Cancel Order" : "Cannot Cancel (Time Exceeded & Order Delivered)"}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
