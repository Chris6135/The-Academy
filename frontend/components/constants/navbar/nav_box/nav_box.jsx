import React from "react";
import {Link} from "react-router-dom"

const NavBox = (props)=>{
    return( 

        <section className="nav-box"> 
        <span>
            <ul className="nav-box-links">
                <li className="nav-box-link">dummy</li>
                <li className="nav-box-link">dummy</li>
                <li className="nav-box-link">dummy</li>
                <li className="nav-box-link">dummy</li>
            </ul>
        </span>

            <span className="logout-button-span">
                <button className="logout-button" onClick={props.logout}>Log Out</button>
            </span>
        </section>

    )
}

export default NavBox