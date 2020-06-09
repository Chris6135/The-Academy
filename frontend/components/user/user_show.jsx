import React from 'react';
import {Link} from "react-router-dom"

class UserShow extends React.Component{
    constructor(props){
        super(props)
    }

    renderDrafts(){
        return this.props.user.lessons.map((lesson) =>{
            const link = `/lesson/edit/${lesson}`
            return <li><Link to={link}>{lesson}</Link></li>
        })

    }

    render(){
        console.log("userShow")
        console.log(this.props)
        return(
            <div> 
                <div>{this.props.user.username}</div>
                <div>{this.renderDrafts()}</div>
            </div>
        )
    }

}

export default UserShow