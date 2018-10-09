import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      remainChars: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      content: event.target.value,
      remainChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} name="content"  value={this.state.content}/>
        <p>{this.state.remainChars} Characters Remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
