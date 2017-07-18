import React from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }

    this.sendHandler = this.sendHandler.bind(this);
  }

  componentDidMount() {
    App.room = App.cable.subscriptions.create("ChatChannel", {
      received: function(data) {
        this.sendHandler(data);
      },
      sendHandler: this.sendHandler
    })
  }

  sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      message
    };
    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="container">
        <h3>React Chat App</h3>
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }
}

ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;
