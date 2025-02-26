import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Nav.css';

export default function Nav1() {
  return (
    <>
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/98d25f55899921.5997acd85feb8.jpg"
            style={{ height: '60px', marginRight: '10px' }}
            alt="Logo"
          />
          <h2 className="company-title mb-0">ONLY ORGANICS<sup>TM</sup></h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            {/* Home and About Links */}
            <Nav.Item>
              <Link className="nav-link" to="/home"><b>HOME</b></Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/about"><b>ABOUT</b></Link>
            </Nav.Item>

            {/* "ORGANICS" Dropdown */}
            <NavDropdown title={<span style={{ fontSize:'18px' }}>ORGANICS</span>}  id="basic-nav-dropdown" className="nav-dropdown">
              <NavDropdown.Item as={Link} to="/organic"><b>WHY ORGANIC</b></NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/practice"><b>ORGANIC PRACTICES</b></NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/we"><b>WHO WE ARE</b></NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/actions"><b>TAKE ACTION</b></NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/donate"><b>DONATE</b></NavDropdown.Item>
            </NavDropdown>

            {/* Basket and Contact Us Links */}
            <Nav.Item>
              <Link className="nav-link" to="/basket"><b>BASKET</b></Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/contact"><b>CONTACT US</b></Link>
            </Nav.Item>

            {/* Sign Up and Sign In Links */}
            {/* <Nav.Item>
              <Link className="nav-link" to="/signup"><b>SIGN UP</b></Link>
            </Nav.Item> */}
            <Nav.Item>
              <Link className="nav-link" to="/signin"><b>SIGN IN</b></Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/admin-login"><b>Admin</b></Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Link className="nav-link" to="/admin-dashboard"><b>admin2</b></Link>
            </Nav.Item> */}

            {/* Search bar for large screens */}
            {/* <Form className="d-flex search-form">
              <FormControl 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                className="me-2"
              />
              <Button variant="success" className="search-btn">Search</Button>
            </Form> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
