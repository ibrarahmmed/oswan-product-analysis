import React from 'react';
import './Reviews.css'

const Reviews = (props) => {
    const {name,picture,rating,review}=props.review;
    return (
        <div className='card-container'>

            <img src={picture} alt="" />
            <p>{review}</p>
            <h4>{name}</h4>
            <h5>Rating: {rating}</h5>

            
        </div>
    );
};

export default Reviews;