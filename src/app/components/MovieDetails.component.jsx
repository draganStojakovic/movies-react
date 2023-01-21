import { Link } from "react-router-dom";

export const MovieDetails = ({
  id,
  title,
  director,
  imageUrl,
  duration,
  releaseDate,
  genres,
  link,
}) => {
  return (
    <>
      {link ? (
        <Link to={`/movies/${id}`}>
          <h3>{title}</h3>
        </Link>
      ) : (
        <h3>{title}</h3>
      )}
      <p>Director: {director}</p>
      <p>URL: {imageUrl}</p>
      <p>Duration: {duration}</p>
      <p>Release: {releaseDate}</p>
      {genres &&
        genres.map((genre, index) => <ul>{<li key={index}>{genre}</li>}</ul>)}
    </>
  );
};
