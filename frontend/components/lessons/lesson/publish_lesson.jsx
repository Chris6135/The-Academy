import React from 'react'
import {Link} from 'react-router-dom'

class PublishLesson extends React.Component{
    constructor(props){

        
        super(props)
        
        this.state = {
            title: this.props.lesson.title,
            category: '',
            published: true
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
        const lesson = Object.assign({},this.props.lesson, this.state);
        this.props.updateLesson(lesson)
        .then(data => this.props.history.push(`/lesson/show/draft/${data.payload.lesson.id}`))

      
      }

    render(){
        let backLink = `/lesson/edit/${this.props.lesson.id}`
        return(
            <div className="parent-box">
                  <div className = "step-box-edit">
                        <div className="edit-header-box">
                        <div className="util-box">
                            <div className="left-util">
                            {/* <button onClick={()=> this.handleDelete()}>Delete This Lesson</button> */}
                            <Link to={backLink}>Back to Lesson</Link>     
                            </div>
                            <div className="right-util">
                               <button  type="submit" form ="edit-step" className = "publish">save! </button>                                  
                                {/* <div onClick={this.handleSubmit} id="publish-button">Publish Lesson</div> */} 
                                </div>
                        </div>
                </div>

            <div className="border-buffer">
                <div className="publish-form-holder">

                    <form onSubmit={this.handleSubmit} className="publish-submit">

                        <div className="title-container">
                            <div className="title-rename-label">title</div>
                                <input type="text" 
                                    placeholder={this.props.lesson.title}
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                    className="title-rename-input"
                                    />
                        </div>


                            <select 
                                onChange={this.update('category')}
                                className="signup-option">
                                    <option default hidden >Categories</option>
                                    {this.props.categories.map((category,i) =>{
                                        return( <option key = {i}> {category}</option>)
                                    })}
                            </select>

                            <button className="session-submit" onClick={this.handleSubmit}> publish! </button>
                    </form>
                </div>
            </div>
        </div>
     </div>)
    }
}


export default (PublishLesson)