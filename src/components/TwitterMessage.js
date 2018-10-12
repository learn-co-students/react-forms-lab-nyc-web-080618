import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:''};
  }

  saveEnteredTextToState = (event) => {
    let enteredText = event.target.value
    this.setState({value:enteredText})
    
  }

  remainingCharcters = () => {

  }

  render() {
    return (

      <div>
        <strong>Your message:</strong>
        <input value={this.state.value} onChange={this.saveEnteredTextToState} type="text" />
        <h4> Remaining Characters: {this.props.maxChars - this.state.value.length}</h4>
      </div>

    );
  }
}

export default TwitterMessage;
