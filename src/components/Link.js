import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Link.scss';
import Submitted from './Submitted';
import CommentsControls from './CommentsControls';
import CommentsConnector from '../containers/CommentsConnector';
import VoterConnector from '../containers/VoterConnector';

const Title = ({link: {title, url}}) => <div className="Title"><a href={url} target="external">{title || url}</a></div>;

const Image = ({link: {image, url}}) => <a href={url} target="external"><div className="Image" style={{backgroundImage: 'url(' + image + ')'}}></div></a>;

class Link extends Component {
  constructor (props) {
    super(props);

    this.state = {
      showComments: false
    }
  }

  static propTypes = {
    link: PropTypes.object.isRequired
  }

  toggleComments = () => {
    this.setState({showComments: !this.state.showComments});
  }

  onClickAdd = () => {
    this.setState({showComments: true});
  }

  render() {
    const {link} = this.props;
    const comments = this.state.showComments && <CommentsConnector ids={link.comments}/>;

    return (
      <div className="Link">
        <div className="Main">
          <VoterConnector entity={link}/>
          <Image link={link}/>
          <div className="Details">
            <Title link={link}/>
            <Submitted entity={link}/>
            <CommentsControls className="toggle" entity={link} onClickCount={this.toggleComments} onClickAdd={this.onClickAdd}/>
          </div>
        </div>
        {comments}
      </div>
    );
  }
}

export default Link;
