import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    getAllMovies: () => {},
    setAllMovies: (state, { payload }) => {
      state.movies = payload.data;
    },
  },
});

export const { getAllMovies, setAllMovies } = movies.actions;
export default movies.reducer;
