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
                    <Link to="/signin" className="nav-login">login</Link>
                    <span id="nav-divider"> | </span>
                    <Link to="/signup"className="nav-signup">sign up</Link>
                </nav>
            )};

        const loggedIn = ()=>{
            return(
             <nav className ="logged-in-nav">
                 <div className="user-name">{this.props.currentUser.username}</div>
                 <div className="user-icon"><div className="fas fa-user-graduate"></div></div>
                 <div className="user-icon-dropdown"> 
                    <div className="user-icon-dropdown-user-catagories">
                        <ol>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    <button className="logout-button" onClick={this.props.logout}>Log Out</button>
                    </div>
                 </div>
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