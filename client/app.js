import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

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

class App extends Component {
  state = {};

  render() {
    // console.log(this.props);
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/user/signin">
              <UserLogin getLoggedUser={this.getLoggedUser} />
            </Route>
            <Route path="/user/signup" component={UserSignup} />
            <Route path="/admin/signin">
              <AdminLogin getLoggedUser={this.getLoggedUser} />
            </Route>
            <Route path="/admin/signup" component={AdminSignup} />
            <Route path="/dashboard">
              <Dashboard
              // editQuiz={this.editQuiz}
              // isLoggedIn={this.state.isLoggedIn}
              // isAdmin={
              //   this.props.users &&
              //   this.props.users.user &&
              //   this.props.users.user.isAdmin
              // }
              />
            </Route>
            <Route
              path={"/create"}
              component={
                this.props.users &&
                this.props.users.user &&
                this.props.users.user.isAdmin
                  ? Quizzes
                  : null
              }
            />
            {this.props.users &&
            this.props.users.user &&
            this.props.users.user.isAdmin ? (
              <Route path="/edit/:id" component={EditQuiz} />
            ) : (
              ""
            )}
            <Route path="/profile">
              <Profile
                user={this.state.user}
                isLoggedIn={this.state.isLoggedIn}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return state;
}
export default connect(mapStateToProps)(App);
