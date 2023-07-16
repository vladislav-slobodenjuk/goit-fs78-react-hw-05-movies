import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { searchById } from 'services/api';

export const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await searchById(movieId, 'reviews');
      setReviews(results);
      // console.log(results);
    })();
  }, [movieId]);

  return (
    <div>
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
    </div>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
