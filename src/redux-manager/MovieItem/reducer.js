import { SAVE_IN_LIST } from "../constants";

const initialValues = {
  filmFavorits: [],
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

    default:
      return state;
  }
};

export default movieItemReducer;
