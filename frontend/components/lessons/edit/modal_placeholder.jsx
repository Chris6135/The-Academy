import React from 'react';
import { Redirect } from 'react-router-dom'


export default class modalPlaceholder extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            title: '',
            author_id: this.props.state.session.id
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        console.log("subimt")
        console.log(this.props)
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
            <div>

                <h1>placeholder</h1>
                <form onSubmit={this.handleSubmit}>
                <label> Please Enter Title 
                    <input type="text"
                    value={this.state.title}
                    onChange={this.update('title')}
                    />
                     </label>
                     <button >submit</button>
                     </form>
            </div>
        )
    }
}