import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";

const rootReducer = combineReducers({ users, questions });

export default rootReducer;
