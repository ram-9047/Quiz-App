import { SET_QUESTIONS } from "../types/index";

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
