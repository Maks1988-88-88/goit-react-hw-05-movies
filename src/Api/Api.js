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

const getMoviesById = async id => {
  const responceId = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
  );
  //   console.log(responceId.data);

  return responceId.data;
};

const getMoviesReviews = async id => {
  const responceReviews = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`,
  );
  // console.log(responceReviews.data.results);
  const reviewsMovies = responceReviews.data.results.map(
    ({ author, content, id }) => {
      return { author, content, id };
    },
  );
  // console.log(reviewsMovies);
  return reviewsMovies;
};

const getMoviesCasts = async id => {
  const responceCasts = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
  );
  console.log(responceCasts);
  return responceCasts;
};

export { getMovies, getMoviesById, getMoviesReviews, getMoviesCasts };
