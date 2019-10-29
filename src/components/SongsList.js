import React, { Component } from 'react'
import Song from './Song'

class SongsList extends Component {

  render() {
    const songsNodes = this.props.songs.map((song) => {
      return (
        <Song key={song["im:id"]} name={song["im:name"]} > Wooo </Song>
      )
    })

    return (
      <React.Fragment>
        <h3>This is the SongsList</h3>
        {songsNodes}
      </React.Fragment>
    )
  }
}



export default SongsList
