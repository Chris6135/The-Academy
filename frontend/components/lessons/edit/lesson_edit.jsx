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
    
    createStep(){
        this.props.createStep(this.props.lesson.id)
    }

    deleteStep(fullStep){
        this.props.deleteStep(fullStep)

    }

    listSteps(){
     
           return this.props.steps.map((step) =>{
            if(step === undefined){

                return <h1>something went wrong</h1>
            }
            const key = `draft ${step.id}`

            const stepNum = this.props.steps.indexOf(step) + 1
            let titleDef = "(click-to-edit)"
            const link = `/step/${step.id}`
            if(step.title){
                titleDef = step.title
            }
               return (

                                <div className="title-body-box" key={key}>
                                    <div className="step-edit-icon"></div>

                                    <Link className="step-edit-link" to={link}>
                                        
                                        <div className="step-edit-title">Step {stepNum}: {titleDef}</div>
                                        <div className="step-edit-body"> {step.body} </div>    
                                    </Link>
                                       <div id="step-edit-delete" ><button className="fas fa-times" onClick={()=>{this.deleteStep(step)}}></button></div>
                                </div>
           )})
        }


    handleDelete(){ //FIX
        this.props.history.push(`/`)
        this.props.destroyLesson(this.props.lesson)
    }

    render() {
        if (this.props.lesson === undefined){
            return (
            <div>no lesson</div>)
        }

        let draftLink = `/lesson/show/draft/${this.props.lesson.id}`
        let publishLink = `/lesson/publish/${this.props.lesson.id}`


            return( 


                <div className="parent-box">
                    <div className = "step-box">
                        <div className="edit-header-box">
                                <div className= "image-add-box"></div>
                                <div className="util-box">
                                    <div className="left-util">
                                    <button onClick={()=> this.handleDelete()}>Delete This Lesson</button>
                                    </div>
                                    <div className="right-util">
                                       <Link to={draftLink}>See Preview</Link>                                        
                                        <Link to={publishLink} id="publish-button">Publish Lesson</Link>
                                        </div>
                                </div>
                        </div>

                        <div className="step-info">
                                <div className="title-body-box">
                                      {this.listSteps()}
                                </div>
                        </div>
                        <button className="create-step" onClick={()=>{this.createStep()}}>Add Step</button>             
                    </div>
                </div>
                )
    } 
}


export default withRouter(LessonEdit);