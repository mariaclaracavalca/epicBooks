import React, { useState } from 'react';

const AddComment = ({ asin, fetchComments }) => {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjkwMmJjM2Y4Y2FlZTAwMTU0ZmEzODIiLCJpYXQiOjE3MjA3MjQ0MTksImV4cCI6MTcyMTkzNDAxOX0.AYA2JJln8-7reKA7G6MlJxkrO2j-d4B1L3VovAhC69E',
        },
        body: JSON.stringify({
          comment,
          rate,
          elementId: asin,
        }),
      });
      if (response.ok) {
        alert('Commento aggiunto!');
        setComment('');
        setRate(1);
        fetchComments(); 
      } else {
        alert('Non hai aggiunto nessun commento');
      }
    } catch (error) {
      console.error('Errore:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="comment" className="form-label">Commento</label>
        <textarea
          className="form-control"
          id="comment"
          rows="3"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="rate" className="form-label">Rating</label>
        <select
          className="form-select"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-sm btn-secondary">Submit</button>
    </form>
  );
};

export default AddComment;
