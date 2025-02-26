import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

const OrderHistory1 = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);  // Track any errors

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await fetch('http://localhost:2002/list');
        if (!response.ok) {
          throw new Error('Failed to fetch order history');
        }
        const data = await response.json();
        
        // Assuming the response returns an array or object with an array
        // Ensure the response has an orders key and it's an array
        if (data && Array.isArray(data.orders)) {
          setOrderHistory(data.orders);
        } else {
          setError('Invalid data format');
        }
      } catch (error) {
        setError('Error fetching order history: ' + error.message);
      } finally {
        setLoading(false);  // End loading
      }
    };

    fetchOrderHistory();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Your Order History</h1>

      <ListGroup>
        {orderHistory.length > 0 ? (
          orderHistory.map((order, index) => (
            <ListGroup.Item key={index}>
              <strong>Order #{index + 1}</strong> - Total: ${order.total}
              <br />
              <em>{new Date(order.date).toLocaleString()}</em>
              <ul>
                {order.items.map(item => (
                  <li key={item.id}>{item.name} - ${item.price}</li>
                ))}
              </ul>
            </ListGroup.Item>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </ListGroup>
    </div>
  );
};

export default OrderHistory1;
