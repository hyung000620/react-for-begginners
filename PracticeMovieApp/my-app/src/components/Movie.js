import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from "./Movie.module.css";

function Movie(prop) {
    return (
        <div className={styles.movie}>
            <img className={styles.movie__img} src={prop.medium_cover_image} alt={prop.title} />
            <h2 className={styles.movie__title}>
              <Link to={`/movie/${prop.id}`}> {prop.title}</Link>
            </h2>
            <p>{prop.summary.length > 235 ? `${prop.summary.slice(0, 235)}...` : prop.summary}</p>

            <ul className={styles.movie__genres}>
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