import toast, { Toaster } from "react-hot-toast";
import fetchMovies from "../../services/movieService";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";
import { useState } from "react";
import type { Movie } from "../../type/movie";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      setMovies([]);
      setLoader(true);
      setError(false);
      const data = await fetchMovies(query);
      if (!data.results.length) {
        toast.error("No movies found for your request.");
        return;
      }
      setMovies(data.results);
    } catch {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  const onSelect = () => {
    console.log("click");
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieGrid movies={movies} onSelect={onSelect} />}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
