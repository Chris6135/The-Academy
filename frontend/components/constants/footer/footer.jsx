import React from "react"

export default (props)=>{
    return(
    <div className="footer-box">
        <div className="footer logo">placeholder. picture will go here</div>
        <div className="footer-catagories"> 
            <h2 className="footer-title">Catagories</h2>
            <ol>
                <div className="fas fa-exclamation-circle"><li>dummy</li> </div>
                <div className="fas fa-exclamation-circle"><li>dummy</li> </div>
                <div className="fas fa-exclamation-circle"><li>dummy</li> </div>
                <div className="fas fa-exclamation-circle"><li>dummy</li> </div>
                <div className="fas fa-exclamation-circle"><li>dummy</li> </div>

              
            </ol>
        </div>
        {/* <div className ="footer-spacer-div" /> */}
        <div className="footer-about-me">
          <h2 className="footer-title">About me</h2>
          <ol>

                <li>Hi I'm Chris</li>
                <li>I might change this</li>
                <li>might not</li>
            </ol>
        </div>

        <div className="footer-external-links">
            <h2 className="footer-title">Take a look!</h2>
                <ol>
                    <a className="fab fa-github-square" href=" https://github.com/Chris6135"></a>
                    <a className="fab fa-linkedin" href=" https://www.linkedin.com/in/christopher-simons-4184a6a0/"></a>
                    <a className="fas fa-paper-plane" href="https://www.instructables.com/"></a>
                </ol>
        </div>
        


        <div className="footer-bar"></div>

    </div>)
}