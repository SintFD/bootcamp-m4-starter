import { combineReducers } from "redux";
import movieReducer from "./Movies/reducer";
import movieItemReducer from "./MovieItem/reducer";

const rootReducer = combineReducers({ movieReducer, movieItemReducer });

export default rootReducer;
