import React from "react";
import { Link } from 'react-router-dom';

class UserToggle extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const notLoggedIn = () =>{
            return (
                <nav className="login-signup">
                    <Link to="/signin">log in</Link>
                    <span> | </span>
                    <Link to="/signup">sign up</Link>
                </nav>
            )};

        const loggedIn = ()=>{
            return(
             <nav className ="user-icon">
                 <span>Hi {currentUser.username} this will eventually be your picture</span>
             </nav>   
            )}
        const loggedInRaw = this.props.currentUser //janky
        const loggedInToggle = !!loggedInRaw

        return loggedInToggle ? loggedIn() : notLoggedIn()
    }
}

export default UserToggle