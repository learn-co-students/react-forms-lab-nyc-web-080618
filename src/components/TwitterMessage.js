import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remainingChars: this.props.maxChars
    };
  }

  handleChange(event){
    this.setState({
      message: event.target.value,
      remainingChars: (this.props.maxChars - event.target.value.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange.bind(this)} />
        <p>{this.state.remainingChars} Characters Remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
