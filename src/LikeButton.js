import React, { Component } from 'react'

class LikeButton extends Component {

  render() {

  const message = this.props.liked
  return (

    <div>
      <button onClick={this.props.onClick}>
        {{message}}
      </button>
    </div>

  )

  }
}

export default LikeButton;
