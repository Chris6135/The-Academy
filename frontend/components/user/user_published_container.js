import React from 'react';
import UserPublished from "./user_published"
import {connect} from "react-redux"
import {getInfo} from "../../actions/session/session_actions"
const mapStateToProps = (state,ownProps) => {
    const user = state.entities.users[state.session.id];
    let steps = []
    // if(user){
    //   lessons = user.lessons.map((lessonId)=> {
    //        return state.entities.steps[stepId]
    //   })
    // }
  
    return {
      user : user,
      lessons: state.entities.lessons
    //   steps: steps
  
    };
  };


  const mapDispatchToProps = dispatch => {
    return {
      getInfo: (id => dispatch(getInfo(id))),
    };
  };
  export default connect(mapStateToProps,mapDispatchToProps)(UserPublished);