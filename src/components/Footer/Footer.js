import React from "react";
import classes from "./footer.module.css";
import PageLinks from "./PageLinks/PageLinks";
import SocialLinks from "./SocialLinks/SocialLinks";
import StoreLinks from "./StoreLinks/StoreLinks";

const Footer = (props) => {
  return (
    <div className={classes.Footer}>
      <PageLinks />
      <div className={classes.CopyRight}>
        Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.
      </div>
      <div className={classes.ExternalLinks}>
        <SocialLinks icons={["fb", "twitter", "instagram"]} />
        <StoreLinks />
      </div>
    </div>
  );
};

export default Footer;
