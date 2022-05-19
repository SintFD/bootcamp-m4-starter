import { SAVE_IN_LIST, DELET_FILM, SAVE_IN_FAVORITS } from "../constants";

export const saveInListAction = (obj) => ({ type: SAVE_IN_LIST, payload: obj });
export const deletFilmAction = (id) => ({ type: DELET_FILM, payload: id });
export const saveInFavoritsAction = (listName) => ({
  type: SAVE_IN_FAVORITS,
  payload: listName,
});
