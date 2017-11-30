import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/CommentsCounter.scss';

const countCommentsRecursive = (entity, allComments) => {
  if (!entity || !entity.comments || !allComments) {
    return 0;
  }

  let count = (entity.comments || []).length;
  entity.comments.forEach(commentId => count += countCommentsRecursive(allComments[commentId], allComments));
  return count;
}

const CommentsCounter = ({entity, comments, onClick, className}) => {
  const count = countCommentsRecursive(entity, comments);
  const label = 'comment' + (count != 1 ? 's' : '');
  const mergedClassName = ['CommentsCounter', className].join(' ');
  return <div className={mergedClassName} onClick={onClick}>{`${count} ${label}`}</div>
}

export default CommentsCounter;
