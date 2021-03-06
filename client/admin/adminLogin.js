import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getLoggedInUser } from "../actions/index";
import "../../stylesheets/LogIn.css";

class AdminLogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleChange = event => {
    // console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSignIn = () => {
    if (!this.state.email.includes("@")) {
      alert("email is invalid");
    } else {
      let admin = {
        email: this.state.email,
        password: this.state.password
      };
      fetch("http://localhost:3000/api/v1/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(admin)
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            localStorage.setItem("token", data.authToken);
            this.props.dispatch(getLoggedInUser());
            this.props.history.push("/dashboard");
          }
        });
    }
  };

  render() {
    // console.log(this.props);
    return (
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
              <h2>LogIn to your Account</h2>
              <Link to="/admin/signup">
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

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(withRouter(AdminLogIn));
