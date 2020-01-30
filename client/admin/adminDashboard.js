import React from "react";
import "../../stylesheets/adminDashboard.css";
import { Link } from "react-router-dom";

function adminDashboard() {
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
        <div>
          <div className="question-box">
            <p>Q-1 What is the capital of INDIA</p>
            <span>(a) Asdfg</span>
            <span>(b) Asdfg</span>
            <span>(c) Asdfg</span>
            <span>(d) Asdfg</span>
            <p>Correct Answer</p>
            <span>skrjh lsi</span>
          </div>
          <div className="question-box-btn">
            <button className="edit-btn">edit</button>
            <button className="edit-btn del-btn">delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default adminDashboard;
