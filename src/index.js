import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createProjectStore } from './projectStore';



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
