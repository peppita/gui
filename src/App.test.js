import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createProjectStore } from './projectStore';

const projectStore = createProjectStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={projectStore}>
      <App />
    </Provider>, div);
});
