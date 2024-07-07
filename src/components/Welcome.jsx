// src/components/Welcome.js
import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const Welcome = () => (
  <Container className="mt-5">
    <Alert variant="success">
      <Alert.Heading>Benvenuti in EpiBooks!</Alert.Heading>
      <p>
        La tua libreria online di fiducia.
      </p>
    </Alert>
    <h1 className="display-4">EpiBooks</h1>
  </Container>
);

export default Welcome;
