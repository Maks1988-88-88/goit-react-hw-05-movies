import { getMovies, getMoviesById } from 'Api/Api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import s from 'components/Navigation/HomePage.module.css';

const HomePage = () => {
  //   const match = useRouteMatch();
  const [movies, setMovies] = useState(null);
  //   console.log(match);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  return (
    <>
      <h2>HomePage</h2>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </>
  );
};

export default HomePage;
