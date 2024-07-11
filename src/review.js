import React from 'react'
import "./review.css"

// import Button from 'react-bootstrap/Button';
// import Card2 from 'react-bootstrap/Card2';

import step1 from './reviewimage/puja-bhatia-1682063289-aTyu6.jpg'
import step2 from './reviewimage/rohit-paula-1682062954-3pnjQ.jpg'
import step3 from './reviewimage/swati-gaurav-1682063290-MSkUW.jpg'

export default function review() {


    const reviews = [
        {
            name: "Rohit Paul & Shveta",
            location: "Gurugram",
            review: "Hats off to the entire team at Livspace. They finished the project ahead of time.",
            image: step1
        },
        {
            name: "Swati & Gaurav",
            location: "Bangalore",
            review: "Our experience with Livspace was nice thanks to the project managers.",
            image: step2
        },
        {
            name: "Puja Bhatia",
            location: "Gurugram",
            review: "We reached out to Livspace and they designed the house that we really wanted.",
            image: step3
        }
    ];


    return (
        <>

            <div class="main2">
                <h1>Responsive Card Grid Layout</h1>
                <ul class="cards2">
                    {reviews.map((rev) => {
                        return (
                            <li className="cards_item2">
                                <div className="card2">
                                    <div className="card_image2">
                                        <div className="image-container" style={{ backgroundImage: `url(${rev.image})` }}>
                                            <div className="gradient-overlay">
                                                <h3>{rev.name}</h3>
                                                <p className="location">{rev.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <p>{rev.review}</p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* <h3 class="made_by">Made with ♡</h3> */}
        </>

    )
}


