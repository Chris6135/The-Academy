import React from "react";

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
        console.log("content box render")
        console.log(this.props)
        return(
        <div
          ref = {this.outerRef}
          onFocus= {this.clicker} 
          onBlur={this.setBlurListener(this.outerRef,this.leave)} 
          className="user-icon" 
          tabIndex="0">
          <div className="fas fa-user-graduate" />

              <div className = {this.state.menu} > 
                <div className="user-icon-dropdown-user-catagories">
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                <button className="logout-button" onClick={this.props.logOut}>Log Out</button>
              </div>
          </div>
     </div>
        )
    }
}

export default ContentBox