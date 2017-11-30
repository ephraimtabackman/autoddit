import React from 'react';
import '../style/CommentsControls.scss';
import CommentsCounterConnector from '../containers/CommentsCounterConnector';
import AddCommentButtonConnector from '../containers/AddCommentButtonConnector';

const CommentsControls = ({entity, className, onClickCount, onClickAdd}) => (
  <div className="CommentsControls">
    <CommentsCounterConnector className={className} entity={entity} onClick={onClickCount}/>
    <AddCommentButtonConnector parentId={entity.id} onClick={onClickAdd}/>
  </div>
);

export default CommentsControls;