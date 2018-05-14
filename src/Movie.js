import React, { Component } from 'react';
// import './App.css';

class Movie extends Component {
  render() {
    const movie = {
      title: 'Dumb and Dumberer'
    }
    return (
      <h1>
        {movie.title}
      </h1>
          
    );

  }
}

export default Movie;
