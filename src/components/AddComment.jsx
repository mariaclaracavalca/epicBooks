// src/components/AddComment.js
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
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhY2RlMGQzOTNmYzAwMTU5NzQwMDgiLCJpYXQiOjE3MjAzNzI3MDQsImV4cCI6MTcyMTU4MjMwNH0.6nbm9PafW7ftGVre2a-8bt96VmfobiYTt5MJZ1PdYfg',
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
        alert('Errore nella aggiunta di un commento');
      }
    } catch (error) {
      console.error('Errore:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="comment" className="form-label">Comment</label>
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
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default AddComment;
