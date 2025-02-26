import React , { useState } from "react";
import { Container, Navbar, Row, Col, Button, Form } from 'react-bootstrap';
import MenuList from "./MenuList";
import OrderSummary from "./OrderSummary";


export default function Menu()
{

    const [selectedItems, setSelectedItems] = useState([]);
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [menuItems, setMenuItems] = useState([
      { id: 1, name: 'Organic Salad', description: 'Fresh organic vegetables', price: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWpFxSXfcDo6SGK_gSVyNQUEYz83Zbsv1oQ&s/150'},
      { id: 2, name: 'Vegetable Soup', description: 'Healthy vegetable broth', price: 8, image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Fruit Smoothie', description: 'Fresh organic fruits', price: 5, image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Quinoa Bowl', description: 'Organic quinoa with vegetables', price: 12, image: 'https://via.placeholder.com/150' },
    ]);
    
    const [newMenuItem, setNewMenuItem] = useState({ name: '', description: '', price: 0, image: '' });
  
    const handleSelectItem = (item) => {
      setSelectedItems([...selectedItems, item]);
    };
  
    const handleConfirmOrder = () => {
      setOrderConfirmed(true);
      alert('Your order has been confirmed!');
    };
  
    const handleCancelOrder = () => {
      setSelectedItems([]);
      setOrderConfirmed(false);
      alert('Your order has been canceled!');
    };
  
    const handleDeleteMenuItem = (id) => {
      setMenuItems(menuItems.filter(item => item.id !== id));
    };
  
    const handleAddMenuItem = () => {
      const newItem = { ...newMenuItem, id: Date.now() };
      setMenuItems([...menuItems, newItem]);
      setNewMenuItem({ name: '', description: '', price: 0, image: '' });
    };
  

    return(
        <>
    <Container>
      <Navbar style={{marginTop:'50px'}} bg="dark" variant="dark">
        <Navbar.Brand href="#home"><h4 style={{textAlign:'center'}}>Organic Food Menu</h4></Navbar.Brand>
      </Navbar>

      <Row>
        <Col md={8}>
          <h2 className="mt-5">Select Your Food</h2>
          <MenuList items={menuItems} onAddToOrder={handleSelectItem} onDeleteMenuItem={handleDeleteMenuItem} />
        </Col>

        <Col md={4}>
          {orderConfirmed ? (
            <OrderSummary selectedItems={selectedItems} onConfirmOrder={handleConfirmOrder} onCancelOrder={handleCancelOrder} />
          ) : (
            <div style={{marginTop:'100px'}}>
              <h3>Add New Menu Item</h3>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter food name"
                    value={newMenuItem.name}
                    onChange={(e) => setNewMenuItem({ ...newMenuItem, name: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter food description"
                    value={newMenuItem.description}
                    onChange={(e) => setNewMenuItem({ ...newMenuItem, description: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    value={newMenuItem.price}
                    onChange={(e) => setNewMenuItem({ ...newMenuItem, price: parseFloat(e.target.value) })}
                  />
                </Form.Group>
                <Form.Group controlId="formImage">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter image URL"
                    value={newMenuItem.image}
                    onChange={(e) => setNewMenuItem({ ...newMenuItem, image: e.target.value })}
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleAddMenuItem} className="mt-2">
                  Add Item
                </Button>
              </Form>
            </div>
          )}
        </Col>
      </Row>
    </Container>

        </>
    )
}