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
      user_info: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <ul>
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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          Sign Up
          <br/>
          {this.renderErrors()}
          <div className="signup-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
                />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                />
            </label>
            <br/>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                />
            </label>
            <br/>
            <label>user_info:
            <select 
                onChange={this.update('user_info')}
                className="signup-input">
                    <option default hidden >About you</option>
                    {ListUtil.aboutYou.map((age,i) =>{
                        return( <option key = {i}> {age}</option>)
                    })}
                </select>
            </label>
            <br/>
            <label>country:
              <select 
                onChange={this.update('country')}
                className="signup-input">
                    <option default hidden >Choose your country</option>
                    {ListUtil.countryList.map((country,i) =>{
                        return( <option key = {i} className="country"> {country} </option>)
                    })}
                </select>
            </label>
            <br/>
                {this.props.navLink}
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
