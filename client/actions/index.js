import {
  SET_QUESTIONS,
  GET_CURRENT_USER,
  CREATE_QUESTIONS
} from "../types/index";

function setQuestions(payload) {
  return {
    type: SET_QUESTIONS,
    payload
  };
}
export function fetchQuizzes() {
  return dispatch => {
    console.log("inside fetch quizes action file");
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
    type: GET_CURRENT_USER,
    payload
  };
}
export function getLoggedInUser() {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/user", {
      headers: {
        "content-type": "application/json",
        authorization: localStorage.token
      }
    })
      .then(res => res.json())
      .then(user => {
        // console.log(user, "loggedin user here");
        if (user.success) {
          dispatch(getUser(user.user));
        }
      });
  };
}
function createQuestion(payload) {
  return {
    type: CREATE_QUESTION,
    payload
  };
}
export function createOneQuestion(question, cb) {
  event.preventDefault();
  // console.log(question);
  fetch("http://localhost:3000/api/v1/quiz/create", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      question: question.question,
      options: {
        a: question.a,
        b: question.b,
        c: question.c,
        d: question.d
      },
      correctAnswer: question.correctAnswer
    })
  })
    .then(res => res.json())
    .then(quiz => {
      console.log(quiz);
      if (quiz.success) {
        dispatch(createQuestion(quiz.createdQuiz));
        cb();
      }
    });
}

function deleteQuestion(payload) {
  return {
    type: DELETE_QUESTION,
    payload
  };
}
export function deleteOneQuestion(id) {
  console.log(id, "delete in process");
  fetch(`http://localhost:3000/api/v1/quiz/${id}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(quiz => {
      console.log(quiz);
      if (quiz.success) {
        dispatch(deleteQuestion(id));
      }
    });
}
