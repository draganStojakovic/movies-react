import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movie: {},
  },
  reducers: {
    getAllMovies: () => {},
    setAllMovies: (state, { payload }) => {
      state.movies = payload;
    },
    getSingleMovie: () => {},
    setSingleMovie: (state, { payload }) => {
      state.movie = payload;
    },
    postMovie: () => {},
  },
});

export const {
  getAllMovies,
  setAllMovies,
  getSingleMovie,
  setSingleMovie,
  postMovie,
} = movies.actions;
export default movies.reducer;
