import React, { Component } from 'react';
import Actor from './Actor'
import LikeButton from './LikeButton'
// import './App.css';



class Movie extends Component {
  constructor (props) {
    super()
  }


  render() {
    const actors = this.props.actors.map((actor, i) => {
      return <Actor key={i} name={actor.name} role={actor.role} />
    })

//    const button = movieLiked ? (
//      <LikeButton liked=true onClick={this.handleLike} />
//    ) : (
//      <likeButton liked=false

    const likeButton = <LikeButton id={this.props.id} onClick={this.props.toggleLiked} liked={this.props.liked} />

    return (
      <div className={'display-' + this.props.display}>
        <span>{this.props.id}</span>
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
