import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";
import { useSelector, useDispatch } from "react-redux";
import { setFilmsInList } from "../../redux-manager/Favorites/selector";
import { deletFilmAction } from "../../redux-manager/Favorites/action";

function Favorites() {
  const [title, setTitle] = useState();
  const [clicked, setClicked] = useState(false);

  const movies = useSelector(setFilmsInList);

  const changeValue = (e) => {
    setTitle(e.target.value);
  };

  const saveFilms = () => {
    setClicked(true);
  };

  const dispatch = useDispatch();

  const deletFilm = (e) => {
    dispatch(deletFilmAction(e.target.id));
    console.log(e.target.id);
  };

  return (
    <div className="favorites">
      <input
        placeholder="Введите название списка"
        onChange={changeValue}
        className="favorites__name"
      />
      <ul className="favorites__list">
        {movies &&
          movies.map((item) => {
            return (
              <li className="favorite__list" key={item.imdbID}>
                {item.Title} ({item.Year})
                <button
                  onClick={deletFilm}
                  id={item.imdbID}
                  className="delet-class"
                >
                  &#10006;
                </button>
              </li>
            );
          })}
      </ul>
      {clicked ? (
        <Link to="/list/:id">Перейти к списку</Link>
      ) : (
        <button
          onClick={saveFilms}
          type="button"
          className={`favorites__save ${!(title && movies[0]) && "gray"}`}
          disabled={!(title && movies[0])}
        >
          Сохранить список
        </button>
      )}
    </div>
  );
}

export default Favorites;
