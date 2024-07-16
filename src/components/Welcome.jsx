
import React from 'react';
import { Container } from 'react-bootstrap';
import './Welcome.css'; 

const Welcome = () => (
  <Container className="mt-5 welcome-container"> 
    <div className="welcome-message">
      Benvenuti in EpiBooks!
    </div>
    <div className="welcome-subtext">
      La tua libreria online di fiducia.
    </div>
    <h1 className="display-4 welcome-heading">EpiBooks</h1>
  </Container>
);

export default Welcome;
