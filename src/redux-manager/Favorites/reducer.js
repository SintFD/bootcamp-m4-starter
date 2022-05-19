import { SAVE_IN_LIST, DELET_FILM } from "../constants";

const initialValues = {
  filmFavorits: [],
  favoritListID: null
};

const movieItemReducer = (state = initialValues, action) => {
  const isElementExist = state.filmFavorits.some(
    (el) => el?.imdbID === action.payload?.imdbID
  );
  switch (action.type) {
    case SAVE_IN_LIST:
      if (isElementExist) return state;
      return {
        ...state,
        filmFavorits: [...state.filmFavorits, action.payload],
      };
    case DELET_FILM:
      return {
        ...state,
        filmFavorits: [
          ...state.filmFavorits.filter((el) => {
            return el.imdbID !== action.payload;
          }),
        ],
      };

    default:
      return state;
  }
};

export default movieItemReducer;
