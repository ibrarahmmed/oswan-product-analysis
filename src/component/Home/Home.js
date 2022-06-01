import React, {useState } from 'react';
import useReview from '../hooks/useReview';
import img from '../image/bike-1.webp'
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const [reviews,setReviews]=useReview([]);
   
    return (
        <div>
            <div className="product-container" >

                <div className="text-container">

                    <h1>OSWAN WORLD MOST <br></br>  <span className='title-color'> LARGEST MOTORCYCLE STORE</span></h1>
                    <p>OSWAN the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle.We provided best bike in the world.We also prove old bike in our store. </p>

                    <div className='btn'> 
                        <button className='live-demo-btn'>Live Demo</button>
                        <div></div>
                    </div>

                </div>
                <div className="img-container">
                    <img src={img} alt="" />
                </div> 

            </div>

            <div className="customer-review">
                <h2>Customer Review: ({reviews.length})</h2>

                <div className="reviews-container">
                    {
                        reviews.map(review=><Reviews
                        
                        key={review.id}

                        review={review}
                        
                        >

                        </Reviews>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Home;