import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { asin } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}`);
        if (response.ok) {
          const data = await response.json();
          setBook(data);
        } else {
          console.error('Errore nel recupero dei dettagli del libro');
        }
      } catch (error) {
        console.error('Errore:', error);
      }
    };

    fetchBookDetails();
  }, [asin]);

  if (!book) {
    return <div>Caricando...</div>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;
