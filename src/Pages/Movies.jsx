import { useEffect, useState } from 'react';

import { FilmList } from 'components/FilmList/FilmList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { searchByQuery } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const handleSubmit = query => {
    if (query === '') return;
    // const searchParam = query !== '' ? query : '';
    setSearch(query);
  };

  useEffect(() => {
    (async () => {
      // console.log(search);
      const res = await searchByQuery(search);
      setMovies(res);
      // console.log(res);
    })();
  }, [search]);

  return (
    <main>
      <h1>Movies Search</h1>
      <SearchBox onHandleSubmit={handleSubmit} />
      {movies.length > 0 && <FilmList movies={movies} />}
      {search !== '' && movies.length === 0 && <p>Nothig Found</p>}
    </main>
  );
};

export default Movies;
