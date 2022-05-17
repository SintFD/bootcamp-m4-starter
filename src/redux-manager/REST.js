export const fetchFilmName = async (filmName) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${filmName}&apikey=b14a1940`
  );
  const data = await response.json();

  return data;
};
