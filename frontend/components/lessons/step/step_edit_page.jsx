// import React from 'react';
// import { withRouter } from "react-router-dom";

//  class StepEditIndex extends React.Component{
//     constructor(props){
//         super(props)
//     }

    
//     componentDidMount(){
//        this.props.props.requestLesson(this.props.props.match.params.lessonId)
//     }

//     componentDidUpdate(prevProps){
//         // const {steps, requestLesson} = this.props

//         if (this.props.props.steps !== prevProps.props.steps) {
//             requestLesson(this.props.props.match.params.lessonId)
//          console.log('userId changed ');
//      }
//    }

//     listSteps(){
//         // const {steps} = this.props
//         console.log('listSteps')
//         console.log(steps)
//            return this.props.props.steps.map((step) =>{
//             if(this.props.props.step === undefined){
//                 return 7
//             }
//                return <div>
//                 <li>{step.id}</li>
//                 <button onClick={()=>{this.deleteStep(step)}}>delete</button>
//                 </div>
//            })
//         }


//     render() {
//     if (this.props.lesson === undefined){
//         console.log("gate1")
//         return (
//         <div>no lesson</div>)
//     }

//         return( 

//                 <div> 
//                     <ol>
//                         {this.listSteps()}
//                     </ol>
//                     <button onClick={()=>{this.createStep()}}>createStep</button>
//                 </div>
//             )
//         }
// }


// export default withRouter(StepEditIndex);

