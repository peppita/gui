import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'

import ProjectTypeSelection from '../containers/ProjectTypeSelection';

class ProjectForm extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' />
        </Form.Field>
        <Form.Field>
          <label>Type</label>
          <ProjectTypeSelection/>
        </Form.Field>
        <Button primary>Save Project</Button>
    </Form>
    );
  }
}

export default ProjectForm;
