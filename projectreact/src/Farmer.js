import React, { useState } from 'react';
import { Card, Button, Modal, Row, Col } from 'react-bootstrap';
import './Farmer.css';


const Farmer = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFarmer, setSelectedFarmer] = useState(null);

  // Sample farmer data
  const farmers = [
    {
      id: 1,
      name: 'Subhash Palekar',
      role: 'Organic Farmer',
      bio: 'Subhash has been practicing organic farming for over 15 years and specializes in growing seasonal vegetables.',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:598/1*RCLUVPfDQjrbQaTg-0Jsrw.jpeg',
      achievements: [
        'Awarded Best Organic Farmer 2020',
        'Started a community-supported agriculture program',
        'Implemented sustainable water usage practices'
      ],
      moreInfo: 'Subhash has also worked with local communities to educate them on the benefits of organic farming and healthy eating.',
    },
    {
      id: 2,
      name: 'Rajiv Singh',
      role: 'Farmer & Agricultural Consultant',
      bio: 'Rajiv Singh is an expert in sustainable farming techniques, particularly in the cultivation of organic fruits.',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQHfbilRerZPsg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1697635987804?e=2147483647&v=beta&t=iNl6ZU7HfJsVlxsdzRbDbRdds6L8nc0ZlKVmvuT7Pwk',
      achievements: [
        'Developed a new organic pesticide',
        'Consulted on over 100 farms worldwide',
        'Advocated for organic farming policies'
      ],
      moreInfo: 'Rajiv Singh is deeply committed to bringing innovative practices to farming, always striving for efficiency and environmental sustainability.',
    }
  ];

  const handleShow = (farmer) => {
    setSelectedFarmer(farmer);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedFarmer(null);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Meet Our Farmers</h2>

      <Row className="justify-content-center">
        {farmers.map((farmer) => (
          <Col xs={12} md={6} lg={4} key={farmer.id}>
            <Card className="farmer-card mb-4">
              <Card.Img variant="top" src={farmer.imageUrl} alt={farmer.name} />
              <Card.Body>
                <Card.Title>{farmer.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{farmer.role}</Card.Subtitle>
                <Card.Text>{farmer.bio}</Card.Text>
                <Button variant="primary" onClick={() => handleShow(farmer)}>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for More Information */}
      {selectedFarmer && (
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedFarmer.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Achievements:</h5>
            <ul>
              {selectedFarmer.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
            <p>{selectedFarmer.moreInfo}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Farmer;
