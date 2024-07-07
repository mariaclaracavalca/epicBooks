// src/components/MyNav.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyNav = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Libreria</Nav.Link>
        <Nav.Link href="#">Acquisto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNav;
