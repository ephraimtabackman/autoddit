import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Login.scss';
import Button from './Button';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
  }

  static propTypes = {
    setUsername: PropTypes.func.isRequired
  }

  onChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  onKeyPress= (event) => {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  }

  onSubmit = () => {
    if (this.state.username) {
      this.props.setUsername(this.state.username);
    }
  }

  render() {
    return (
      <div className="Login">
        <div className="instructions">
          What's your username?
        </div>
        <p>
          <input value={this.state.username} onChange={this.onChange} onKeyPress={this.onKeyPress}/>
        </p>
        <p>
          <Button disabled={this.state.username == ''} onClick={this.onSubmit}>Login</Button>
        </p>
      </div>
    );
  }
}

export default Login;
