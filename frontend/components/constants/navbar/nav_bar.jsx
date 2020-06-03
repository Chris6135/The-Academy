import React from "react";
import {Link} from "react-router-dom"
import UserToggleContainer from"./user_toggle/user_toggle_container"

const navBar = (props)=>{
        return( 
            <nav className="nav-bar">
                <ol className="cat-nav">
                   <li> <Link to="/" className="home-button"> <i className="fas fa-university" /></Link></li>
                   <li>catagory</li>
                   <li>catacory</li>

                </ol>
                <span>
                    <UserToggleContainer/>
                </span>

            </nav>

        )
}

export default navBar