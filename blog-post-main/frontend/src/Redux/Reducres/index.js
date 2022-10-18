import { combineReducers } from "redux";

import postReducer from "../Reducres/PostReducer";
import userReducer from "../Reducres/UserReducer";

const reducers = combineReducers({ postReducer, userReducer });

export default reducers;
