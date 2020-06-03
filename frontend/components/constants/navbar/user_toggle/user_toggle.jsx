import React from "react";
import { Link } from 'react-router-dom';
import ContentBox from "./content_box/content_box"

class UserToggle extends React.Component {
    constructor(props){
        super(props);
    }


    render(){

        const notLoggedIn = () =>{
            return (
                <nav className="login-signup">
                    <Link to="/signin" className="nav-login">login</Link>
                    <span id="nav-divider"> | </span>
                    <Link to="/signup"className="nav-signup">sign up</Link>
                </nav>
            )};

        const loggedIn = ()=>{
            return(
             <nav className ="logged-in-nav">
                 <div className="user-name">{this.props.currentUser.username}</div>
                  <ContentBox/>
             </nav>   
            )}
     
        if(this.props.currentUser){
            console.log(this.props.currentUser)
            return  loggedIn() 
        }else{
            console.log(this.props.currentUser)
         return notLoggedIn()
        }
    }
}

export default UserToggle