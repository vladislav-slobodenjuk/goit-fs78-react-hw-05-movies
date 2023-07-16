import { useEffect, useState } from 'react';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      // const res = await getDayTrending();
      // setMovies(res);
      // console.log(res);
    })();
  }, []);

  return <div>Reviews</div>;
};
