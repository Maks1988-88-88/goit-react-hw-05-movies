// import s from 'components/Navigation/MoviesPage.module.css';

const Cast = ({ moviesIdCast }) => {
  return (
    <>
      <h3>Cast</h3>
      {moviesIdCast &&
        moviesIdCast.cast.map(cast => (
          <div key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.name}
              width="150"
            />
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </div>
        ))}
    </>
  );
};

export default Cast;
