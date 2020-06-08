import React from 'react';
import { withRouter } from "react-router-dom";

 class LessonShow extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            trigger: true,
            stepCount: 0
        }

        this.createStep = this.createStep.bind(this)
        this.deleteStep = this.deleteStep.bind(this)
    }

    
    componentDidMount(){
        this.props.requestLesson(this.props.match.params.lessonId);
        this.props.fetchLessonSteps(this.props.match.params.lessonId)
    }
    
    // flipTrigger(){
    //     if(this.state.trigger){
    //         this.setState({trigger: false})
    //     }else{
    //     this.setState({trigger: true})
    //     }

    // }
    createStep(){
        this.props.createStep(this.props.lesson.id)
        const newStep = this.state.stepCount += 1
        this.setState({setCount: newStep})
    }

    deleteStep(fullStep){
        this.props.deleteStep(fullStep)

    }

    listSteps(){
        console.log('listSteps')
        return(
        Object.keys(this.props.steps).map((id)=> {
            const step = this.props.steps[id].title
            const fullStep = this.props.steps[id]
            const num =this.props.lesson.stepIds.indexOf(parseInt([id])) + 1
            return ( <div>
                <li key={[id]}>Step {num}:{step}</li>
                <button onClick={()=>{this.deleteStep(fullStep)}}>delete</button>
                </div>)
        }))
    }

    render() {
        console.log('render lesson')
        // console.log('state')
        // console.log(this.state)
        console.log(this.props)
        // console.log(this.props.fetchLessonSteps(9999))

   
    
        if (!this.props.lesson){
            return (
            <div>no load</div>)
        }

        return( 
            <div> dummy
                <ol>
                    <li>{this.props.lesson.title}</li>
                    {this.listSteps()}
                </ol>

                <button onClick={()=>{this.createStep()}}>createStep</button>
                
            </div>
        )
    }
    

    
}


export default withRouter(LessonShow);