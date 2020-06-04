import React from 'react';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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