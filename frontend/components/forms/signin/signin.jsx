import React from 'react';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this)

  }

  //transition hieght 0 to hight

  componentWillUnmount(){
    console.log("unmount")
    console.log(this.props)
    this.props.clearErrors()
  }

  componentDidUpdate(){
    console.log("update")
  }


  demoLogin(e){
    e.preventDefault();
    const demo = {username:"Demo", password: "LemonWedge"}

    this.props.processForm(demo)
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul className="error-message">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signin-form-container">

        <form onSubmit={this.handleSubmit} className="signin-form-box">
          <div className="signin-form">
          <button className="demo-submit" type="submit" value="Login" onClick={this.demoLogin}> Demo Login</button>

        <div className="demo-line">
            <div />
            <span>OR</span>
            <div />
          </div>
          
            <label className="signin-username">
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
                className="signin-input"
                />
            </label>
       
            <label className="signin-password">
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="signin-input"
                />
            </label>
            
              <div >{this.renderErrors()}</div>
              
            <button className="session-submit" type="submit" value="Login">Login</button>
               <p>Not enrolled? Feel free to <span className="sign-up-link">{this.props.navLink} >> </span></p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;