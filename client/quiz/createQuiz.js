import React from "react";
import { withRouter } from "react-router-dom";
import "../../stylesheets/quiz.css";

class Quiz extends React.Component {
  state = {
    question: null,

    a: null,
    b: null,
    c: null,
    d: null,

    correctAnswer: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  createQuiz = event => {
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/quiz/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        question: this.state.question,
        options: {
          a: this.state.a,
          b: this.state.b,
          c: this.state.c,
          d: this.state.d
        },
        correctAnswer: this.state.correctAnswer
      })
    })
      .then(res => res.json())
      .then(quiz => {
        console.log(quiz);
        if (quiz.success) {
          this.props.history.push("/dashboard");
        }
      });
  };
  render() {
    return (
      <>
        <div className="quiz">
          <span>Create Quiz</span>
          <form onSubmit={this.createQuiz}>
            <input
              type="text"
              className="create-quiz-input"
              placeholder="Question"
              name="question"
              onChange={this.handleChange}
            ></input>
            <div>
              <input
                type="text"
                className="create-quiz-input"
                placeholder="Option (a)"
                name="a"
                onChange={this.handleChange}
              ></input>
              <input
                type="text"
                className="create-quiz-input"
                placeholder="Option (b)"
                name="b"
                onChange={this.handleChange}
              ></input>
              <input
                type="text"
                className="create-quiz-input"
                placeholder="Option (c)"
                name="c"
                onChange={this.handleChange}
              ></input>
              <input
                type="text"
                className="create-quiz-input"
                placeholder="Option (d)"
                name="d"
                onChange={this.handleChange}
              ></input>
            </div>
            <input
              type="text"
              className="create-quiz-input"
              placeholder="Correct Answer"
              name="correctAnswer"
              onChange={this.handleChange}
            ></input>
            <button type="submit">submit</button>
          </form>
        </div>
      </>
    );
  }
}
export default withRouter(Quiz);
