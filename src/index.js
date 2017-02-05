import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createProjectStore } from './projectStore';

const projectStore = createProjectStore();

ReactDOM.render(
  <Provider store={projectStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
