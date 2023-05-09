import React from 'react';

const { useState, useEffect } = React;

export default function RateProduct(props) {
  const [rating, setRating] = useState(0);
  const [starsArray, setStarsArray] = useState([0, 0, 0, 0, 0]);
  const [ratingDescription, setRatingDescription] = useState('Please rate this item');
  useEffect(() => {
    if (rating === 5) {
      setRatingDescription('Great');
    } else if (rating === 4) {
      setRatingDescription('Good');
    } else if (rating === 3) {
      setRatingDescription('Average');
    } else if (rating === 2) {
      setRatingDescription('Fair');
    } else if (rating === 1) {
      setRatingDescription('Poor');
    }
    const newStars = [];
    for (let i = 0; i < rating; i += 1) {
      newStars.push(100);
    }
    while (newStars.length < 5) {
      newStars.push(0);
    }
    setStarsArray(newStars);
  }, [rating]);

  return (
    <span className="write-reviews-rating">
      {
        starsArray.map((percent, index) => (
          <svg className="write-review-star" width="1.5em" height="1.5em" onClick={() => setRating(index + 1)}>
            <use href="#star-template" fill={`url(#fill-${percent})`} stroke="#fece3c" />
          </svg>
        ))
      }
      <span className="rating-description">{ratingDescription}</span>
    </span>
  );
}
