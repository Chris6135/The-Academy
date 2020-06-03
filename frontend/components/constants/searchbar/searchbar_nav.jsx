import React from 'react';

export default (props) => {
    return (<nav className = "searchbar-nav"> 

    <span className ="left-searchbar-nav"> 
    <div id="nav-logo">the academy</div> 
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