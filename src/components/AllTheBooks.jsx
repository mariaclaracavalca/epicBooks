// src/components/AllTheBooks.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import booksData from '../data/romance.json';
import SingleBook from './SingleBook';

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {books.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} key={book.asin} className="mb-4">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
