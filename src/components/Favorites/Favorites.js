import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";
import { useSelector } from "react-redux";
import { setFilmsInList } from "../../redux-manager/MovieItem/selector";

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
              <li key={item.imdbID}>
                {item.Title} ({item.Year})
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
          className={`favorites__save ${!(title && movies) && "gray"}`}
          disabled={!(title && movies)}
        >
          Сохранить список
        </button>
      )}
    </div>
  );
}

export default Favorites;
