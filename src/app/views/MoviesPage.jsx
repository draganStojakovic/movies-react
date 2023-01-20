import { getAllMovies } from "../store/movies/slice";
import { makeSelectMovies } from "../store/movies/selector";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const MoviesPage = () => {
  const movies = useSelector(makeSelectMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  });
  console.log(movies.data); // undefined
  return (
    <>
      <p>MoviesPage</p>
    </>
  );
};
