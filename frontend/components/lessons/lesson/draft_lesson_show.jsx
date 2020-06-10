import React from 'react'

class LessonDraftShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.requestLesson(this.props.match.params.lessonId)
    }


     renderSteps(){
        return this.props.steps.map((step) =>{
            const stepNum = this.props.steps.indexOf(step) + 1
            const key = `${this.props.lesson.title}-step-${stepNum}`
            let titleDef = ""
            if(step.title){
                titleDef = step.title
            }
               return (
                    <div key={key} className="step-container">
                        <div className="step-title"> Step {stepNum}: {titleDef} </div>
                        <div className="photo-box"> picture here</div>
                        <div className="step-body"> {step.body} </div>
                    </div>
                  )
            }
        )
    }


    render(){
        console.log("show")
        console.log(this.props)
        if(!this.props.steps){
            return null
        }

        return(
            <div className="parent-box">
                <div className="lesson-container">

                    <div className="lesson-header">
                        <div className="lesson-title">
                            {this.props.lesson.title}
                        </div>
                        <div className="lesson-info">
                            <div className="authorInfo">By {this.props.author.username}</div>
                        </div>
                    </div>

                {this.renderSteps()}
                </div>
            </div>
        )
    }

    
}

export default LessonDraftShow