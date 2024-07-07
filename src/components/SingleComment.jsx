// src/components/SingleComment.js
import React from 'react';

const SingleComment = ({ comment }) => (
  <div className="mb-2">
    <strong>{comment.author}</strong>
    <p>{comment.comment}</p>
    <small>Rating: {comment.rate}</small>
  </div>
);

export default SingleComment;
