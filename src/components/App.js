import React from 'react';
import Citation from './Citation'
import citations from '../data/citations'

class App extends React.Component {

  state = {}

  componentWillMount() {
    this.genererCitation()
  }

  genererCitation = e => {
    const keyArray = Object.keys(citations)
    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)]
    if (this.state.citation === citations[randomKey].citation) {
      this.genererCitation()
      return
    }
    this.setState(citations[randomKey])
  }

  render() {
    return (
      <div class="citation">
        <Citation details={this.state} />
        <button class="btn btn-lg" onClick={e => this.genererCitation(e)} >Une autre citation !</button>
      </div>
    )
  }
}

export default App
