import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/CommentModal.scss';
import Button from './Button';
import Modal from 'react-modal';

class CommentModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  static propTypes = {
    addingCommentTo: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired,
    closeCommentModal: PropTypes.func.isRequired
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  save = () => {
    const {text} = this.state;
    const {username, addingCommentTo} = this.props;

    this.props.addComment(text, username, addingCommentTo);

    this.close();
  }

  close = () => {
    this.setState({text:''}, this.props.closeCommentModal);
  }

  render () {
    const isOpen = !!this.props.addingCommentTo;
    const {text} = this.state;
    const {addingCommentTo, username, addComment, ...props} = this.props;

    return (
      <Modal {...props} isOpen={isOpen} style={modalStyle} onRequestClose={this.close}>
        <div className="CommentModal">
          <div className="Header">Add a Comment</div>
          <textarea value={text} onChange={this.onChange}/>
          <div className="ButtonBar">
            <Button onClick={this.close}>Cancel</Button>
            <Button disabled={text == ''} onClick={this.save}>Save</Button>
          </div>
        </div>
      </Modal>
    )
  }
}

/**
 * react-modal...
 */
const modalStyle = {
  content : {
    position: 'absolute',
    top:0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    width: '80vw',
    maxWidth: '300px',
    height: '240px',
    overflow: 'hidden',
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2)'
  }
};

export default CommentModal;
