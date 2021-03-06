import React from "react";
import {Link} from "react-router-dom"
import UserToggleContainer from"./user_toggle/user_toggle_container"


export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.props.fetchCategories()

    }

    buildCategories(){
        if(this.props.categories !== {}){
           return  Object.keys(this.props.categories).map((id) =>{
            const link = `/category/${id}`
            const keyN = `nav key ${id}`
                return(
                <Link key={keyN} to={link}>{this.props.categories[id].title}</Link>
                )
                })
            }

    }


    render(){
        return( 
            <nav className="nav-bar">
                <ol className="cat-nav">
                <li> <Link to="/" className="home-button"> <i className="fas fa-university" /></Link></li>
               {this.buildCategories()}

                </ol>
                <span>
                    <UserToggleContainer/>
                </span>

            </nav>

        )
    }
}


