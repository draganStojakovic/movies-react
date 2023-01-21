import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "../components/Form.component";
import { postMovie } from "../store/movies/slice";
import { useHistory } from "react-router-dom";

export const FormPage = () => {
  const FORM_TITLE = "Submit a Movie";
  const history = useHistory();
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    imageUrl: "",
    duration: 0,
    releaseDate: 0,
    genres: [],
  });

  const handleGenres = (isChecked, value) => {
    if (!isChecked) {
      setMovie({
        ...movie,
        genres: [...movie.genres.filter((genre) => genre !== value)],
      });
    } else {
      setMovie({ ...movie, genres: [...movie.genres, value] });
    }
  };

  const handleResetForm = () => {
    setMovie({
      title: "",
      director: "",
      imageUrl: "",
      duration: 0,
      releaseDate: 0,
      genres: [],
    });
  };

  const handleAddMovie = async (e) => {
    e.preventDefault();
    if (
      !movie.title ||
      !movie.director ||
      !movie.imageUrl ||
      !movie.duration ||
      !movie.releaseDate
    ) {
      alert("One or more fields are blank.");
      return;
    }
    try {
      dispatch(postMovie(movie));
      history.push('/movies');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form
      formTitle={FORM_TITLE}
      movie={movie}
      onChange={setMovie}
      handleGenres={handleGenres}
      handleResetForm={handleResetForm}
      handleSubmit={handleAddMovie}
    />
  );
};
