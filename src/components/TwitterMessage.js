import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
  }

handleChange = (event) => {
  this.setState({
    value: event.target.value
  })
}

charsLeft = () => {
  return this.props.maxChars - ( this.state.value).length
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" value={this.state.value} />
        <p>Remaining Chars: {this.charsLeft()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
