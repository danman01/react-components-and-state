import React, { Component } from 'react';
import Movie from './Movie'
// import './App.css';

class App extends Component {
  render() {
    const movie = {
      title: 'Dumb and Dumberer',
      director: 'Farley Bros',
      actors: [
        {
          name:'Jim Carrey',
          role: 'Lead Dummy'
        },
        {
          name: 'Jeff Daniels',
          role: 'Backup Dummy'
        }
      ]
    }
    const movie2 = {
      title: 'The Matrix',
      director: 'Kasowski Bros',
      actors: [
        {
          name: 'Neo',
          role: 'Lead magic guy'
        },
        {
          name: 'Morpheus',
          role: 'Lead mystical guy'
        }
      ]
    }

    const movies = [
      movie,
      movie2
    ]

    const movie_jsx = movies.map((movie, i) => {
        return <Movie index={i+1} key={i} title={movie.title} director={movie.director} actors={movie.actors} /> 
      })

    return (
      <div>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous" />
        {movie_jsx}
      </div>
    );

  }
}

export default App;
