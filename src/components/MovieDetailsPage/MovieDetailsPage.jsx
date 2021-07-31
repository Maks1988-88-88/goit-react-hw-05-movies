import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import { getMoviesById, getMoviesReviews } from 'Api/Api';
import { useState, useEffect } from 'react';
import Reviews from 'components/Reviews/Reviews';

// import s from 'components/Navigation/MoviesPage.module.css';

const MovieDetailsPage = () => {
  const match = useRouteMatch();
  // console.log(match.url);

  const [moviesIdInfo, setMoviesIdInfo] = useState(null);
  const [moviesIdReview, setMoviesIdReview] = useState(null);

  const { moviesId } = useParams();
  // console.log(moviesId);

  useEffect(() => {
    getMoviesById(moviesId).then(setMoviesIdInfo);
    getMoviesReviews(moviesId).then(setMoviesIdReview);
  }, [moviesId]);

  return (
    <>
      <h2>MovieDetailsPage</h2>
      {moviesIdInfo && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${moviesIdInfo.poster_path}`}
            alt={moviesIdInfo.title}
            width="150"
          />
          <h2>
            {moviesIdInfo.title}({moviesIdInfo.release_date.slice(0, 4)})
          </h2>
          <h3>Overview:</h3>
          <p>{moviesIdInfo.overview}</p>
          <h3>Genres</h3>
          <p>{moviesIdInfo.genres.map(genre => genre.name + ' ')}</p>
          <Link to={`${match.url}/cast`}>
            <li>Cast</li>
          </Link>
          <Link to={`${match.url}/reviews`}>
            <li>Reviews</li>
          </Link>
          <Route path={`${match.url}/cast`}>
            <h3>cast</h3>
          </Route>
          <Route path={`${match.url}/reviews`}>
            <Reviews moviesIdReview={moviesIdReview} />
          </Route>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
