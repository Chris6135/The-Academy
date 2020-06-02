import React from "react";
import {Link} from "react-router-dom"
import UserToggleContainer from"./user_toggle/user_toggle_container"

const navBar = (props)=>{
        return( 
            <nav className="nav-bar">
                <span>
                    <Link to="/">home</Link>
                </span>
                <span>
                    <UserToggleContainer/>
                </span>

            </nav>

        )
}

export default navBar