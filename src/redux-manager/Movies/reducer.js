import { GET_MOVIE } from "../constants";

const initialValues = {
  filmObj: [],
};

const movieReducer = (state = initialValues, action) => {
  switch (action.type) {
    case GET_MOVIE:
      // console.log(state);
      return { ...state, filmObj: [action.payload] };
    default:
      return state;
  }
};

export default movieReducer;
