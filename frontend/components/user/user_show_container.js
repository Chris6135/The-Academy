import React from 'react';
import UserShow from "./user_show"
import {connect} from "react-redux"
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
    //   steps: steps
  
    };
  };

  export default connect(mapStateToProps)(UserShow);