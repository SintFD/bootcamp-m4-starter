import { takeEvery, put, call, select } from "redux-saga/effects";
import { SAVE_IN_FAVORITS } from "../constants";
import { getMovieAction } from "./action";
import { sendFavoritFilms } from "../REST";
import { setFilmsInList } from "./selector";

function* workerCart(action) {
  try {
    const filmsImdbID = [];
    const movies = yield select(setFilmsInList);
    movies.forEach((el) => {
      filmsImdbID.push(el.imdbID);
    });
    const filmsId = yield call(sendFavoritFilms, action.payload, filmsImdbID);
    console.log(filmsId)
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherCart() {
  yield takeEvery(SAVE_IN_FAVORITS, workerCart);
}
