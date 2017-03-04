import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';


class ProjectType extends Component {
  render() {
    return (
      <Dropdown placeholder="project types" search selection options={this.props.types} />
    );
  }
}

export default ProjectType;
