import React from 'react';
import { withRouter } from "react-router-dom";
import StepEditIndex from"./step/step_edit_index"
import {Link} from "react-router-dom"


 class LessonEdit extends React.Component{
    constructor(props){
        super(props)

        this.createStep = this.createStep.bind(this)
        this.deleteStep = this.deleteStep.bind(this)
    }

    
    componentDidMount(){
       this.props.requestLesson(this.props.match.params.lessonId)
    }

//     componentDidUpdate(prevProps){
//         if (this.props.steps !== prevProps.steps) {
//             // this.props.requestLesson(this.props.match.params.lessonId)
//          console.log('userId changed ');
//      }
//    }
    
    createStep(){
        this.props.createStep(this.props.lesson.id)
    }

    deleteStep(fullStep){
        this.props.deleteStep(fullStep)

    }

    listSteps(){
        console.log('listSteps')
        console.log(this.props.steps)
           return this.props.steps.map((step) =>{
            if(step === undefined){
                return 7
            }
            const stepNum = this.props.steps.indexOf(step) + 1
            let titleDef = "(click-to-edit)"
            const link = `/step/${step.id}`
            if(step.title){
                titleDef = step.title
            }
               return <div className = "step-box">
                   <div className="image drag box"></div>
                   <div className="step-info">
                        <div>icon</div>
                        <div className="title-body-box">
                            <Link to={link}>
                                <div className="step-edit-title">Step {stepNum}: {titleDef}</div>
                                <div className="step-edit-body"></div>    
                            </Link>
                        </div>
                        <div className="step-edit-delete"><button onClick={()=>{this.deleteStep(step)}}>delete</button></div>
                   </div>
                </div>
           })
        }


    render() {
        console.log('render lesson')
  
        console.log(this.props)
        console.log(this.state)
   
    
        if (this.props.lesson === undefined){
            console.log("gate1")
            return (
            <div>no lesson</div>)
        }
        

      
            return( 

                    <div> 
                        <ol>{this.props.lesson.title}
                            <li>{this.props.lesson.title}</li>
                            {this.listSteps()}
                            {/* <StepEditIndex props= {this.props}/> */}
                        </ol>

                        <button onClick={()=>{this.createStep()}}>createStep</button>
                        
                    </div>
                )
    } 
}


export default withRouter(LessonEdit);