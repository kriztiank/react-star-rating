import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

function getRatingFromLocalStorage() {
  return localStorage.getItem('rating')
    ? JSON.parse(localStorage.getItem('rating'))
    : [];
}

const StarRating = () => {
  const [rating, setRating] = useState(getRatingFromLocalStorage());
  const [hover, setHover] = useState(null);

  useEffect(() => {
    // local storage
    localStorage.setItem('rating', JSON.stringify(rating));
    return () => {};
  }, [rating]);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className='star'
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={100}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>The rating is: {rating} </p>
    </div>
  );
};

export default StarRating;
