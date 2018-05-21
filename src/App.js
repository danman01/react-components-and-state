import React, { Component } from 'react';
import Movie from './Movie'
import FilterButton from './FilterButton'
// import './App.css';

class App extends Component {
  constructor (props) {
    super()

    this.state = {
      filter: {
        liked: false
      },
      movies: [
      { id: 1,
        liked: false
      },
      { id: 2,
        liked: false
      }
    ]}

    this.toggleLiked = this.toggleLiked.bind(this)
    this.onFilterButtonClick = this.onFilterButtonClick.bind(this)
  }

  findMovieById (id, state){
    return state.movies.find(function(eachMovie) { return eachMovie.id === id })
  }

  toggleLiked (likeButtonMovie) {
    const id = parseInt(likeButtonMovie.target.dataset.id)
    
    let state = Object.assign({}, this.state)
    const mov = this.findMovieById(id, state)
    mov.liked = !mov.liked
    this.setState({state})
  }

  onFilterButtonClick() {
    let state = Object.assign({}, this.state)

    state.filter.liked = !state.filter.liked

    this.setState({
      state
    })
  }

  render() {

    const movie = {
      id: 1,
      display: true,
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
    movie.liked = this.findMovieById(movie.id, this.state).liked

    const movie2 = {
      id: 2,
      display: true,
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
    movie2.liked = this.findMovieById(movie2.id, this.state).liked

    // filter based on liked
    if (this.state.filter.liked) {
      movie.display = movie.liked
      movie2.display = movie2.liked
    }

    const movies = [
      movie,
      movie2
    ]

    const movie_jsx = movies.map((movie, i) => {
      return <Movie display={movie.display} id={movie.id} liked={movie.liked} toggleLiked={this.toggleLiked} key={i} title={movie.title} director={movie.director} actors={movie.actors} /> 
    })

    return (
      <div>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous" />
        <FilterButton text={this.state.filter.liked ? 'Currently filtering by Liked' : 'Filter by Liked'} onClick={this.onFilterButtonClick} />
        {movie_jsx}
      </div>
    );

  }
}

export default App;
