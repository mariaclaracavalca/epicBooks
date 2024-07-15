import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CommentArea from './CommentArea';

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
          <Button as={Link} to={`/books/${book.asin}`} variant="primary">
            Più dettagli 
          </Button>
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={book.asin} />}
    </>
  );
};

export default SingleBook;
