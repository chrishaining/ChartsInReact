import React, { Component } from 'react'
import Song from './Song'

class SongsList extends Component {

  render() {

    return (
      <React.Fragment>
        <h1>{this.props.top20}</h1>
      </React.Fragment>
    )
  }

}

export default SongsList
// //
// render() {
//   const songsNodes = this.props.songs.feed.entry.map((song) => {
//     return (
//       <Song key={song['id']} name={song['im:name']} ></Song>
//     );
//   });

//   return (
//     <React.Fragment>
//       {songsNodes}
//     </React.Fragment>
//   )
// }

// }

