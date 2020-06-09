import React from 'react';
import {Link} from "react-router-dom"
import { withRouter } from "react-router-dom";


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
            console.log(this.props)
            this.props.fetchSingleStep(this.props.match.params.id)
            
            if(this.props.state !== undefined){
                this.setState({
                    title: this.props.step.title, 
                    body: this.props.step.body})


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
        console.log(step)
        this.props.updateStep(step);
      }
    

    render() {

        if (this.props.step === undefined){
            console.log("gate1")
            return (
            <div>no step</div>)
        } 

        return(
        <div className="step-edit-container">

            <div className = "form-header">
            <div className="image-bar"></div>
            <div className="edit-toolbar">
                <div className ="utility-buttons">
                </div>
                <div className = "submit-buttons">
                    <button className="session-submit" type="submit" form ="edit-step">save! </button>
                </div>

            </div>

            </div>

            <form onSubmit={this.handleSubmit} 
            className="step-edit-form"
            id= "edit-step">

                <label>
                        <input type="text"
                        placeholder="Type your Title"
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
        )
    }
}


export default withRouter(StepEditPage);

