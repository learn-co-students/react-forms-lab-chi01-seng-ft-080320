import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      characters: props.maxChars
    };
  }

  handleChange = (e) => {
    let message = e.target.value
    let length = message.length
    this.setState(prevState => {
      if(prevState.characters > 0 && prevState.characters - length > 0){
        return {
          message: message, 
          characters: prevState.characters - length
        }
      }
      //update state when removing characters!

    });
  
  }

  render() {
    console.log(this.state.characters)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange ={this.handleChange} value={this.state.message}/>
        <h1>{this.state.characters}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
