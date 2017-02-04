import React, { Component } from 'react';
import './App.css';
import { Grid, Header } from 'semantic-ui-react';


class App extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Column width={4}>
          <Header as='h1'>peppita-gui</Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
