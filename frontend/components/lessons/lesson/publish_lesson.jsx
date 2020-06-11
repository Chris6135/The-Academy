import React from 'react'

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
        this.props.updateLesson(lesson);
      
      }

    render(){
        return(
            <div>

        <form onSubmit={this.handleSubmit} >

            <label>
              <input type="text"
                placeholder={this.props.lesson.title}
                value={this.state.title}
                onChange={this.update('title')}
                className="signup-input"
                />
            </label>


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
        )
    }
}


export default (PublishLesson)