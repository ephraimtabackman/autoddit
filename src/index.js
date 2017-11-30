import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import AppConnector from './containers/AppConnector';
import rootReducer from './reducers';
import './index.css';

let store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

render(
  <Provider store={store}>
    <Router>
      <AppConnector />
    </Router>
  </Provider>,
  document.getElementById('root')
);
