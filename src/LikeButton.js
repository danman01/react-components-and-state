import React, { Component } from 'react'

class LikeButton extends Component {

  render() {

  const message = this.props.liked ? "You like this!" : "Like this"
  // const onClick = this.props.onClick.bind(this)
  return (

    <div>
      <button data-id={this.props.id} className="btn btn-primary" onClick={this.props.onClick}>
        {message}
      </button>
    </div>

  )

  }
}

export default LikeButton;
