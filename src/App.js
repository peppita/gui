import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';

import ProjectForm from './components/ProjectForm';


class App extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Row columns={1}>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Header as='h1'>peppita-gui</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <ProjectForm/>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
