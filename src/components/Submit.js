import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Submit.scss';
import { Redirect } from 'react-router-dom';
import Button from './Button';

const DEFAULT_IMAGE = 'https://picsum.photos/';

class Submit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      url: '',
      image: DEFAULT_IMAGE + Math.round(Math.random()*40 + 80) + '/' + Math.round(Math.random()*40 + 80),
      submitted: false
    }
  }

  static propTypes = {
    addLink: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.onAdd();
    }
  };

  onAdd = () => {
    if (!this.state.url) {
      return;
    }

    const {addLink, username} = this.props;
    const {submitted, ...rest} = this.state;

    let link = {
      ...rest,
      username
    }

    addLink(link);

    this.setState({
      submitted: true
    });
  }

  render() {
    if (this.state.submitted) return <Redirect to="/"/>;

    return (
      <div className="Submit">
        <div className="instructions">
          Add a new link to Autoddit.
        </div>
        <p>
          <input placeholder="Link" name="url" value={this.state.url} onChange={this.onChange} onKeyPress={this.onKeyPress}/>
        </p>
        <p>
          <input placeholder="Title" name="title" value={this.state.title} onChange={this.onChange} onKeyPress={this.onKeyPress}/>
        </p>
        <p>
          <input placeholder="Image URL" name="image" value={this.state.image} onChange={this.onChange} onKeyPress={this.onKeyPress}/>
        </p>
        <p>
          <Button onClick={this.onAdd} disabled={!this.state.url}>Add</Button>
        </p>
      </div>
    );
  }
}

export default Submit;
