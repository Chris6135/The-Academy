import React from 'react';
import {Link} from "react-router-dom"
import { withRouter } from "react-router-dom";


//lessson currently breaks on refres because when refreshing all steps and lessons are cleared from the sate. 
//should tlak to josh about this. possible bootstrap. 


// import { withRouter } from "react-router-dom";

 class StepEditPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title: '',
            body: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

        componentDidMount(){
            // this.props.fetchSingleStep(this.props.match.params.id)
            this.setState({
                title: this.props.step.title, 
                body: this.props.step.body})
            
            if(this.props.state !== undefined){
                console.log("Mount Check")


            }
        }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }

      handleSubmit(e) {
        e.preventDefault();
        const step = Object.assign({},this.props.step, this.state);
        this.props.updateStep(step);
      }
    

    render() {
        console.log(this.props)

        if (this.props.step === undefined){
            return (
            <div>no step</div>)
        } 
        let backLink = `/lesson/edit/${this.props.lesson.id}`
        let draftLink = `/lesson/show/draft/${this.props.lesson.id}`
        let publishLink = `/lesson/publish/${this.props.lesson.id}`


        return(
        // <div className="step-edit-container">

           
            <div className="parent-box">
                    <div className = "step-box-edit">
                        <div className="edit-header-box">
                                <div className= "image-add-box"></div>
                                <div className="util-box">
                                    <div className="left-util">
                                    {/* <button onClick={()=> this.handleDelete()}>Delete This Lesson</button> */}
                                    <Link to={backLink}>Back to Lesson</Link>                                        
                                    </div>
                                    <div className="right-util">
                                       <Link to={draftLink}>See Preview</Link>      
                                       <button  type="submit" form ="edit-step">save! </button>                                  
                                        <Link to={publishLink} id="publish-button">Publish Lesson</Link>
                                        </div>
                                </div>
                        </div>

                    <div className="form-holder">


                        <form onSubmit={this.handleSubmit} 
                        className="step-edit-form"
                        id= "edit-step">
                            <div className="photo-bar"></div>

                            <label classame>
                                <input type="text"
                                placeholder="   Type your Title"
                                value={this.state.title}
                                onChange={this.update('title')}
                                className="step-title-input"/>
                            </label>
                                <label>
                                    <textarea  
                                            rows="4" 
                                            cols="50"
                                            value={this.state.body}
                                            onChange={this.update('body')}
                                            className="step-body-input">
                                    </textarea>
                              </label>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(StepEditPage);

