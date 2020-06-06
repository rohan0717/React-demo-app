import React from "react";
import classes from "./tile.module.css";

const Tile = (props) => {
  let ht = "100%";
  if (props.width) ht = props.width;
  return (
    <div className={classes.Tile} style={{ width: ht }}>
      <img src={props.src} alt="Tile" className={classes.Image} />
      <p className={classes.Title}>{props.title}</p>
    </div>
  );
};

export default Tile;
