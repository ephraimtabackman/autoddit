import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import '../style/App.scss';
import LinksPage from './LinksPage';
import LoginConnector from '../containers/LoginConnector';
import SubmitConnector from '../containers/SubmitConnector';
import CommentModalConnector from '../containers/CommentModalConnector';

class App extends Component {
  static propTypes = {
    username: PropTypes.string,
    fetchAllData: PropTypes.func.isRequired
  };

  componentWillReceiveProps (nextProps) {
    if (nextProps.username && nextProps.username != this.props.username) {
      this.props.fetchAllData();
    }
  }

  render() {
    const isLoggedIn = !!this.props.username;

    return (
      <div className="App">
        <div className="AppHeader">Welcome to Autoddit</div>
        {
          !isLoggedIn ?
            <Route path="/" component={LoginConnector}/>
          :
            <Switch>
              <Route path="/submit" component={SubmitConnector}/>
              <Route path="/" component={LinksPage}/>
            </Switch>
        }
        <CommentModalConnector/>
      </div>
    );
  }
}

export default App;
