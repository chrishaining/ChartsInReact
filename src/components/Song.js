import React, { Component } from 'react'

class Song extends Component {

  render() {
    return (
      <React.Fragment>
        <p>Song name: {this.props.song["im:name"]}</p>
      </React.Fragment>
    )
  }


}

export default Song
