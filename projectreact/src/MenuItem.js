import React from "react";
import { Container, Navbar, Row, Col, Button, Form } from 'react-bootstrap';

export default function MenuItem({ item, onAddToOrder, onDeleteMenuItem })
{
       
    
    return(
        <>
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <p><strong>Price: ${item.price}</strong></p>
        <Button variant="primary" onClick={() => onAddToOrder(item)}>Add to Order</Button>
        <Button variant="danger" onClick={() => onDeleteMenuItem(item.id)} className="ms-2">Delete</Button>
      </div>
    </div>

        </>
    )


}