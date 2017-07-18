import React, { Component } from 'react'

class EventsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChannel: false
    }
    this.handleChannelSelection = this.handleChannelSelection.bind(this)
  }

  handleChannelSelection(channel) {
    this.setState({ selectedChannel: channel })
  }

  render() {
    return(
      <div>
        Events Container
      </div>
    )
  }
}

export default EventsContainer;
