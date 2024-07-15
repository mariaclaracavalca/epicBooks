import React, { useState, useEffect, useCallback } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = useCallback(async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk1NWM0MDE5NmQ3YjAwMTVkNmI1NGQiLCJpYXQiOjE3MjEwNjQ1MTIsImV4cCI6MTcyMjI3NDExMn0.4KHbqLVURWAvtarewAwpwrlr_Ul-VOU9oUNWsiifvaE',
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

  const handleDeleteComment = async (commentId) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk1NWM0MDE5NmQ3YjAwMTVkNmI1NGQiLCJpYXQiOjE3MjEwNjQ1MTIsImV4cCI6MTcyMjI3NDExMn0.4KHbqLVURWAvtarewAwpwrlr_Ul-VOU9oUNWsiifvaE',
        },
      });
      if (response.ok) {
        setComments(comments.filter(comment => comment._id !== commentId));
        console.log('Commento eliminato con successo');
      } else {
        console.error('Errore durante l\'eliminazione del commento');
      }
    } catch (error) {
      console.error('Errore:', error);
    }
  };

  return (
    <div>
      <CommentList comments={comments} onDeleteComment={handleDeleteComment} />
      <AddComment asin={asin} fetchComments={fetchComments} />
    </div>
  );
};

export default CommentArea;
