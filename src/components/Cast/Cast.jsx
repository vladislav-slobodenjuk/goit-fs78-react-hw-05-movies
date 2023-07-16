import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { searchById } from 'services/api';

export const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async () => {
      const { cast } = await searchById(movieId, 'credits');
      setCast(cast);
      // console.log(cast);
    })();
  }, [movieId]);

  return (
    <div>
      {cast && (
        <ul>
          {cast.map(({ id, profile_path, name }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w342/${profile_path}`}
                alt={name}
                width={150}
                loading="lazy"
              />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      )}
      {cast.length === 0 && <p>We don't have cast for this movie</p>}
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
