import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FilmList } from 'components/FilmList/FilmList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { searchByQuery } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  // console.log(query);

  const updateQuery = query => {
    if (query === '') return;
    setSearchParams({ query });
  };

  useEffect(() => {
    if (!query) return;

    (async () => {
      // console.log(query);
      const res = await searchByQuery(query);
      setMovies(res);
      // console.log(res);
    })();
  }, [query]);

  return (
    <main>
      <h1>Movies Search</h1>
      <SearchBox onHandleSubmit={updateQuery} />
      {movies.length > 0 && <FilmList movies={movies} />}
      {query && movies.length === 0 && <p>Nothig Found</p>}
    </main>
  );
};

export default Movies;
