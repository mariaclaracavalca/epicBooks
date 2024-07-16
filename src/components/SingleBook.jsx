import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Card
        onClick={() => setSelected(!selected)}
        style={{ border: selected ? '2px solid red' : 'none' }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>${book.price}</Card.Text>
          <Link to={`/books/${book.asin}`} className="btn btn-sm btn-secondary">
            Più dettagli 
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
