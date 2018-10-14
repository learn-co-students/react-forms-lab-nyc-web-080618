import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
   console.log(this);
    this.state = {
      username:"",
      password:""
    };
  }

  handleChange=(e)=>{

    this.setState({...this.state,[e.target.name]:e.target.value})
  }



  handleSubmit=(e)=>{
    e.preventDefault()
    if (this.state.username && this.state.password) {

      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" onChange={this.handleChange} type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" onChange={this.handleChange} type="password" value={this.state.password}/>
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
