import { GET_CURRENT_USER } from "../types/index";

let INITIAL_STATE = {
  user: null,
  isLoggedIn: false
};

export default function curentUser(state = INITIAL_STATE, action) {
  //   console.log(action.type, GET_USER);
  switch (action.type) {
    case GET_CURRENT_USER:
      //   console.log(state, action, "getUser");
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true
      };
    default:
      return state;
  }
}
