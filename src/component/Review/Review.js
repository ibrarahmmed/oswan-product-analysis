import React from 'react';
import useReview from '../hooks/useReview';
import Reviews from '../Reviews/Reviews';
import './Review.css'

const Review = () => {
    const [reviews,setReview]=useReview([]);
    return (
        <div className='reviews-container'>

            {
                reviews.map(review=><Reviews
                
                    key={review.id}
                    review={review}
                
                ></Reviews>)
            }
           
        </div>
    );
};

export default Review;