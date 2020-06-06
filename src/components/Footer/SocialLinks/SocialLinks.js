import React from "react";
import facebook from "../../../assets/Icons/facebook.png";
import twitter from "../../../assets/Icons/twitter.png";
import instagram from "../../../assets/Icons/instagram.png";
import classes from "./socialLinks.module.css";

const SocialLinks = (props) => {
  let icon;
  return (
    <div className={classes.SocialLinks}>
      {props.icons.map((i) => {
        if (i === "fb") icon = facebook;
        else if (i === "twitter") icon = twitter;
        else if (i === "instagram") icon = instagram;
        return (
          <img key={icon} src={icon} alt="icon" className={classes.Icon} />
        );
      })}
    </div>
  );
};

export default SocialLinks;
