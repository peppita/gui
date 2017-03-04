import { connect } from 'react-redux';

import ProjectType from '../components/ProjectType';

const mapStateToProps = (state) => {
  return {
    // dummy types for basic ui
    types:[
      {value: 'sh', text: 'shell command'},
      {value: 'filter', text: 'filter'},
      {value: 'api', text: 'api-call'},
    ]
  };
};

const ProjectTypeSelection = connect(
  mapStateToProps
)(ProjectType);

export default ProjectTypeSelection;
