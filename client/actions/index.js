import { SET_QUESTIONS, GET_USER } from "../types/index";

function setQuestions(payload) {
  return {
    type: SET_QUESTIONS,
    payload
  };
}
export function fetchQuizzes() {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/quiz")
      .then(res => res.json())
      .then(quiz => {
        if (quiz.success) {
          dispatch(setQuestions(quiz));
        }
      });
  };
}

function getUser(payload) {
  return {
    type: GET_USER,
    payload
  };
}
export function getLoggedInUser() {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/quiz")
      .then(res => res.json())
      .then(quiz => {
        if (quiz.success) {
          dispatch(setQuestions(quiz));
        }
      });
  };
}
