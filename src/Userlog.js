import React, { Component } from "react";
import Login from "./Login";
import Profile from "./Profile";
import "./styles.css";

class Userlog extends Component {
  render() {
    if (this.props.status) {
      /*Logged in */
      return (
        <Profile
          fullname={this.props.fullname}
          username={this.props.username}
          handleLogout={this.props.handleLogout}
        />
      );
    } else {
      return (
        <Login /*Not logged in */
          fullname={this.props.fullname}
          username={this.props.username}
          loadNewUser={this.props.handleSubmit}
          addNewUser={this.props.addNewUser}
        />
      );
    }
  }
}

export default Userlog;
