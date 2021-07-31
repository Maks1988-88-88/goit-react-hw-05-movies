// import s from 'components/Navigation/MoviesPage.module.css';
// import { useParams } from 'react-router-dom';

const Reviews = ({ moviesIdReview }) => {
  return (
    <>
      <h2>Reviews</h2>
      {moviesIdReview &&
        moviesIdReview.map(review => (
          <div key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))}
    </>
  );
};

export default Reviews;
