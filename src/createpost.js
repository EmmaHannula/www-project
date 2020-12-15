import React, { Component } from "react";

class createpost extends Component {
  addNewPost(e) {
    e.preventDefault();
    var post = {
      blogPost: this.blogPost.value,
      author: this.props.author,
      username: this.props.username
    };

    if (post.blogPost.length > 250) {
      alert("Post is too long! (Limit 250)");
      return;
    }
    this.props.addPost(post);
    this.blogPost.value = "";
    this.blogPost.placeholder = "What's happening? (limit 250)";
  }

  render() {
    return (
      <form onSubmit={(e) => this.addNewPost(e)}>
        <p>
          <textarea
            ref={(input) => (this.blogPost = input)}
            placeholder="What's happening? (limit 250)"
          ></textarea>
          <br />
          <button type="Submit">Post</button>
        </p>
      </form>
    );
  }
}

export default createpost;
