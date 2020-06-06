import React, { Component } from "react";
import axios from "axios";
import Tile from "../../components/Tile/Tile";
import classes from "./moviesPage.module.css";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class MoviesPage extends Component {
  state = {
    movies: [],
    loading: true,
  };
  componentDidMount() {
    this.props.onChange("Movies");
    axios
      .get(
        "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
      )
      .then((response) => {
        const movies = response.data.entries.filter(
          (content) =>
            content.programType === "movie" && content.releaseYear >= 2010
        );
        const sortedMovies = movies.sort((a, b) => {
          if (a.title === b.title) return 0;
          else if (a.title < b.title) return 1;
          else return -1;
        });
        const finalList = sortedMovies.slice(0, 21);
        // console.log(finalList);
        this.setState({
          movies: finalList,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const movieList = this.state.movies.map((movie, id) => {
      return (
        <Tile
          key={id}
          src={movie.images["Poster Art"].url}
          title={movie.title}
          width="12.6%"
        />
      );
    });

    return (
      <div className={classes.MoviesPage}>
        {this.state.loading ? <h2>Loading...</h2> : movieList}
      </div>
    );
  }
}

export default withErrorHandler(MoviesPage, axios);
