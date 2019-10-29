import React, { Component } from 'react'
import SongsList from '../components/SongsList'

class ChartContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      top20: {}
    }
  }

  componentDidMount() {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(res => res.json())
      .then(data =>
        this.setState({ top20: data }))
      .catch(err => console.error)

  }

  render() {
    return (
      <div>
        <h2>This is the container</h2>
        <SongsList songs={this.state.top20} />
      </div>
    )
  }

}

export default ChartContainer
