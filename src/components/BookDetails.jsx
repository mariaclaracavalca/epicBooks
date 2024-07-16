import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import romance from '../data/romance.json';
import CommentArea from './CommentArea';

const BookDetails = () => {
  const { asin } = useParams();
  const foundBook = romance.find((book) => book.asin === asin);

  if (!foundBook) {
    return <div>Libro non trovato</div>;
  }

  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <Card>
          <Card.Img variant="top" src={foundBook.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {foundBook.title}
            </Card.Title>
            <Card.Text>
              {foundBook.description}
            </Card.Text>
          </Card.Body>
        </Card>
        <CommentArea asin={asin} />
      </Col>
    </Row>
  );
};

export default BookDetails;
