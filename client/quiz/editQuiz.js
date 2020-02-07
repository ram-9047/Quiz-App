import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {
  updateOneQuestion,
  saveSingleQuestionInput
} from "../actions/index.js";
import "../../stylesheets/quiz.css";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = event => {
    console.log(event.target.value);
    this.props.saveSingleQuestionInput({
      [event.target.name]: event.target.value
    });
  };

  // componentDidMount() {}

  editQuiz = event => {
    event.preventDefault();
    this.props.updateOneQuestion(this.props.questions.singleQuestion, () => {
      this.props.history.push("/dashboard");
    });
  };

  updateState = () => {
    console.log(this.props);
    this.setState({
      question: this.props.questions.singleQuestion.question,
      a: this.props.questions.singleQuestion.options.a,
      b: this.props.questions.singleQuestion.options.b,
      c: this.props.questions.singleQuestion.options.c,
      d: this.props.questions.singleQuestion.options.d,
      correctAnswer: this.props.questions.singleQuestion.correctAnswer
    });
  };
  render() {
    console.log(this.props, "edit question ");
    if (this.props.questions && this.props.questions.singleQuestion) {
      return (
        <>
          {/* <h1>edit question page</h1> */}
          <div className="quiz">
            <span>Edit Quiz</span>
            <form onSubmit={this.editQuiz}>
              <input
                type="text"
                className="create-quiz-input"
                placeholder="Question"
                name="question"
                value={this.props.questions.singleQuestion.question}
                onChange={this.handleChange}
              ></input>
              <div>
                <input
                  type="text"
                  className="create-quiz-input"
                  placeholder="Option (a)"
                  name="a"
                  value={this.props.questions.singleQuestion.a}
                  onChange={this.handleChange}
                ></input>
                <input
                  type="text"
                  className="create-quiz-input"
                  placeholder="Option (b)"
                  name="b"
                  value={this.props.questions.singleQuestion.b}
                  onChange={this.handleChange}
                ></input>
                <input
                  type="text"
                  className="create-quiz-input"
                  placeholder="Option (c)"
                  name="c"
                  value={this.props.questions.singleQuestion.c}
                  onChange={this.handleChange}
                ></input>
                <input
                  type="text"
                  className="create-quiz-input"
                  placeholder="Option (d)"
                  name="d"
                  value={this.props.questions.singleQuestion.d}
                  onChange={this.handleChange}
                ></input>
              </div>
              <input
                type="text"
                className="create-quiz-input"
                placeholder="Correct Answer"
                name="correctAnswer"
                value={this.props.questions.singleQuestion.correctAnswer}
                onChange={this.handleChange}
              ></input>
              <button type="submit">Update</button>
            </form>
          </div>
        </>
      );
    } else return <div>Loading...</div>;
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, {
  updateOneQuestion,
  saveSingleQuestionInput
})(withRouter(Quiz));
