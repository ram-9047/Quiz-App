import {
  SET_QUESTIONS,
  DELETE_QUESTION,
  CREATE_QUESTION,
  GET_QUESTION,
  UPDATE_SINGLE_QUESTION
} from "../types/index";

let INITIAL_STATE = {
  quizzes: null,
  singleQuestion: null,
  isWorking: false
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
    case UPDATE_SINGLE_QUESTION:
      console.log(state, action.payload);
      return {
        ...state,
        singleQuestion: {
          ...state.singleQuestion,
          ...action.payload
        }
      };
    case GET_QUESTION:
      console.log(action.payload);
      return {
        ...state,
        singleQuestion: action.payload,
        isWorking: true
      };

    default:
      return state;
  }
}
