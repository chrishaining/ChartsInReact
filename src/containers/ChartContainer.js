import React, { Component } from 'react'
import SongsList from '../components/SongsList'

class ChartContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(results => results.json())
      .then(songs =>
        this.setState({ songs: songs }))
      .catch(err => console.error)

  }

  render() {
    return (
      <div>
        <h2>This is the container</h2>
        <SongsList songs />
      </div>
    )
  }

}

export default ChartContainer
