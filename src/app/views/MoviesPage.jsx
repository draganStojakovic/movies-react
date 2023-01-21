import { getAllMovies } from "../store/movies/slice";
import { makeSelectMovies } from "../store/movies/selector";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MovieDetails } from "../components/MovieDetails.component";

export const MoviesPage = () => {
  const movies = useSelector(makeSelectMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <>
      <h1>Movie List</h1>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <MovieDetails
                id={movie.id}
                title={movie.title}
                director={movie.director}
                imageUrl={movie.imageUrl}
                duration={movie.duration}
                releaseDate={movie.releaseDate}
                genres={movie.genres}
                link={true}
              />
            </li>
          ))}
      </ul>
    </>
  );
};
