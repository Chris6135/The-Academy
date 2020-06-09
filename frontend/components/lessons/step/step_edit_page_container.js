import React from 'react';
import StepEdit from './step_edit_page'
import { connect } from 'react-redux';
import { fetchSingleStep,updateStep} from "../../../actions/lessons/step_actions"


const mapStateToProps = (state,ownProps) => {
  const step = state.entities.steps[ownProps.match.params.id];

  return {
    step: step

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleStep: (id => dispatch(fetchSingleStep(id))),
    updateStep: (step => dispatch(updateStep(step)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepEdit);