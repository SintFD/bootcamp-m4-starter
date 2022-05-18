import { SAVE_IN_LIST } from "../constants";
// import { SEARCH_MOVIE } from "../constants";

export const saveInListAction = (obj) => ({ type: SAVE_IN_LIST, payload: obj });

// export const searchMovieAction = (filmName) => ({
//   type: SEARCH_MOVIE,
//   payload: filmName,
// });
