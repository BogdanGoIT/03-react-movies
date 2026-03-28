import axios from "axios";

const movieKey = import.meta.env.VITE_TMDB_TOKEN;

const url = `https://api.themoviedb.org/3/search/movie`;

export default async function fetchMovies(query: string) {
  const res = await axios(url, {
    params: {
      // твої параметри
      query,
    },
    headers: {
      Authorization: `Bearer ${movieKey}`,
    },
  });

  return res.data;
}
