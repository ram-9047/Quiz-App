import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/adminDashboard.css";

class adminDashboard extends React.Component {
  state = {
    quizzes: null
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
          // this.props.history.push("/admin/dashboard");
        }
      });
  };

  render() {
    return (
      <>
        <div className="flex dashboard">
          <span>Quiz App</span>
          <nav className="nav-bar">
            <Link to="/create-quiz">Create Quiz</Link>
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
                  <span>(a) {quiz.options.a}</span>
                  <span>(b) {quiz.options.b}</span>
                  <span>(c) {quiz.options.c}</span>
                  <span>(d) {quiz.options.d}</span>
                  <p>Correct Answer</p>
                  <span>{quiz.correctAnswer}</span>
                </div>
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
              </div>
            ))}
        </div>
      </>
    );
  }
}
export default adminDashboard;
