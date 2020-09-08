import React from "react";
// import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
import MoviePage from "./MoviePages";
import { API_URL, API_KEY_3 } from "../utils/api";
//import classNames from "../utils/classNames";

// UI = fn(state, props)

// App = new React.Component()

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      page: 1,
      totalPages: 0
    };
  }

  componentDidMount() {
    console.log("didMount");
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log("prev", prevProps, prevState);
    //console.log("this", this.props, this.state);
    if (
      prevState.sort_by !== this.state.sort_by ||
      prevState.page !== this.state.page
    ) {
      this.getMovies();
    }
  }

  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("fetch", data);
        this.setState({
          movies: data.results,
          totalPages: data.total_pages
        });
      });
  };

  deleteMovie = (movie) => {
    const updateMovies = this.state.movies.filter(
      (item) => item.id !== movie.id
    );

    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = (movie) => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.push(movie);

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  deleteMovieFromWillWatch = (movie) => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(
      (item) => item.id !== movie.id
    );

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  updateSortBy = (value) => {
    this.setState({
      sort_by: value
    });
  };

  changePage = (value) => {
    this.setState({
      page: this.state.page + value
    });
  };

  render() {
    //console.log("render", this);
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className="row mb-4">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-4" key={movie.id}>
                    <MovieItem
                      data={movie}
                      deleteMovie={this.deleteMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      deleteMovieFromWillWatch={this.deleteMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
            <div className="row mb-4">
              <div className="col-md-6 offset-md-3">
                <MoviePage
                  page={this.state.page}
                  totalPages={this.state.totalPages}
                  changePage={this.changePage}
                />
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
            <ul className="list-group">
              {this.state.moviesWillWatch.map((movie) => (
                <li key={movie.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
