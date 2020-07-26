import React from "react";
import { Link } from 'react-router-dom';


class ContentBox extends React.Component {
    constructor(props){
        super(props);

        this.state = {menu: "hidden"}
        this.clicker = this.clicker.bind(this)
        this.leave = this.leave.bind(this)
        this.outerRef = React.createRef()
    }

      clicker(e){
        this.setState({menu:"user-icon-dropdown"})
      }

      leave(e){
        this.setState({menu:"hidden"})
      }
      setBlurListener(ref, callback) {
        return event => {
          const relatedTarget = event.relatedTarget;
          const node = ref.current;
          if (node !== relatedTarget && !node.contains(relatedTarget)){
            callback();
          }
        };
      }

    render(){
      console.log(this.props)
      let pic 
      if(this.props.currentUser === undefined){
        return null
      }
      else if(this.props.currentUser.photo_url === undefined){
        pic =  <div className="fas fa-user-graduate" />
      }else{
        pic = <img src={this.props.currentUser.photo_url} className="photo-circle"></img>
      }
        return(
        <div
          ref = {this.outerRef}
          onFocus= {this.clicker} 
          onBlur={this.setBlurListener(this.outerRef,this.leave)} 
          className="user-icon" 
          tabIndex="0">

          {pic}

              <div className = {this.state.menu} > 
                <div className="user-icon-dropdown-user-catagories">
                    <ol className="dropdown-category">
                        <li>dummy</li>
                        <li>dummy</li>
                        <li>dummy</li>
                        <li>dummy</li>


                    </ol>

                    <div className = "lower-div">
                      <div className="lower-div-links">
                      <Link to="/user/show">Published Lessons</Link>

                        <Link to="/user/drafts">Drafts</Link>
                      </div>
                    <Link to="/lesson/new" className="new-lesson">New Lesson</Link>
                    </div>
                <button className="logout-button" onClick={this.props.logOut} >Log Out</button>
              </div>
          </div>
     </div>
        )
    }
}

export default ContentBox