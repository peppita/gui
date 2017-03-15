import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Container, Grid, Header, Icon, Menu, Sidebar } from 'semantic-ui-react';

import ProjectForm from './components/ProjectForm';


class App extends Component {
  render() {
    return (
        <Router>
          <Container>
            <Sidebar as={Menu} width='thin' visible={true} icon='labeled' vertical inverted>
              <Menu.Item name="List projects">
                peppita
              </Menu.Item>
              <Menu.Item name="List projects">
                <Link to="/">
                  <Icon name="list"/>
                </Link>
              </Menu.Item>
              <Menu.Item name="Create Project">
                <Link to="/test">
                  <Icon name="add square"/>
                </Link>
              </Menu.Item>
            </Sidebar>
            <Grid centered>
              <Grid.Row columns={1}>
                <Grid.Column mobile={16} tablet={8} computer={4}>
                  <Link to="/">Home</Link>
                  <Header as='h1'>peppita-gui</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Route path="/test" component={ProjectForm}/>
              </Grid.Row>
            </Grid>
          </Container>
        </Router>
    );
  }
}

export default App;
