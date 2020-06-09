import React from 'react';
import { withRouter } from "react-router-dom";
import StepEditIndex from"./step/step_edit_index"

 class LessonEdit extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            trigger: false
        }

        this.createStep = this.createStep.bind(this)
        this.deleteStep = this.deleteStep.bind(this)
    }

    
    componentDidMount(){
       this.props.requestLesson(this.props.match.params.lessonId)
    }

//     componentDidUpdate(prevProps){
//         if (this.props.steps !== prevProps.steps) {
//             this.props.requestLesson(this.props.match.params.lessonId)
//          console.log('userId changed ');
//      }
//    }
    
    createStep(){
        this.props.createStep(this.props.lesson.id)
        console.log('click')
        let trig = this.state.trigger
        this.setState({trigger:!trig})
        console.log(this.state.trigger)
    }

    deleteStep(fullStep){
        this.props.deleteStep(fullStep)

    }

    // listSteps(){
    //     console.log('listSteps')
    //     console.log(this.props.steps)
    //        return this.props.steps.map((step) =>{
    //         if(step === undefined){
    //             return 7
    //         }
    //            return <div>
    //             <li>{step.id}</li>
    //             <button onClick={()=>{this.deleteStep(step)}}>delete</button>
    //             </div>
    //        })
    //     }


    render() {
        console.log('render lesson')
  
        console.log(this.props)
        console.log(this.state)
   
    
        if (this.props.lesson === undefined){
            console.log("gate1")
            return (
            <div>no lesson</div>)
        }
        
        let tired = "false"

        if(this.state.trigger){
            tired = "true"
        }
      
            return( 

                    <div> 
                        <ol>{this.props.lesson.title}
                            <li>{this.props.lesson.title}</li>
                            {/* {this.listSteps()} */}
                            <StepEditIndex props= {this.props}/>
                        </ol>

                        <button onClick={()=>{this.createStep()}}>createStep</button>
                        
                    </div>
                )
            }
    // }
    

    
}


export default withRouter(LessonEdit);