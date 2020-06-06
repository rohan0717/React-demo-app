import React, { Component } from "react";
import classes from "./header.module.css";
import Button from "../../components/UI/Button/Button";

class Header extends Component {
  state = {
    status: "Log In",
    trial: false,
  };
  loginHandler = () => {
    const newStatus = this.state.status === "Log In" ? "Log Out" : "Log In";
    this.setState({
      status: newStatus,
    });
  };
  freeTrialHandler = () => {
    this.setState((state) => {
      return { trial: !state.trial };
    });
  };
  render() {
    return (
      <div className={classes.Header}>
        <div className={classes.Navbar}>
          <h3 className={classes.Logo}>Demo Streaming</h3>
          <div className={classes.NavItems}>
            <Button clicked={this.loginHandler} btnType="Transparent">
              {this.state.status}
            </Button>
            <Button clicked={this.freeTrialHandler} btnType="Black">
              {this.state.trial
                ? "Free Trial Ongoing"
                : "Start your free trial"}
            </Button>
          </div>
        </div>
        <div className={classes.Toolbar}>
          <p>Popular {this.props.page}</p>
        </div>
      </div>
    );
  }
}

export default Header;
