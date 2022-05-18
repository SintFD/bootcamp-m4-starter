import { SAVE_IN_LIST } from "../constants";

const initialValues = {
  filmObj: [],
};

const movieItemReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SAVE_IN_LIST:
      return { ...state, filmObj: [...state.filmObj, action.payload] };
    default:
      return state;
  }
};

export default movieItemReducer;
