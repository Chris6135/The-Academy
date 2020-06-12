import React from 'react';
import {Link} from "react-router-dom"

class UserPublished extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getInfo(this.props.user.id)
    }


    renderDrafts(){
        if(Object.keys(this.props.lessons).length !== this.props.user.lessons.length){
            return (<p>loading</p>)
        }

        return this.props.user.lessons.map((lessonId) =>{
            const link = `/lesson/show/draft/${lessonId}`
            if(this.props.lessons[lessonId].published){
                return <Link className="draft-box" to={link}>
                        <div className="user-draft-photo"></div>
                        <div className="user-draft-name">
                            {this.props.lessons[lessonId].title}
                        </div>
                    </Link>
                }
        })
    }

    renderPublished(){
        if(Object.keys(this.props.lessons).length !== this.props.user.lessons.length){
            return (<p>loading</p>)
        }

        return this.props.user.lessons.map((lessonId) =>{
            const link = `/lesson/edit/${lessonId}`
            if(this.props.lessons[lessonId].published){
                return <Link className="draft-box" to={link}>
                        <div className="user-draft-photo"></div>
                        <div className="user-draft-name">
                            {this.props.lessons[lessonId].title}
                        </div>
                    </Link>
                }
        })
    }

    render(){
        debugger

        return(
            <div className= "page-container"> 
                <div className="user-header">
                    <div className="user-info-container">
                        <div className ="user-photo"> 
                            <div className="fas fa-user-graduate">

                            </div>
                        </div>
                        <div className= "user-info">
                            <div className= "username">{this.props.user.username}</div>
                            <div className="user-edit-buttons"></div>
                            <div className="user-timestamp">timestamp</div>
                         </div>
                    </div>
                    <div className="user-toolbar"></div>
                </div>
                <div className="user-draft-frame">
                    <div className="user-draft-container">
                    {this.renderDrafts()}     
                    </div>
                </div>
            </div>
                
            
        )
    }

}

export default UserPublished