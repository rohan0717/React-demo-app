import React, { Component } from "react";
import classes from "./App.module.css";
import Layout from "./hoc/Layout/Layout";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./containers/HomePage/HomePage";
import MoviesPage from "./containers/MoviesPage/MoviesPage";
import SeriesPage from "./containers/SeriesPage/SeriesPage";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout page={this.props.currentPage}>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/movies"
            exact
            render={() => {
              return <MoviesPage onChange={this.props.onPageChange} />;
            }}
          />
          <Route
            path="/series"
            exact
            render={() => {
              return <SeriesPage onChange={this.props.onPageChange} />;
            }}
          />
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
  };
};

const mapDispatchToProps = (dispatch, res) => {
  return {
    onPageChange: (res) =>
      dispatch({
        type: "PAGECHANGE",
        page: res,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
