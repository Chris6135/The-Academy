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

          {this.renderErrors()}

          <div className="signup-form">
            <label>
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
                />
            </label>
            <label>
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                />
            </label>
            <label>
              <input type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                />
            </label>

            <div className="signup-options">
              <label>
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

          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
