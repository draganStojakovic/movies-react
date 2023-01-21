import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { movieService } from "../../services/MovieService";
import { setAllMovies } from "./slice";
import { setSingleMovie } from "./slice";

function* getMovies() {
  try {
    const { data } = yield call(movieService.getAllMovies);
    yield put(setAllMovies(data));
  } catch (err) {
    console.error(err);
  }
}

function* getMoviesSagaWatcher() {
  yield takeEvery("movies/getAllMovies", getMovies);
}

function* getSingleMovie({ payload }) {
  try {
    const { data } = yield call(movieService.show, payload);
    yield put(setSingleMovie(data));
  } catch (err) {
    console.error(err);
  }
}

function* getSingleMovieSagaWatcher() {
  yield takeEvery("movies/getSingleMovie", getSingleMovie);
}

function* submitMovie({ payload }) {
  try {
    yield call(movieService.add, payload);
  } catch (err) {
    console.error(err);
  }
}

function* getSubmitMovieSagaWatcher() {
  yield takeEvery("movies/postMovie", submitMovie);
}

export default function* rootMoviesSaga() {
  yield all([
    fork(getMoviesSagaWatcher),
    fork(getSingleMovieSagaWatcher),
    fork(getSubmitMovieSagaWatcher),
  ]);
}
