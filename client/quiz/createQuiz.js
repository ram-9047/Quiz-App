import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { createOneQuestion } from "../actions/index";
import "../../stylesheets/quiz.css";

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
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

  render() {
    // console.log(this.props);
    return (
      <>
        <div className="quiz">
          <span>Create Quiz</span>
          <form
            onSubmit={() =>
              this.props.createOneQuestion(this.state, () => {
                this.props.history.push("/dashboard");
              })
            }
          >
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
function mapStateToProps(state) {
  // console.log(state);
  return state;
}
export default connect(mapStateToProps, { createOneQuestion })(
  withRouter(Quiz)
);
