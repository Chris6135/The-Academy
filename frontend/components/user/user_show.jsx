import React from 'react';
import {Link} from "react-router-dom"

class UserShow extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getInfo(this.props.user.id)
    }


    renderDrafts(){
        console.log(Object.keys(this.props.lessons).length)
        console.log(this.props.user.lessons.length)

        if(Object.keys(this.props.lessons).length !== this.props.user.lessons.length){
            return (<p>loading</p>)
        }

        return this.props.user.lessons.map((lessonId) =>{
            const link = `/lesson/edit/${lessonId}`
            return <Link className="draft-box" to={link}>
                    <div className="user-draft-photo"></div>
                    <div className="user-draft-name">
                        {this.props.lessons[lessonId].title}
                    </div>
                </Link>
        })

    }

    render(){
        console.log("userShow")
        console.log(this.props)
        return(
            <div className= "page-container"> 
                <div className="user-header">
                    <div className="user-info-container">
                        <div className ="user-photo"></div>
                        <div className= "user-info">
                            <div className= "username">{this.props.user.username}</div>
                            <div className="user-edit-buttons"></div>
                            <div className="user-timestamp"></div>
                         </div>
                    </div>
                    <div className="user-toolbar"></div>
                </div>
                <div className="user-draft-container">
                   {this.renderDrafts()}     
                </div>
            </div>
                
            
        )
    }

}

export default UserShow