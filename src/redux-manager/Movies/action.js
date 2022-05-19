import { GET_MOVIE } from "../constants";
import { SEARCH_MOVIE } from "../constants";


export const searchMovieAction = (filmName) => ({
  type: SEARCH_MOVIE,
  payload: filmName,
});

export const getMovieAction = (obj) => ({ type: GET_MOVIE, payload: obj });