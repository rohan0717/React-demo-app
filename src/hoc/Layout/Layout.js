import React, { Component, Fragment } from "react";
import classes from "./layout.module.css";
import Header from "../../containers/Header/Header";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header page={this.props.page} />
        <div className={classes.Content}>{this.props.children}</div>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
