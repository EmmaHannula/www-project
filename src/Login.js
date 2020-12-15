import React, { Component } from "react";
import "./styles.css";

class Login extends Component {
  render() {
    return (
      <div>
        <form id="logInForm" onSubmit={this.props.loadNewUser}>
          <label>
            Name:
            <input
              type="text"
              name="fullName"
              fullname={this.props.fullname}
              onChange={this.props.addNewUser}
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              name="userName"
              username={this.props.username}
              onChange={this.props.addNewUser}
            />
          </label>

          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
