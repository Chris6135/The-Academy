import React from 'react';
import { withRouter } from "react-router-dom";
import {Link} from "react-router-dom"


 class LessonEdit extends React.Component{
    constructor(props){
        super(props)

        this.createStep = this.createStep.bind(this)
        this.deleteStep = this.deleteStep.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
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
               return (

                                <div className="title-body-box">
                                    <div className="step-edit-icon">icon</div>

                                    <Link className="step-edit-link" to={link}>
                                        
                                        <div className="step-edit-title">Step {stepNum}: {titleDef}</div>
                                        <div className="step-edit-body"> {step.body} </div>    
                                    </Link>
                                       <div className="step-edit-delete"><button onClick={()=>{this.deleteStep(step)}}>delete</button></div>
                                </div>
           )})
        }


    handleDelete(){ //FIX
        this.props.history.push(`/`)
        this.props.destroyLesson(this.props.lesson)
    }

    render() {
    
        if (this.props.lesson === undefined){
            console.log("gate1")
            return (
            <div>no lesson</div>)
        }

        let draftLink = `/lesson/show/draft/${this.props.lesson.id}`

        

      
            return( 


                <div className="parent-box">
                    <div className = "step-box">
                        <div className="edit-header-box">
                                <div className= "image-add-box"></div>
                                <div className="util-box">
                                    <div className="left-util">
                                    <button onClick={()=> this.handleDelete()}>Delete This Lesson</button>
                                    </div>
                                    <div className="right-util"><Link to={draftLink}>See Preview</Link></div>
                                </div>
                        </div>

                        <div className="step-info">
                                <div className="title-body-box">
                                      {this.listSteps()}
                                </div>
                        </div>
                        <button className="create-step" onClick={()=>{this.createStep()}}>createStep</button>             
                    </div>
                </div>
                )
    } 
}


export default withRouter(LessonEdit);