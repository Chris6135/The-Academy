import React from 'react';
import { withRouter } from "react-router-dom";

 class LessonShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
    this.props.requestLesson(this.props.match.params.lessonId);
    // console.log(this.props.requestLesson)
    // console.log('steps')
    // this.props.fetchLessonSteps(this.props.match.params.lessonId)
    //  console.log(lorrie)
    }


    render() {
        console.log('state')
        console.log(this.state)
        console.log(this.props)
        console.log(this.props.fetchLessonSteps(9999))

   
    
        if (!this.props.lesson){
            return (
            <div>no load</div>)
        }

        return( 
            <div>

            </div>
        )
    }
    

    
}


export default withRouter(LessonShow);