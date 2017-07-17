import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom'
import ChatContainer from './ChatContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ChatContainer />
    );
  }
}

export default App;
