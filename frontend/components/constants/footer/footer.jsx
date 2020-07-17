import React from "react"
import {Link} from "react-router-dom"

export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.props.fetchCategories()

    }

    buildCategories(){
        if(this.props.categories !== {}){
           return  Object.keys(this.props.categories).map((id) =>{
               const keyS = `foot cat ${id}`
               const link = `/category/${id}`
                return(
                <Link to={link} className={this.props.categories[id].icon} key={keyS}>  {this.props.categories[id].title}<li></li> </Link>
                )
                })
            }

    }

    render(){
 
    return(
    <div className="footer-box">
        <div className="footer-logo"></div>
        <div className="footer-catagories"> 
            <h2 className="footer-title">Categories</h2>
            <ol>
                { this.buildCategories()}

            </ol>
        </div>
        {/* <div className ="footer-spacer-div" /> */}
        <div className="footer-about-me">
          <h2 className="footer-title">About me</h2>
          <ol>

                <li>Chris Simons</li>
                <li>Christopher.simons10@gmail.com</li>
                <li>(484) 802-6281</li>
            </ol>
        </div>

        <div className="footer-external-links">
            <h2 className="footer-title">Take a look!</h2>
                <ol>
                    <a className="fab fa-github-square" href=" https://github.com/Chris6135"></a>
                    <a className="fab fa-linkedin" href=" https://www.linkedin.com/in/christopher-simons-4184a6a0/"></a>
                    <a className="fa fa-angellist" href="https://angel.co/u/chris-simons-2"></a>
                    <a className="fa fa-user" href="https://chris6135.github.io/"></a>
                    <a className="fas fa-paper-plane" href="https://www.instructables.com/"></a>

                </ol>
        </div>
        


        <div className="footer-bar"></div>

    </div>)
    }
}

