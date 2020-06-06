import React from "react";
import classes from "./button.module.css";

const Button = (props) => {
  let btnClasses = [classes.Button];
  btnClasses.push(classes[props.btnType]);
  return (
    <button onClick={props.clicked} className={btnClasses.join(" ")}>
      {props.children}
    </button>
  );
};
export default Button;
