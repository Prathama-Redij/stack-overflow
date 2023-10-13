import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from './currentUser'
import questionsReducer from "./questions";
import usersReducer from './usersReducer'

export default combineReducers ({
    authReducer, currentUserReducer, questionsReducer, usersReducer
})