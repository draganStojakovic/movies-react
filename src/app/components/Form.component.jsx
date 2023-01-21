export const Form = ({
  movie,
  onChange,
  handleGenres,
  handleResetForm,
  formTitle,
}) => {
  return (
    <>
      <h1>{formTitle}</h1>
      <form>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={movie.title}
          required
          minLength="2"
          onChange={(e) => onChange({ ...movie, title: e.target.value })}
        />
        <br />
        <label htmlFor="director">Director:</label>
        <input
          id="director"
          type="text"
          value={movie.director}
          required
          minLength="2"
          onChange={(e) => onChange({ ...movie, director: e.target.value })}
        />
        <br />
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          id="imageUrl"
          type="text"
          required
          minLength="2"
          value={movie.imageUrl}
          onChange={(e) => onChange({ ...movie, imageUrl: e.target.value })}
        />
        <br />
        <label htmlFor="duration">Duration:</label>
        <input
          id="duration"
          type="number"
          value={movie.duration}
          onChange={(e) => onChange({ ...movie, duration: e.target.value })}
        />
        <br />
        <label htmlFor="releaseDate">Release Date:</label>
        <input
          id="releaseDate"
          type="date"
          required
          value={movie.releaseDate}
          onChange={(e) => onChange({ ...movie, releaseDate: e.target.value })}
        />
        <br />

        <fieldset>
          <label htmlFor="action">Action:</label>
          <input
            id="action"
            type="checkbox"
            name="genres"
            value="Action"
            onChange={(e) => handleGenres(e.target.checked, e.target.value)}
          />
          <br />
          <label htmlFor="comedy">Comedy:</label>
          <input
            id="comedy"
            type="checkbox"
            name="genres"
            value="Comedy"
            onChange={(e) => handleGenres(e.target.checked, e.target.value)}
          />
          <br />
          <label htmlFor="drama">Drama:</label>
          <input
            id="drama"
            type="checkbox"
            name="genres"
            value="Drama"
            onChange={(e) => handleGenres(e.target.checked, e.target.value)}
          />
          <br />
          <label htmlFor="horror">Horror:</label>
          <input
            id="horror"
            type="checkbox"
            name="genres"
            value="Horror"
            onChange={(e) => handleGenres(e.target.checked, e.target.value)}
          />
          <br />
          <label htmlFor="western">Western:</label>
          <input
            id="western"
            type="checkbox"
            name="genres"
            value="Western"
            onChange={(e) => handleGenres(e.target.checked, e.target.value)}
          />
          <br />
          <label htmlFor="thriller">Thriller:</label>
          <input
            id="thriller"
            type="checkbox"
            name="genres"
            value="Thriller"
            onChange={(e) => handleGenres(e.target.checked, e.target.value)}
          />
          <br />
          <label htmlFor="animation">Animation:</label>
          <input
            id="animation"
            type="checkbox"
            name="genres"
            value="Animation"
            onChange={(e) => handleGenres(e.target.checked, e.target.value)}
          />
          <br />
          <label htmlFor="documentary">Documentary:</label>
          <input
            id="documentary"
            type="checkbox"
            name="genres"
            value="Documentary"
            onChange={(e) => handleGenres(e.target.checked, e.target.value)}
          />
          <br />
        </fieldset>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <button onClick={handleResetForm}>Reset</button>
    </>
  );
};
