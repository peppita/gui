import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Grid, Header, Icon, Menu, Sidebar } from 'semantic-ui-react';

import CreateProject from './containers/CreateProject';


class App extends Component {
  render() {
    return (
        <Container>
          <Sidebar as={Menu} width='thin' visible={true} icon='labeled' vertical inverted>
            <Menu.Item name="List projects">
              peppita
            </Menu.Item>
              <Menu.Item as={Link} to="/" name="List projects">
                <Icon name="list"/>
              </Menu.Item>
            <Menu.Item as={Link} to="/create-project">
              <Icon name="add square"/>
            </Menu.Item>
          </Sidebar>
          <Grid centered>
            <Grid.Row columns={1}>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <Header as='h1'>peppita-gui</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Route path="/create-project" component={CreateProject}/>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}

export default App;
