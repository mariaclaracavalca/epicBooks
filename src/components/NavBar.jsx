// src/components/MyNav.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './MyNav.css';  

const MyNav = () => (
  <Navbar bg="custom" variant="dark" expand="lg" className="custom-navbar">
    <Navbar.Brand href="#" className="custom-brand">EpiBooks</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto custom-nav">
        <Nav.Link href="#" className="custom-nav-link">Home</Nav.Link>
        <Nav.Link href="#" className="custom-nav-link">Libreria</Nav.Link>
        <Nav.Link href="#" className="custom-nav-link">Acquisto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNav;
