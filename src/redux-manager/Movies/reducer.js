import { GET_MOVIE } from "../constants";

const initialValues = {
  movies: [],
};

const movieReducer = (state = initialValues, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
