import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie(prop) {
    return (
        <div>
            <img src={prop.medium_cover_image} alt={prop.title} />
            <h2>
              <Link to={`/movie/${prop.id}`}> {prop.title}</Link>
            </h2>
            <p>{prop.summary}</p>
            <ul>
              {prop.genres.map(genre => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
        </div>
    );
}
Movie.propTypes = {
    id : PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;