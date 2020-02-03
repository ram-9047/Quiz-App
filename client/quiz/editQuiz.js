import React from "react";
import { withRouter } from "react-router-dom";
import "../../stylesheets/quiz.css";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleQuiz: [],
      question: null,
      a: null,
      b: null,
      c: null,
      d: null,
      correctAnswer: null
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/quiz/${this.props.question._id}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(quiz => {
        this.setState({
          question: quiz.question,
          a: quiz.options.a,
          b: quiz.options.b,
          c: quiz.options.c,
          d: quiz.options.d,
          correctAnswer: quiz.correctAnswer
        });
      });
  }

  editQuiz = event => {
    event.preventDefault();
    fetch(`http://localhost:3000/api/v1/quiz/${this.props.question._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
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
      .then(edited => {
        console.log(edited, "called edited");
        if (edited.success) {
          this.props.history.push("/dashboard");
        }
      });
  };

  render() {
    return (
      <>
        <div className="quiz">
          <span>Edit Quiz</span>
          <form onSubmit={this.editQuiz}>
            <input
              type="text"
              className="create-quiz-input"
              placeholder="Question"
              name="question"
              value={this.state.question}
              onChange={this.handleChange}
            ></input>
            <div>
              <input
                type="text"
                className="create-quiz-input"
                placeholder="Option (a)"
                name="a"
                value={this.state.a}
                onChange={this.handleChange}
              ></input>
              <input
                type="text"
                className="create-quiz-input"
                placeholder="Option (b)"
                name="b"
                value={this.state.b}
                onChange={this.handleChange}
              ></input>
              <input
                type="text"
                className="create-quiz-input"
                placeholder="Option (c)"
                name="c"
                value={this.state.c}
                onChange={this.handleChange}
              ></input>
              <input
                type="text"
                className="create-quiz-input"
                placeholder="Option (d)"
                name="d"
                value={this.state.d}
                onChange={this.handleChange}
              ></input>
            </div>
            <input
              type="text"
              className="create-quiz-input"
              placeholder="Correct Answer"
              name="correctAnswer"
              value={this.state.correctAnswer}
              onChange={this.handleChange}
            ></input>
            <button type="submit">Update</button>
          </form>
        </div>
      </>
    );
  }
}
export default withRouter(Quiz);
