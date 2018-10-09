import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={event => this.handleInputChange(event)}/>
        <p>{this.props.maxChars - this.state.value.length} chars remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
