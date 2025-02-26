import React, { useState } from 'react';
import { Card, Button, Modal, Row, Col } from 'react-bootstrap';
import './Pioneer.css';

const Pioneer = () => {
  const [showModal, setShowModal] = useState(false);

  // Pioneer data
  const pioneer = {
    name: 'Nikhil Varad',
    role: 'Chief Visionary Of GoFood.Com The Organic Food Company',
    bio: 'Nikhil has been at the forefront of the organic food revolution for over 20 years. His passion for sustainable farming and healthy eating has shaped the company\'s vision and mission.',
    achievements: [
      'Founder of the first 100% organic food market',
      'Developed partnerships with over 50 organic farmers worldwide',
      'Advocated for eco-friendly packaging solutions in the industry',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Sanjiv_Bajaj.jpg',
    moreInfo: 'Nikhil continues to work on improving organic farming techniques and expanding the reach of organic food globally.',
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Meet Our Pioneer</h2>

      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card className="pioneer-card mb-4">
            <Card.Img variant="top" src={pioneer.imageUrl} alt="Pioneer Image" />
            <Card.Body>
              <Card.Title>{pioneer.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{pioneer.role}</Card.Subtitle>
              <Card.Text>{pioneer.bio}</Card.Text>
              <Button variant="primary" onClick={handleShow}>Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for More Information */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{pioneer.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Achievements:</h5>
          <ul>
            {pioneer.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
          <p>{pioneer.moreInfo}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pioneer;
