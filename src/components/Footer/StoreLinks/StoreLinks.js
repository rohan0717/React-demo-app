import React from "react";
import classes from "./storeLinks.module.css";
import appStore from "../../../assets/StoreIcons/appstore.png";
import playStore from "../../../assets/StoreIcons/playstore.png";
import microsoft from "../../../assets/StoreIcons/microsoft.png";

const StoreLinks = (props) => {
  return (
    <div className={classes.StoreLinks}>
      <img src={appStore} alt="appstore" className={classes.Icon} />
      <img src={playStore} alt="playstore" className={classes.Icon} />
      <img src={microsoft} alt="microsoftstore" className={classes.Icon} />
    </div>
  );
};

export default StoreLinks;
