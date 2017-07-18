import React from 'react';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatInput: ''
    }

    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    let payload = JSON.stringify({
      message: this.state.message
    });
    fetch('/api/v1/messages.json', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload
    })
    .then((response) => {
      let { ok } = response;
      if (ok) {
        return response.json();
      }
    })
    .then((data) => {
      this.setState({ chatInput: '' });
      this.props.onSend(this.state.chatInput);
    })
  }

  textChangeHandler(event)  {
    this.setState({ chatInput: event.target.value });
  }

  render() {
    return (
      <form className="chat-input" onSubmit={this.submitHandler}>
        <input type="text"
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder="Write a message..."
          required />
      </form>
    );
  }
}

ChatInput.defaultProps = {
};

export default ChatInput;
