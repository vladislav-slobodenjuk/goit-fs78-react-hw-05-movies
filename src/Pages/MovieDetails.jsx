import { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { searchById } from 'services/api';

import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { Additional, Details, StyledLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    (async () => {
      const res = await searchById(movieId);
      setMovie(res);
      // console.log(res);
    })();
  }, [movieId]);

  return (
    movie && (
      <main>
        <Details>
          <div className="modal__wrapper">
            <img
              className="modal__poster"
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.title}
            />

            <div className="modal__description">
              <h2 className="modal__title">{movie.title}</h2>

              <div className="modal__stats">
                <div className="stats__row">
                  <p className="stats__name">Vote / Votes</p>
                  <p className="stats__data">
                    <span className="stats__data-votes">
                      {movie.vote_average.toFixed(1)}
                    </span>
                    <span className="stats__data-separator"> / </span>
                    <span className="stats__data-votes">
                      {new Intl.NumberFormat('en-US').format(movie.vote_count)}
                    </span>{' '}
                  </p>
                </div>
                <div className="stats__row">
                  <p className="stats__name">Popularity</p>
                  <p className="stats__data">
                    {new Intl.NumberFormat('en-US').format(
                      movie.popularity.toFixed(1)
                    )}
                  </p>
                </div>
                <div className="stats__row">
                  <p className="stats__name">Genre</p>
                  <p className="stats__data">
                    {movie.genres.map(({ name }) => name).join(', ')}
                  </p>
                </div>
              </div>

              <h3 className="modal__about">About</h3>
              <p className="modal__text">{movie.overview}</p>
            </div>
          </div>
        </Details>

        <div>
          <h2>Additional information</h2>
          <Additional>
            <StyledLink to="cast">Cast</StyledLink>
            <StyledLink to="reviews">Reviews</StyledLink>
          </Additional>

          <Routes>
            <Route path="cast" element={<Cast movieId={movieId} />} />
            <Route path="reviews" element={<Reviews movieId={movieId} />} />
          </Routes>
        </div>
      </main>
    )
  );
};

export default MovieDetails;
