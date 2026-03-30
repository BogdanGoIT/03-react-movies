export interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface GetMovieRes {
  results: Movie[];
}

export interface OnSubmitProps {
  onSubmit: (search: string) => Promise<void>;
}
