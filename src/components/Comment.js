import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Comment.scss';
import Submitted from './Submitted';
import CommentsControls from './CommentsControls';
import CommentsConnector from '../containers/CommentsConnector';
import VoterConnector from '../containers/VoterConnector';

const Text = ({comment: {text}}) => (
  <div className="Text">{text}</div>
);

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }

  render() {
    const {comment} = this.props;
    const comments = comment.comments && comment.comments.length ? <CommentsConnector ids={comment.comments}/> : null;

    return (
      <div className="Comment">
        <div className="Main">
          <VoterConnector entity={comment}/>
          <div className="Details">
            <Text comment={comment}/>
            <Submitted entity={comment}/>
            <CommentsControls entity={comment}/>
          </div>
        </div>
        {comments}
      </div>
    );
  }
}

export default Comment;
