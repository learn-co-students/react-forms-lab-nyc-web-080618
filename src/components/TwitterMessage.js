import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingCha: this.props.maxChars,
      twittes: ""
    };
  }

  showRemaing = () => {
    const numberCount = (this.state.remainingCha - 1);
    this.setState({
      remainingCha: numberCount
    })
  }


  handleInput = (e) => {
    const twittesInput = e.target.value
    this.setState({
      twittes:twittesInput
    })
    this.showRemaing()
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.twittes} onChange={this.handleInput}/>
        <p>You have {this.state.remainingCha} remaining words</p>
      </div>
    );
  }
}

export default TwitterMessage;
