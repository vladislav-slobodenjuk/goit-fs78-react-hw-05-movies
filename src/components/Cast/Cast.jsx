import { useEffect, useState } from 'react';

export const Cast = () => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async () => {
      // const res = await getDayTrending();
      // setMovies(res);
      // console.log(res);
    })();
  }, []);

  return <div>Cast</div>;
};
