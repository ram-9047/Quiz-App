import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../../stylesheets/LogIn.css";

class UserLogIn extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
  }

  handleChange = event => {
    console.log(event.target);
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSignIn = () => {
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    fetch("http://localhost:3000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          console.log(data);
          localStorage.setItem("token", data.token);
          this.props.getLoggedUser();
          this.props.history.push("/dashboard");
        }
      });
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="hero-section">
            <div className="intro-section">
              <div>{/* <h2>QuizApp</h2> */}</div>
              <h3>Welcome to Quiz App</h3>
              <p>A place to gain knowledge</p>
            </div>
            <div className="login-section">
              <h2>LogIn to your Account</h2>
              <Link to="/user/signup">
                <h3>Need an account</h3>
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
                  type="password"
                  placeholder="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="input"
                ></input>
              </div>
              <button className="login-btn" onClick={this.handleSignIn}>
                LogIn
              </button>
              <button className="forget-password-btn">Forget Password?</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserLogIn);
