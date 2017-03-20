import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import App from './App';
import { projectReducers, projectMiddlewares } from 'peppita-core';

const history = createHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers(
    Object.assign({
      router: routerReducer,
    }, projectReducers)
  ),
  composeEnhancers(applyMiddleware(...projectMiddlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
