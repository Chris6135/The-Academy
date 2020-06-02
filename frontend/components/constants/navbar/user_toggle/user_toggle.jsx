import React from "react";
import { Link } from 'react-router-dom';

class UserToggle extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.currentUser)
        console.log("rendering user toggle")

        const notLoggedIn = () =>{
            return (
                <nav className="login-signup">
                    <Link to="/signin" className="nav-login">log in</Link>
                    <span id="nav-divider"> | </span>
                    <Link to="/signup"className="nav-signup">sign up</Link>
                </nav>
            )};

        const loggedIn = ()=>{
            return(
             <nav className ="user-icon">
                 <span>Hi {this.props.currentUser.username} this will eventually be your picture</span>
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