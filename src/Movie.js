import PropTypes from "prop-types";
function Movie({ coverImg, title, title_long, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title_long}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map(g => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>)
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;