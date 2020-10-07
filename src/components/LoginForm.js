import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '', 
      password: ''
    };
  }

  handleInputChange = (e) =>{
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // let [username, password] = this.state
    let {username, password} = this.state
    if(username.length >0 && password.length > 0){
      this.props.handleLogin(this.state)
    }
  

  }


  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username}
            onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password}
            onChange={this.handleInputChange}/>
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
