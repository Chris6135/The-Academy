import React from 'react';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorClass: 'hidden'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
    this.clear = this.clear.bind(this)
    

  }


componentDidMount(){
    if(this.state.errorClass !== 'hidden' ){
      this.setState({errorClass:'hidden'})
    }
  } 

  componentWillUnmount(){
    this.props.clearErrors()
    this.props.fetchCategories()
  }

  componentDidUpdate(){
    if(this.state.errorClass !== 'hidden' ){
          setTimeout( ()=> {this.clearBubs()}, 3000)
        }
    }
  


  demoLogin(e){
    e.preventDefault();
    const demo = {username:"Demo", password: "LemonWedge"}

    this.props.processForm(demo)
  }


  update(field) 
  {
    // this.clear() //for some reason this stops the error from rendering. dont quite know why. 
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.state.errorClass = "input-error"

  }

  renderErrors() {
  
    if ((this.state.username !== '') && (this.state.password !== ''))
    {
      return(
        <ul className="error-message">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }else{
      this.clear()
    }
  }

  stringErrors(){
    const errors = this.props.errors.map((error) =>{
      return error
    })
    return errors
  }


  ifError(field, string){
   if(field === ''){
     return <div className={this.state.errorClass}>
          <div className="error-bubble"> 
              {string} 
          </div>
       </div>
    }
  }


  clear(){
    this.props.clearErrors()
  }

  clearBubs(){
    this.setState({errorClass:'hidden'})
  }

  render() {

    return (
      <div className="signin-form-container">
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          <div className="signin-form">
          <div className="demo-submit" value="Login"  onClick={this.demoLogin}> Demo Login</div>

        <div className="demo-line">
            <div />
            <span>OR</span>
            <div />
          </div>
          
            <label className="signin-username">
            {this.ifError(this.state.username, "Please type your username")}
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
                className="signin-input"
                />
            </label>
       
            <label className="signin-password">
            {this.ifError(this.state.password, "Please type your password")}
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="signin-input"
                />
            </label>
            
              <div className="error-container" >{this.renderErrors()}</div>
              
            <button className="session-submit" type="submit" value="Login">Login</button>
               <p>Not enrolled? Feel free to <span className="sign-up-link">{this.props.navLink} >> </span></p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;