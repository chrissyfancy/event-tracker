import React from 'react';
import ReactDOM from 'react-dom'
import ChatApp from './../components/ChatApp';

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }

    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }

  usernameChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  render() {
    if (this.state.submitted) {
      return (
        <ChatApp username={this.state.username} />
      );
    }

    return (
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
        <h1>React Instant Chat</h1>
        <div>
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="Enter a username..."
            required />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ChatContainer.defaultProps = {
};

export default ChatContainer;
