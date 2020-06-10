import React from 'react';
import NewLessonPage from './new_lesson_page'
import { connect } from 'react-redux';
import {openModal} from '../../../actions/util/modal_actions'


const mapStateToProps = (state) => {
  return {
      state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal)=> dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewLessonPage);