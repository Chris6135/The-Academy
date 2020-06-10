import React from 'react'

class PublishLesson extends React.Component{
    constructor(props){

        super(props)


        this.state = {
            title: this.props.lessson.title,
            category: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }

    render(){
        return(
            <div>

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
            </div>
        )
    }
}


export default (PublishLesson)