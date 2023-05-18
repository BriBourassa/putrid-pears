const url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/`;

const getAllMovieData = async (setAllMovieTiles, setDisplayedMovies, setError) => {

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("All Movie call - Task Failed successfully!");
    }
    const data = await response.json();
    setAllMovieTiles(data.movies);
    setDisplayedMovies(data.movies);
  } catch (errorOb) {
    setError(errorOb.message);
  }
};

const getSingleMovieData = async (setSelectedMovie, setError, path) => {
  try {
    const response = await fetch(url+path);
    if (!response.ok) {
        throw new Error("Single Movie call - Task Failed successfully!");
    }
    const data = await response.json();
    setSelectedMovie(data.movie);
  } catch (errorOb) {
    setError(errorOb.message);
  }
};

export { getAllMovieData, getSingleMovieData };