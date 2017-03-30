import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

import CreateProject from './CreateProject';

describe('Initializing create project container', () => {

  const mockStore = configureStore([])({});

  it('should render without crashing', () => {
    const creatProjectContainer = mount(
      <Provider store={mockStore}>
        <CreateProject />
      </Provider>
    );
  });

  it('should call create-project action on init', () => {

  });
});
