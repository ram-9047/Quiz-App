import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../../stylesheets/dashboard.css";

class adminDashboard extends React.Component {
  state = {
    quizzes: null,
    score: null
  };

  getQuiz = () => {
    fetch("http://localhost:3000/api/v1/quiz")
      .then(res => res.json())
      .then(quiz => {
        if (quiz.success) {
          this.setState({ quizzes: quiz.quiz });
        }
      });
  };

  componentDidMount() {
    this.getQuiz();
  }

  deleteQuiz = id => {
    fetch(`http://localhost:3000/api/v1/quiz/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(quiz => {
        if (quiz.success) {
          this.getQuiz();
          this.props.history.push("/admin/dashboard");
        }
      });
  };

  correctAnswer = (event, option, answer) => {
    if (option == answer) {
      event.target.parentElement.className = "disable";
      this.setState({ score: ++this.state.score });
    }
  };

  render() {
    console.log(this.props.isAdmin);
    return (
      <>
        <div className="flex dashboard">
          <span>Quiz App</span>
          <span>Score : {this.state.score}</span>
          <nav className="nav-bar">
            {this.props.isAdmin ? (
              <Link to="/create-quiz">Create Quiz</Link>
            ) : (
              ""
            )}

            <Link to="/profile">Profile</Link>
          </nav>
        </div>
        <div className="question-list">
          <h3>List of Questions</h3>
          {this.state.quizzes &&
            this.state.quizzes.map(quiz => (
              <div>
                <div className="question-box">
                  <p>{quiz.question}</p>
                  <span
                    onClick={e =>
                      this.correctAnswer(e, quiz.options.a, quiz.correctAnswer)
                    }
                  >
                    (a) {quiz.options.a}
                  </span>
                  <span
                    onClick={e =>
                      this.correctAnswer(e, quiz.options.b, quiz.correctAnswer)
                    }
                  >
                    (b) {quiz.options.b}
                  </span>
                  <span
                    onClick={e =>
                      this.correctAnswer(e, quiz.options.c, quiz.correctAnswer)
                    }
                  >
                    (c) {quiz.options.c}
                  </span>
                  <span
                    onClick={e =>
                      this.correctAnswer(e, quiz.options.d, quiz.correctAnswer)
                    }
                  >
                    (d) {quiz.options.d}
                  </span>
                  {this.props.isAdmin ? (
                    <>
                      <p>Correct Answer</p>
                      <span>{quiz.correctAnswer}</span>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                {this.props.isAdmin ? (
                  <div className="question-box-btn">
                    <Link to="/edit">
                      <button
                        className="edit-btn"
                        onClick={() => this.props.editQuiz(quiz._id)}
                      >
                        edit
                      </button>
                    </Link>
                    <button
                      className="edit-btn del-btn"
                      onClick={() => this.deleteQuiz(quiz._id)}
                    >
                      delete
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
        </div>
      </>
    );
  }
}
export default withRouter(adminDashboard);
