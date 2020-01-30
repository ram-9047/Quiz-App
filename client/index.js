import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "../stylesheets/reset.css";

import Homepage from "./homepage/homepage.js";
import UserLogin from "./user/userLogin.js";
import UserSignup from "./user/userSignup.js";
import AdminLogin from "./admin/adminLogin.js";
import AdminSignup from "./admin/adminSignup.js";
import AdminDashboard from "./admin/adminDashboard.js";
import Quizzes from "./quiz/createQuiz.js";
import EditQuiz from "./quiz/editQuiz.js";

class App extends React.Component {
  state = {
    quiz_id: null
  };

  editQuiz = id => {
    this.setState({
      quiz_id: id
    });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/user/sign-in" component={UserLogin} />
            <Route path="/user/sign-up" component={UserSignup} />
            <Route path="/admin/sign-in" component={AdminLogin} />
            <Route path="/admin/sign-up" component={AdminSignup} />
            <Route path="/admin/dashboard">
              <AdminDashboard editQuiz={this.editQuiz} />
            </Route>
            <Route path="/create-quiz" component={Quizzes} />
            <Route path="/edit">
              <EditQuiz id={this.state.quiz_id} />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
