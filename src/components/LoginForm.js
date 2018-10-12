import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

updateUserName = (event) => {
  const updatedUsername = event.target.value
  this.setState({username:updatedUsername})
}

updatePassword = (event) => {

  const updatedPassword = event.target.value
  this.setState({password:updatedPassword})
}

handleSubmit = (event) => {
  event.preventDefault()
  // const enteredUsername = this.state.username
  // const enteredPassword = this.state.password
  //

  if(this.state.username !== '' && this.state.password !== ''){
    {this.props.onSubmit(this.state)}
  }
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.updateUserName} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.updatePassword} id="password" name="password" type="password" />
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
