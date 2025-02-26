import React, { useState, useEffect } from "react";
import { Card, Button, Form, Container, Row, Col, Table, Alert } from "react-bootstrap";
import axios from "axios";
import Swal from 'sweetalert2';


const Menu1 = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Organic Salad", price: 10, imageUrl: "https://www.bordbia.ie/globalassets/recipe-image/organic-salad-with-roasted-vegetables-salad-leaves-and-cheese2.png" },
    { id: 2, name: "Fresh Juices", price: 5, imageUrl: "https://s7ap1.scene7.com/is/image/itcportalprod/top-fruit-juices?fmt=webp-alpha" },
    { id: 3, name: "Green Smoothie", price: 8, imageUrl: "https://thefoodiephysician.com/wp-content/uploads/2021/07/fullsizeoutput_21a4-scaled.jpeg" },
    { id: 4, name: "Vegan Burger", price: 12, imageUrl: "https://www.wellplated.com/wp-content/uploads/2016/03/Black-Bean-Vegan-Burger-Recipe.jpg" },
  ]);

  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    try {
      const response = await axios.get("http://localhost:2002/api/orders/history");
      setOrderHistory(response.data.orders);
    } catch (error) {
      console.error("Error fetching order history", error);
    }
  };

  const addToOrder = (item, quantity) => {
    if (quantity <= 0) return;
    
    const existingOrder = orders.find(order => order.id === item.id);
    if (existingOrder) {
      setOrders(orders.map(order =>
        order.id === item.id ? { ...order, quantity, total: quantity * item.price } : order
      ));
    } else {
      setOrders([...orders, { ...item, quantity, total: quantity * item.price }]);
    }
  };

  const removeFromOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const confirmOrder = async () => {
    if (!customerEmail || orders.length === 0) return alert("Enter email and add items to confirm order!");
  
    try {
      await axios.post("http://localhost:2002/api/orders/create", {
        userName: "John Doe",  // Replace with actual user input
        userEmail: customerEmail,
        userPhone: "1234567890",  // Replace with actual user input
        userAddress: "123 Main St, City, Country",  // Replace with actual user input
        orders,
      });
  
      setOrderStatus("Confirmed");
      setOrders([]);
      //alert("Order placed successfully!");
      //-------------------------------------------------------------------------
      Swal.fire({
        title: "Success!",
        text: "Order Placed Successfully!",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
        background: "#fefefe",
        color: "#333",
        timer: 3000, // Auto-close after 3 seconds
        showClass: {
          popup: "animate__animated animate__fadeInDown"
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp"
        }
      });
      
      //------------------------------------------------------------------------
      fetchOrderHistory();
    } catch (error) {
      console.error("Order Error:", error);
      alert("Order failed!");
    }
  };
  

  const cancelOrder = () => {
    setOrders([]);
    setOrderStatus("Cancelled");
  };

  return (
    <Container className="my-5">
      <h1 style={{color:'green'}} className="text-center mb-4">Organic Food Menu</h1>
      <Row>
        {menuItems.map(item => (
          <Col key={item.id} md={3} className="mb-4">
            <Card>
              <Card.Img style={{ height: "200px", objectFit: "cover" }} variant="top" src={item.imageUrl} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: ${item.price}</Card.Text>
                <Form.Group>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="number" min="1" defaultValue="1" id={`quantity-${item.id}`} />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={() => addToOrder(item, parseInt(document.getElementById(`quantity-${item.id}`).value))}
                >
                  Add to Order
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {orders.length > 0 && (
        <div className="mt-5">
          <h2>Order Summary</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.name}</td>
                  <td>{order.quantity}</td>
                  <td>${order.price}</td>
                  <td>${order.total}</td>
                  <td>
                    <Button variant="danger" onClick={() => removeFromOrder(order.id)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Total Bill: ${orders.reduce((acc, order) => acc + order.total, 0)}</h4>
          <Form.Group>
            <Form.Label>Enter Email:</Form.Label>
            <Form.Control type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} />
          </Form.Group>
          <Button variant="success" className="mt-3" onClick={confirmOrder}>Confirm Order</Button>
          <Button variant="warning" className="mt-3 ms-2" onClick={cancelOrder}>Cancel Order</Button>
        </div>
      )}

      {orderStatus && <Alert className="mt-4" variant={orderStatus === "Confirmed" ? "success" : "danger"}>{orderStatus}</Alert>}

      <h2 className="mt-5">Order History</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Email</th>
            <th>Total Bill</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orderHistory.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.customerEmail}</td>
              <td>${order.totalBill}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Menu1;
