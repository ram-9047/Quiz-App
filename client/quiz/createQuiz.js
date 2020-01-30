import React from "react";
import "../../stylesheets/quiz.css";

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="quiz">
          <span>List of Quiz</span>
          <p>Tags</p>
          <h2>Question title</h2>
          <h3>options</h3>
        </div>
      </>
    );
  }
}

export default Quiz;
