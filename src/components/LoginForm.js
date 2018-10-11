import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.username !== "" && this.state.password !== ""){
      this.props.onSubmit(this.state)
    }
  }


  render() {
    return (
      <form  onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
            <input onChange={this.handleInput} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleInput} id="password" name="password" type="password" value={this.state.password}/>
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
