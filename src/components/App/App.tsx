import toast, { Toaster } from "react-hot-toast";
import fetchMovies from "../../services/movieService";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";

function App() {
  const handleSearch = async (query: string) => {
    const data = await fetchMovies(query);
    if (data.results.length) {
      console.log(data.results);
    } else {
      toast.error("No movies found for your request.");
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
