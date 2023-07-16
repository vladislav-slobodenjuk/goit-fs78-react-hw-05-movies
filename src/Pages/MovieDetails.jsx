import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchById } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    // if (!movieId) return;
    (async () => {
      const res = await searchById(movieId);
      setMovie(res);
      // console.log(res);
    })();
  }, [movieId]);

  return (
    movie && (
      <main>
        <div class="modal__wrapper">
          <img
            class="modal__poster"
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.title}
          />

          <div class="modal__description">
            <h2 class="modal__title">{movie.title}</h2>

            <div class="modal__stats">
              <div class="stats__row">
                <p class="stats__name">Vote / Votes</p>
                <p class="stats__data">
                  <span class="stats__data-votes">
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <span class="stats__data-separator"> / </span>
                  <span class="stats__data-votes">
                    {new Intl.NumberFormat('en-US').format(movie.vote_count)}
                  </span>{' '}
                </p>
              </div>
              <div class="stats__row">
                <p class="stats__name">Popularity</p>
                <p class="stats__data">
                  {new Intl.NumberFormat('en-US').format(
                    movie.popularity.toFixed(1)
                  )}
                </p>
              </div>
              <div class="stats__row">
                <p class="stats__name">Genre</p>
                <p class="stats__data">
                  {movie.genres.map(({ name }) => name).join(', ')}
                </p>
              </div>
            </div>

            <h3 class="modal__about">About</h3>
            <p class="modal__text">{movie.overview}</p>
          </div>
        </div>
      </main>
    )
  );
};

export default MovieDetails;
