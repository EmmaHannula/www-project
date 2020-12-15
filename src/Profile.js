import React, { Component } from "react";

/*When logged in, display user and log out button*/

class Profile extends Component {
  render() {
    return (
      <div className="profile-info">
        <h4>{this.props.fullname}</h4>
        <p>
          <span>@</span>
          {this.props.username}
        </p>
        <button id="logout" onClick={this.props.handleLogout}>
          Log Out
        </button>
        <div className="divider"></div>
      </div>
    );
  }
}

export default Profile;
