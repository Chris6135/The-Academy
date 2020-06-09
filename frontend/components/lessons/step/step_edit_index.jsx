import React from 'react';
import { withRouter } from "react-router-dom";

 class StepEditIndex extends React.Component{
    constructor(props){
        super(props)
    }

    
    componentDidMount(){
       this.props.props.requestLesson(this.props.props.match.params.lessonId)
    }

//     componentDidUpdate(prevProps){
//         // const {steps, requestLesson} = this.props

//         if (this.props.props.steps !== prevProps.props.steps) {
//             this.props.props.requestLesson(this.props.props.match.params.lessonId)
//          console.log('userId changed ');
//      }
//    }

    listSteps(){
        // const {steps} = this.props
           return this.props.props.steps.map((step) =>{
            if(this.props.props.step === undefined){
                return 7
            }
               return <div>
                <li>{step.id}</li>
                <button onClick={()=>{this.deleteStep(step)}}>delete</button>
                </div>
           })
        }


    render() {
        console.log('deep render')
        console.log(this.props)
    if (this.props.props.lesson === undefined){
        console.log("gate1")
        return (
        <div>no lesson</div>)
    }

        return( 

                <div> 
                    <ol>
                        {this.listSteps()}
                    </ol>
                </div>
            )
        }
}


export default withRouter(StepEditIndex);

