import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:""
    };
  }

  handleChange=(e)=>{
    this.setState({message:e.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>remaining characters:{this.props.maxChars-this.state.message.length}</p>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
