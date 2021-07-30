import axios from 'axios';

const API_KEY = '2f8d6050c74d5f454a522d74a8cedbb8';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getMovies = async () => {
  const responce = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`,
  );
  // console.log(responce.data.results);

  const trendingMovies = responce.data.results.map(({ id, title }) => {
    return { id, title };
  });

  //   console.log(trendingMovies);

  return trendingMovies;
};

export default getMovies;
