import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

const StarRating = ({ rating }: any) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];

  // Render full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<BsStarFill key={i} />);
  }

  // Render half star if necessary
  if (hasHalfStar) {
    stars.push(
      <div key={stars.length} className="half-star">
        <BsStarFill />
        <BsStar className="star-overlay" />
      </div>
    );
  }

  // Render empty stars to complete the rating
  while (stars.length < 5) {
    stars.push(<BsStar key={stars.length} />);
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
