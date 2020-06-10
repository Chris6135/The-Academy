import React from 'react';
import { withRouter } from "react-router-dom";
import {Link} from "react-router-dom"


 class NewLesson extends React.Component{
    constructor(props){
        super(props)
    }

    
    componentDidMount(){
        let payload = {type: "newLesson", lock: true}
       this.props.openModal(payload)
    }
    

    listSteps(){
        const dummyArr = [1]
        return dummyArr.map((num) =>{
               return (

                <div className="title-body-box">
                    <div className="step-edit-icon">icon</div>

                    <div className="step-edit-div">
                        
                        <div className="step-edit-title">Step {num}: dummy</div>
                        <div className="step-edit-body"> dummy </div>    
                    </div>
                        <div className="step-edit-delete"><button >delete</button></div>
                </div>
           )})
        }

    render() {
            return( 


                <div className="parent-box">
                    <div className = "step-box">
                        <div className="edit-header-box">
                                <div className= "image-add-box"></div>
                                <div className="util-box">
                                    <div className="left-util">
                                    <button >Delete This Lesson</button>
                                    </div>
                                    <div className="right-util"></div>
                                </div>
                        </div>

                        <div className="step-info">
                                <div className="title-body-box">
                                      {this.listSteps()}
                                </div>
                        </div>
                        <button className="create-step">createStep</button>             
                    </div>
                </div>
                )
    } 
}


export default withRouter(NewLesson);