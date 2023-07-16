import axios from 'axios';

const trendingInst = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/movie/day',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODU0Y2RkODdhYTkwNTNjYTAwMjI5ZmVhNzNlNTkyNSIsInN1YiI6IjYxODZmYWFkZmU2MzE4MDA2NDgzZTdkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vm-UaTyMPJ2HhXiSRvz-VpPqqqKEF-3PBdhfYlg5v3g',
  },
});

export async function getDayTrending() {
  const { data } = await trendingInst.get();
  return data.results;
}

const searchByIdInst = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODU0Y2RkODdhYTkwNTNjYTAwMjI5ZmVhNzNlNTkyNSIsInN1YiI6IjYxODZmYWFkZmU2MzE4MDA2NDgzZTdkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vm-UaTyMPJ2HhXiSRvz-VpPqqqKEF-3PBdhfYlg5v3g',
  },
});

export async function searchById(id) {
  const { data } = await searchByIdInst.get(id);
  return data;
}

// const instance = axios.create({
//   baseURL: 'https://pixabay.com/api/',
//   params: {
//     key: '24000598-4cbb5e18617bf8e66757f824b',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: PER_PAGE,
//     page: 1,
//   },
// });

// export const getImages = async (q, page = 1) => {
//   const { data } = await instance.get('', { params: { q, page } });
//   return data;
// };
