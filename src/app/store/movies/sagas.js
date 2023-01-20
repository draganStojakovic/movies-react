import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { setAllMovies } from "./slice";
import { movieService } from "../../services/MovieService";

function* getMovies() {
  try {
    const response = yield call(movieService.get);
    yield put(setAllMovies(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getmoviesSagaWatcher() {
  yield takeEvery("movies/getAllMovies", getMovies);
}

export default function* rootMoviesSaga() {
  yield all([fork(getmoviesSagaWatcher)]);
}
