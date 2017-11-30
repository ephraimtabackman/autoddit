import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Comments.scss';
import Comment from './Comment';

/**
 * This component is used recursively to create a tree of comments
 */
class Comments extends Component {

  static propTypes = {
    comments: PropTypes.array
  }

  render() {
    const {comments} = this.props;
    if (!comments || !comments.length) return null;
    const sortedComments = [...comments].sort((a,b) => a.submitted - b.submitted);
    const childComments = sortedComments.map(comment => (
      <Comment comment={comment} key={comment.id}/>
    ));

    return (
      <div className="Comments">
        {childComments}
      </div>
    );
  }
}

export default Comments;
