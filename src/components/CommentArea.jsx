// src/components/CommentArea.js
import React, { useState, useEffect, useCallback } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = useCallback(async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhY2RlMGQzOTNmYzAwMTU5NzQwMDgiLCJpYXQiOjE3MjAzNzI3MDQsImV4cCI6MTcyMTU4MjMwNH0.6nbm9PafW7ftGVre2a-8bt96VmfobiYTt5MJZ1PdYfg',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        console.error('Errori commento');
      }
    } catch (error) {
      console.error('Errore:', error);
    }
  }, [asin]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div>
      <CommentList comments={comments} />
      <AddComment asin={asin} fetchComments={fetchComments} />
    </div>
  );
};

export default CommentArea;
