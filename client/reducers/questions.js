import { SET_QUESTIONS } from "../types/index";

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
    default:
      return state;
  }
}
