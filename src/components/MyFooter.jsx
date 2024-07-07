// src/components/MyFooter.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => (
  <footer className="bg-dark text-white mt-5 p-4 text-center">
    <Container>
      <Row>
        <Col>
          <p>&copy; 2024 EpiBooks. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default MyFooter;
