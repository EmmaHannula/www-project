import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div className="individualPost">
        <div className="postcontainer">
          <div className="row">
            <div className="divider"></div>
            <p className="author">{this.props.meta.author} </p>
            <p className="usernamepost">@{this.props.meta.username}</p>
            <p>{this.props.meta.blogPost}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
