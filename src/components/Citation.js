import React from 'react'

class Citation extends React.Component {
  render() {
    return (
      <p>
        {this.props.details.citation}
        <span>~ {this.props.details.author}</span>
      </p>
    )
  }
}

export default Citation
