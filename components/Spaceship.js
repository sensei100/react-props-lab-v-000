import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
    <div className="spaceship">
      <h1>Name: {this.props.name}</h1>
      <p>Speed: {this.props.speed}</p>
      <p>Has Rockets: {this.props.hasRockets ? 'Yes' : 'No'}</p>
      <p>Colors: {this.props.colors.join(', ')}</p>
    </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}