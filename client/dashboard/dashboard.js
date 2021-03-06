import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchQuizzes,
  getLoggedInUser,
  deleteOneQuestion,
  getOneQuestion
} from "../actions/index";
import "../../stylesheets/dashboard.css";

class adminDashboard extends React.Component {
  state = {
    score: null
  };

  componentDidMount() {
    this.props.dispatch(getLoggedInUser());
    this.props.dispatch(fetchQuizzes());
  }

  answer = (event, option, answer) => {
    if (option !== answer) {
      alert("Wrong answer");
    } else {
      alert("correct answer");
      event.target.parentElement.className = "disable";
      this.setState({ score: ++this.state.score });
    }
  };

  render() {
    // console.log(this.props, "MN");
    return this.props.users.isLoggedIn ? (
      <>
        <div className="flex dashboard">
          <span>Quiz App</span>
          <span>Score : {this.state.score}</span>
          <nav className="nav-bar">
            {this.props.users.user.isAdmin ? (
              <Link to="/create">Create Quiz</Link>
            ) : (
              ""
            )}

            <Link to="/profile">Profile</Link>
          </nav>
        </div>
        <div className="question-list">
          <h3>List of Questions</h3>
          {this.props.questions.quizzes &&
            this.props.questions.quizzes.quiz.map(quiz => (
              <div>
                <div className="question-box">
                  <p>{quiz.question}</p>
                  <span
                    onClick={e =>
                      this.answer(e, quiz.options.a, quiz.correctAnswer)
                    }
                  >
                    (a) {quiz.options.a}
                  </span>
                  <span
                    onClick={e =>
                      this.answer(e, quiz.options.b, quiz.correctAnswer)
                    }
                  >
                    (b) {quiz.options.b}
                  </span>
                  <span
                    onClick={e =>
                      this.answer(e, quiz.options.c, quiz.correctAnswer)
                    }
                  >
                    (c) {quiz.options.c}
                  </span>
                  <span
                    onClick={e =>
                      this.answer(e, quiz.options.d, quiz.correctAnswer)
                    }
                  >
                    (d) {quiz.options.d}
                  </span>
                  {this.props.users.user.isAdmin ? (
                    <>
                      <p>Correct Answer</p>
                      <span>{quiz.correctAnswer}</span>
                    </>
                  ) : (
                    ""
                  )}
                  {this.props.users.user.isAdmin ? (
                    <div className="question-box-btn">
                      <Link to={`/edit/${quiz._id}`}>
                        <button
                          className="edit-btn"
                          onClick={() =>
                            this.props.dispatch(getOneQuestion(quiz._id))
                          }
                        >
                          edit
                        </button>
                      </Link>
                      <button
                        className="edit-btn del-btn"
                        onClick={() =>
                          this.props.dispatch(
                            deleteOneQuestion(quiz._id, () => {
                              this.props.history.push("/dashboard");
                            })
                          )
                        }
                      >
                        delete
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
        </div>
      </>
    ) : (
      ""
    );
  }
}

function mapStateToProps(state) {
  console.log(state, "MSTP");
  return state;
}

export default connect(mapStateToProps)(withRouter(adminDashboard));
