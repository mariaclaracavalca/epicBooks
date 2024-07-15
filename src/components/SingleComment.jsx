import React from 'react';

const SingleComment = ({ comment, onDelete }) => {
  const handleDelete = () => {
    onDelete(comment._id);
  };

  return (
    <div className="mb-2">
      <strong>{comment.author}</strong>
      <p>{comment.comment}</p>
      <small>Rating: {comment.rate}</small>
      <br />
      <button className="btn btn-danger btn-sm ms-2" onClick={handleDelete}>
        Elimina
      </button>
    </div>
  );
};

export default SingleComment;
