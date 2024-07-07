// src/components/SingleBook.js
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
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
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={book.asin} />}
    </>
  );
};

export default SingleBook;
