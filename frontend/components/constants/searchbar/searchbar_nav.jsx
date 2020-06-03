import React from 'react';
import {Link} from "react-router-dom"


export default (props) => {
    return (<nav className = "searchbar-nav"> 

    <span className ="left-searchbar-nav"> 
    <Link className="nav-logo-link" to="/">the academy </Link> 
    <div className="search-nav-buttons">button1 </div>
    <div className="search-nav-buttons">button2 </div>
    </span>

    <span className ="right-searchbar-nav">
    <div className="search-nav-buttons">link1 </div>
    <div className="search-nav-buttons">link2 </div>
    <div className="search-nav-buttons">link3 </div>
    <div className="search-bar">search bar dummy</div>
    </span>
    

    </nav>)
} 