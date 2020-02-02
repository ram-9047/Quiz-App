import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.user);
    return (
      <>
        <h1> Profile </h1>
        {this.props.user.user.isAdmin ? (
          <div>
            <h2>{this.props.user.user.username}</h2>
            <span>Admin</span>
          </div>
        ) : (
          <div>
            <h2>{this.props.user.user.username}</h2>
            <span>User</span>
          </div>
        )}
      </>
    );
  }
}

export default Profile;
