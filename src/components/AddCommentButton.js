import React from 'react';
import '../style/AddCommentButton.scss';
import Button from './Button';

const AddCommentButton = ({openCommentModal, parentId, onClick}) => (
  <Button onClick={()=>{onClick && onClick();openCommentModal(parentId);}} className="small AddCommentButton">Add Comment</Button>
);

export default AddCommentButton;