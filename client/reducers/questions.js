import {
  SET_QUESTIONS,
  DELETE_QUESTION,
  CREATE_QUESTION
} from "../types/index";

let INITIAL_STATE = {
  quizzes: null
};

export default function Questions(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        quizzes: action.payload
      };
    case CREATE_QUESTION:
      return {
        ...state
      };
    case DELETE_QUESTION:
      return {
        ...state
      };
    default:
      return state;
  }
}
