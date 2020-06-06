import React, { Component } from "react";
import axios from "axios";
import Tile from "../../components/Tile/Tile";
import classes from "./seriesPage.module.css";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class SeriesPage extends Component {
  state = {
    series: [],
    loading: true,
  };
  componentDidMount() {
    this.props.onChange("Series");
    axios
      .get(
        "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
      )
      .then((response) => {
        const series = response.data.entries.filter(
          (content) =>
            content.programType === "series" && content.releaseYear >= 2010
        );
        const sortedSeries = series.sort((a, b) => {
          if (a.title === b.title) return 0;
          else if (a.title < b.title) return 1;
          else return -1;
        });
        const finalList = sortedSeries.slice(0, 21);
        console.log(finalList);

        this.setState({
          series: finalList,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const seriesList = this.state.series.map((series, id) => {
      return (
        <Tile
          key={id}
          src={series.images["Poster Art"].url}
          title={series.title}
          width="12.6%"
        />
      );
    });

    return (
      <div className={classes.SeriesPage}>
        {this.state.loading ? <h2>Loading...</h2> : seriesList}
      </div>
    );
  }
}

export default withErrorHandler(SeriesPage, axios);
