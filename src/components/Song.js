import React, { Component } from 'react'

class Song extends Component {

  render() {
    if (!this.props.song) return null;
    return (
      <React.Fragment>
        <p>Song name:</p>
      </React.Fragment>
    )
  }


}

export default Song
