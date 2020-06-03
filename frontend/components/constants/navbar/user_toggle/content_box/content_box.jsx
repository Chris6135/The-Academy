import React from "react";

class ContentBox extends React.Component {
    constructor(props){
        super(props);

        this.state = {menu: "hidden"}
        this.handleOutsideClick = this.handleOutsideClick.bind(this)
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick);
      }
    
      componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
      }

      handleOutsideClick(e){
          //{menu:"user-icon-dropdown"}
        
        if(this.icon.contains(e.target)){
            console.log("icon click")
            this.setState({menu:"user-icon-dropdown"})
        }else{
          this.setState({menu:"hidden"})
        }
      }

    render(){
        console.log("content box render")
        return(
        <div ref= {node=> this.icon=node} className="user-icon" ><div className="fas fa-user-graduate"></div>
            <div ref={node=> this.node=node} className={this.state.menu}> 
            <div className="user-icon-dropdown-user-catagories">
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            <button className="logout-button" onClick={this.props.logout}>Log Out</button>
            </div>
        </div>
     </div>
        )
    }
}

export default ContentBox