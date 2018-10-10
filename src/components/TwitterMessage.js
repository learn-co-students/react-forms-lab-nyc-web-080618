import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      maxChars: props.maxChars,
      counter: 140
    };
  }

  handleChange = (e) => {
    const remaining = this.state.maxChars - e.target.value.length
    this.setState({
      value:e.target.value,
      counter: remaining
    })
    console.log(this.state)
  }

  render() {
    return (<div>
      <strong>Your message:({this.state.maxChars})</strong>
      <input onChange={this.handleChange} type="text" value={this.state.value}/>
      <p>Remaining:{this.state.counter}</p>
    </div>);
  }
}

export default TwitterMessage;
