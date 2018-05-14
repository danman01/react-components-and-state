import React, { Component } from 'react';
import Actor from './Actor'
// import './App.css';

class Movie extends Component {
  render() {
    const actors = this.props.actors.map((actor, i) => {
      return <Actor key={i} name={actor.name} role={actor.role} />
    })
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
      </div>
          
    );

  }
}

export default Movie;
