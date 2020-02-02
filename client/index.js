import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "../stylesheets/reset.css";

import Homepage from "./homepage/homepage.js";
import UserLogin from "./user/userLogin.js";
import UserSignup from "./user/userSignup.js";
import AdminLogin from "./admin/adminLogin.js";
import AdminSignup from "./admin/adminSignup.js";
import Dashboard from "./dashboard/dashboard.js";
import Quizzes from "./quiz/createQuiz.js";
import EditQuiz from "./quiz/editQuiz.js";
import Profile from "./profile/profile.js";

class App extends React.Component {
  state = {
    quiz_id: null,
    user: null
  };

  editQuiz = id => {
    this.setState({
      quiz_id: id
    });
  };

  getLoggedUser = () => {
    fetch("http://localhost:3000/api/v1/dashboard", {
      headers: {
        "content-type": "application/json",
        authorization: localStorage.token
      }
    })
      .then(res => res.json())
      .then(user => {
        if (user.success) {
          this.setState({ user });
        }
      });
  };

  componentDidMount() {
    this.getLoggedUser();
  }

  render() {
    console.log(this.state.user);
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/user/sign-in">
              <UserLogin getLoggedUser={this.getLoggedUser} />
            </Route>
            <Route path="/user/sign-up" component={UserSignup} />
            <Route path="/admin/sign-in">
              <AdminLogin getLoggedUser={this.getLoggedUser} />
            </Route>
            <Route path="/admin/sign-up" component={AdminSignup} />
            <Route path="/dashboard">
              <Dashboard
                editQuiz={this.editQuiz}
                isAdmin={this.state.user && this.state.user.user.isAdmin}
              />
            </Route>
            <Route
              path={"/create-quiz"}
              component={
                this.state.user && this.state.user.user.isAdmin ? Quizzes : ""
              }
            />
            <Route path="/edit">
              {this.state.user && this.state.user.user.isAdmin ? (
                <EditQuiz id={this.state.quiz_id} />
              ) : (
                ""
              )}
            </Route>
            <Route path="/profile">
              <Profile user={this.state.user} />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
