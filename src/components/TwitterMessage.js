import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.maxChars = props.maxChars
    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.onChangeMessage} value={this.state.message}/>
        Remaining Characters: {140 - this.state.message.length}
      </div>
    );
  }
  onChangeMessage = (event) => {
    if (this.state.message.length < this.maxChars) {
      this.setState({
        message: event.target.value
      })
    }

  }
}

export default TwitterMessage;
