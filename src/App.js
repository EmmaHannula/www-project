import React, { Component } from "react";
import "./styles.css";
import Userlog from "./Userlog";
import { initialUser } from "./Users.js";
import Createpost from "./createpost.js";
import { initialPosts } from "./examples.js";
import Post from "./post.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: initialPosts,
      user: initialUser,
      isLoggedIn: false
    };

    this.addNewUser = this.addNewUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.addPostToPostList = this.addPostToPostList.bind(this);
  }

  addPostToPostList(post) {
    if (this.state.isLoggedIn === false) {
      alert("Log in first!");
      return;
    }
    var newPost = {};
    var ts = Date.now();
    newPost["post" + ts] = post;
    var currentPosts = { ...this.state.posts };
    var newPosts = Object.assign(currentPosts, newPost);
    this.setState({ posts: newPosts });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false
    });
  }

  addNewUser(event) {
    const user = this.state.user;
    const value = event.target.value;
    const name = event.target.name;
    user[name] = value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Microblog</h1>
        </header>
        <div className="divider" />
        <div className="container">
          <div className="row">
            <div id="userinfo" className="col s5 push-s7">
              <Userlog
                status={this.state.isLoggedIn}
                fullname={this.state.user.fullName}
                username={this.state.user.userName}
                handleLogout={this.handleLogout}
                handleSubmit={this.handleSubmit}
                addNewUser={this.addNewUser}
              />
            </div>
            <div className="col s7 pull-s5">
              <div className="content">
                <Createpost
                  addPost={this.addPostToPostList}
                  author={this.state.user.fullName}
                  username={this.state.user.userName}
                />
                <div className="postList">
                  {Object.keys(this.state.posts)
                    .map((key) => (
                      <Post key={key} meta={this.state.posts[key]} />
                    ))
                    .reverse()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
