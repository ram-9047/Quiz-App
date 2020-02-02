import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLogOut = () => {
    localStorage.clear();
    this.props.isLoggedIn = false;
  };
  render() {
    console.log(this.props.isLoggedIn);
    return this.props.isLoggedIn ? (
      <>
        <h1> Profile </h1>
        {this.props.user.user.isAdmin ? (
          <div>
            <h2>{this.props.user.user.username}</h2>
            <span>Admin</span>
            <Link to="/admin/signin">
              <button onClick={this.handleLogOut}>Log Out</button>
            </Link>
          </div>
        ) : (
          <div>
            <h2>{this.props.user.user.username}</h2>
            <span>User</span>
            <Link to="/user/signin">
              <button onClick={this.handleLogOut}>Log Out</button>
            </Link>
          </div>
        )}
      </>
    ) : (
      ""
    );
  }
}

export default Profile;
