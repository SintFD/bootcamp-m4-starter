import { takeEvery, put, call, select } from "redux-saga/effects";
import { SEARCH_MOVIE } from "../constants";
import { getFilmResults } from "./selector";
import { getMovieAction } from "./action";
import { fetchFilmName } from "../REST";

function* workerCart(action) {
  try {
    const data = yield call(fetchFilmName, action.payload); 
    yield put(getMovieAction(data));
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherCart() {
  yield takeEvery(SEARCH_MOVIE, workerCart);
}
