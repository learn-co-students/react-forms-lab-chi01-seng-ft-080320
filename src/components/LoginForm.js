import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "Your Username",
      password: "Your Password"
    };
  }

  changeUsername = e => {
    this.setState({
      username: e.target.value
    })
  }

  changePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

  submitAction = (e) => {
    e.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.submitAction}>
        <div>
          <label>
            Username
            <input onChange={this.changeUsername} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.changePassword} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
