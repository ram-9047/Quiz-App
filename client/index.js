import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as BRouter, Route } from "react-router-dom";

import UserLogin from "./user/userLogin.js";
import UserSignup from "./user/userSignup.js";
import AdminLogin from "./admin/adminLogin.js";
import AdminSignup from "./admin/adminSignup.js";
import Quizzes from "./quiz/quiz.js";

class App extends React.Component {
  render() {
    return (
      <>
        <BRouter>
          <Route path="/user/sign-in" component={UserLogin} />
          <Route path="/user/sign-up" component={UserSignup} />
          <Route path="/admin/sign-in" component={AdminLogin} />
          <Route path="/admin/sign-up" component={AdminSignup} />
          <Route path="/quiz" component={Quizzes} />
        </BRouter>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
