import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";
import { useSelector } from "react-redux";
import { setFilmsInList } from "../../redux-manager/MovieItem/selector";

function Favorites() {
  const [title, setTitle] = useState();
  const [clicked, setClicked] = useState(false);
  const [movies, setMovies] =
    useState();
    //   [
    //   { imdbID: "tt0068646", title: "The Godfather", year: 1972 },
    //   { imdbID: "tt0068646", title: "The Godfather", year: 1972 },
    // ]

  const setFilmInList = useSelector(setFilmsInList);
  // const a = useSelector((state)=>state);

  useEffect(() => {
    setMovies(setFilmInList);
    console.log(setFilmInList);
  }, [setFilmInList]);

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
