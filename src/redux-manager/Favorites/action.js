import { SAVE_IN_LIST, DELET_FILM } from "../constants";

export const saveInListAction = (obj) => ({ type: SAVE_IN_LIST, payload: obj });
export const deletFilmAction = (id) => ({ type: DELET_FILM, payload: id });
