import { useParams } from 'react-router-dom';
import { getMoviesById } from 'Api/Api';
import { useState, useEffect } from 'react';

// import s from 'components/Navigation/MoviesPage.module.css';

const MovieDetailsPage = () => {
  const [moviesIdInfo, setMoviesIdInfo] = useState(null);

  const { moviesId } = useParams();
  console.log(moviesId);

  useEffect(() => {
    getMoviesById(moviesId).then(setMoviesIdInfo);
  }, [moviesId]);

  // const poster = `https://api.themoviedb.org/3}${moviesIdInfo.poster_path}`;

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
          <h2>{moviesIdInfo.title}</h2>
          <h3>Overview:</h3>
          <p>{moviesIdInfo.overview}</p>
          <h3>Genres</h3>
          <p>{moviesIdInfo.genres.map(genre => genre.name + ' ')}</p>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
