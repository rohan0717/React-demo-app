import React from "react";
import classes from "./pageLink.module.css";
import { NavLink } from "react-router-dom";

const PageLinks = (props) => {
  const pageLinks = [
    { name: "Home", link: "#" },
    { name: "Terms and Condition", link: "#" },
    { name: "Privacy Policy", link: "#" },
    { name: "Collection Statement", link: "#" },
    { name: "Help", link: "#" },
    { name: "Manage Account", link: "#" },
  ];
  return (
    <div className={classes.PageLinks}>
      {pageLinks.map((page, index) => {
        return (
          <span key={page.name} className={classes.Span}>
            <NavLink className={classes.Link} to={page.link}>
              {page.name}
            </NavLink>{" "}
            {pageLinks.length - 1 === index ? "" : "|"}
          </span>
        );
      })}
    </div>
  );
};

export default PageLinks;
