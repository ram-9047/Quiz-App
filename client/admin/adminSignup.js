import React from "react";
import { Link } from "react-router-dom";

class UserSignup extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "", username: "" };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSignUp = () => {
    let admin = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username
    };
    fetch("http://localhost:3000/api/v1/admin/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(admin)
    });
    // .then(res => res.json())
    // .then(resData => console.log(resData));
  };
  render() {
    return (
      <>
        <div>
          <div className="wrapper">
            <div className="hero-section">
              <div className="intro-section">
                <div>
                  <h2>Admin Panel</h2>
                </div>
                <h3>Welcome to Quiz App</h3>
                <p>A place to gain knowledge</p>
              </div>
              <div className="login-section">
                <h2>Signup</h2>
                <Link to="/admin/signin">
                  <h3>Already have an account</h3>
                </Link>
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="input"
                  ></input>
                </div>
                <div>
                  <i className="fas fa-lock"></i>
                  <input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    className="input"
                  ></input>
                </div>
                <div>
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className="input"
                  ></input>
                </div>
                <button className="login-btn" onClick={this.handleSignUp}>
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default UserSignup;
