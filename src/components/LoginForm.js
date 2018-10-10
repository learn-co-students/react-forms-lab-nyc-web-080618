import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      onSubmit:props.onSubmit
    };
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    debugger
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleChange} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleChange} id="password" name="password" type="password" value={this.state.password}/>
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
