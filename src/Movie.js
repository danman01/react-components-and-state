import React, { Component } from 'react';
import Actor from './Actor'
import LikeButton from './LikeButton'
// import './App.css';



class Movie extends Component {
  constructor (props) {
    super()

    this.state= { liked: false }
    this.toggleLiked = this.toggleLiked.bind(this)
}

  toggleLiked () {
    this.setState({liked: !this.state.liked})
  }

  render() {
    const actors = this.props.actors.map((actor, i) => {
      return <Actor key={i} name={actor.name} role={actor.role} />
    })

//    const button = movieLiked ? (
//      <LikeButton liked=true onClick={this.handleLike} />
//    ) : (
//      <likeButton liked=false

    const likeButton = <LikeButton onClick={this.toggleLiked} liked={this.state.liked} />

    return (
      <div>
        <span>{this.props.index}</span>
        <h1>
          {this.props.title}
        </h1>
        <p>Directed by {this.props.director}</p>
        <div>Starring: 
          {actors}
        </div>
        <div>
          {likeButton}
        </div>
      </div>
          
    );

  }
}

export default Movie;
