import React, { Component } from "react";
import Tile from "../../components/Tile/Tile";
import PopularTile from "../../assets/PopularTile.png";
import classes from "./homePage.module.css";
import { NavLink } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className={classes.HomePage}>
        <NavLink to="/movies" className={classes.Link}>
          <Tile src={PopularTile} title="Movies" />
        </NavLink>
        <NavLink to="/series" className={classes.Link}>
          <Tile src={PopularTile} title="Series" />
        </NavLink>
      </div>
    );
  }
}

export default HomePage;
