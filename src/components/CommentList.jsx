import React from 'react';
import SingleComment from './SingleComment';

const CommentList = ({ comments, onDeleteComment }) => (
  <div>
    {comments.map(comment => (
      <SingleComment key={comment._id} comment={comment} onDelete={onDeleteComment} />
    ))}
  </div>
);

export default CommentList;
