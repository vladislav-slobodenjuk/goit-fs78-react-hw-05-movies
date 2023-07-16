import { useEffect, useState } from 'react';
import { getDayTrending } from 'services/api';
import { FilmList } from 'components/FilmList/FilmList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getDayTrending();
      setMovies(res);
      // console.log(res);
    })();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {movies.length > 0 && <FilmList movies={movies} />}
    </main>
  );
};

export default Home;
