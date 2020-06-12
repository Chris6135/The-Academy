import React from 'react';
import * as ListUtil from "../../../util/list_variables_util"

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      country: '',
      user_info: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
    this.clear = this.clear.bind(this)
  }

  
  componentWillUnmount(){
    this.props.clearErrors()
  }

  demoLogin(e){
    e.preventDefault();
    const demo = {username:"Demo", password: "LemonWedge"}

    this.props.demoForm(demo)
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

  stringErrors(){
    const errors = this.props.errors.map((error) =>{
      return error
    })
    return errors
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }



  //counter thought, put the timer on the submit. just factor in an extra second for load time. 

  ifError(error, string){
    const errors = this.stringErrors()

   if(errors.includes(error)){


    {setTimeout(this.clear, 3000)}
  
     return <div className="input-error">
          <div className="error-bubble"> 
              {string} 
          </div>
       </div>
    }
  }


  clear(){
    this.props.clearErrors()
  }


  render(){

    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">

          <div className="signup-form">
        <button className="demo-submit" type="submit" value="Login" onClick={this.demoLogin}> Demo Login</button>

            <div className="demo-line">
                <div />
                <span>OR</span>
                <div />
            </div>



            <label>
            {this.ifError("Email can't be blank", "Please enter your username")}
              <input type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                />
            </label>






            <label>
            {this.ifError("Username can't be blank", "Please type your username")}
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
                />
            </label>


            <label>
            {this.ifError("Password is too short (minimum is 6 characters)", "Please type your password")}
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                />
            </label>

            <div className="signup-options">


              <label>
            {this.ifError("User info can't be blank", "About You")} 
                <select 
                    onChange={this.update('user_info')}
                    className="signup-option"
                    id="user-info-option">
                        <option default hidden >About you</option>
                        {ListUtil.aboutYou.map((age,i) =>{
                            return( <option key = {i}> {age}</option>)
                        })}
                   </select>
              </label>


              <label>
              {this.ifError("Country can't be blank", "Country")}
                <select 
                  onChange={this.update('country')}
                  className="signup-option"
                  id="country-option">
                      <option default hidden >Country</option>
                      {ListUtil.countryList.map((country,i) =>{
                          return( <option key = {i} className="country"> {country} </option>)
                      })}
                  </select>
              </label>
            </div>
            <p>By clicking "Sign Me Up" you agree to look over my 
              <a className="sign-up-link" href=" https://www.linkedin.com/in/christopher-simons-4184a6a0/"> Resume </a> 
              and consider me for 
              <a className="sign-up-link" href=" https://github.com/Chris6135"> Employment </a></p>
            <button className="session-submit" type="submit" value={this.props.formType}>Sign Me Up! </button>
            <p>Already enrolled? <span className="sign-up-link">{this.props.navLink} >> </span></p>

            {/* {this.renderErrors()} */}

          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
