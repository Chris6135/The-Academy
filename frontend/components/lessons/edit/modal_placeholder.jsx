import React from 'react';
import { Redirect } from 'react-router-dom'
import { withRouter } from "react-router-dom";



 class modalPlaceholder extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            title: '',
            author_id: this.props.state.session.id
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }


    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }

      handleSubmit(e) {
        e.preventDefault();
        const lesson = Object.assign({}, this.state);
   

        this.props
        .createLesson(lesson)
        .then(data => this.props.history.push(`/lesson/edit/${data.payload.lesson.id}`))
        .then(this.props.closeModal())
        // .then(this.setRedirect(`/lesson/edit/${data.payload.lesson.id}`))
    }
    
    

    render(){
 
        return(
            <div className="modal-container">

                <div className="modal-header"><p>Share your knowledge with the world!</p></div>

                    <label className="modal-splash"><p> Im teaching a lesson called</p> </label>
                <form onSubmit={this.handleSubmit} className="modal-form-container">

                        <input
                            type="text"
                            className="modal-input"
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                        <button className="modal-submit" >Submit Lesson</button>
                </form>
            </div>
        )
    }
}

export default withRouter(modalPlaceholder);