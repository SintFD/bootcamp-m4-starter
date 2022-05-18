import { SAVE_IN_LIST } from "../constants";

const initialValues = {
  filmFavorits: [],
};

const movieItemReducer = (state = initialValues, action) => {
  console.log(action.payload, "aaa");
  switch (action.type) {
    case SAVE_IN_LIST:
      return {
        ...state,
        filmFavorits: [...state.filmFavorits, action.payload],
      };
    default:
      return state;
  }
};

export default movieItemReducer;

// state.filmObj.every((el)=>el.imdbID === ) &&
