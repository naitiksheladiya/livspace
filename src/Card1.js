import React from 'react';
import './Card1.css';
import step1 from './cardImage/full-home-1682066987-lk16r.jpg';
import step2 from './cardImage/modular-1-1682066917-W5NcL.jpg';
import step3 from './cardImage/reno-1682066988-lqJkS.jpg';
import step4 from './cardImage/vinviago-desk-1692618545-ToZjR.jpg';
// import { FontAwesomeIcon, faArrowRight } from '@fortawesome/react-fontawesome';
import { IoIosArrowForward } from "react-icons/io";



function Card1() {
    const cards = [
        {
            title: "Modular Interiors",
            description: "Functional kitchen, wardrobe and storage",
            imgSrc: step1 // Replace with your image path
        },
        {
            title: "Full Home Interiors",
            description: "Turnkey interior solutions for your home",
            imgSrc: step2 // Replace with your image path
        },
        {
            title: "Luxury Interiors",
            description: "Tailored interiors that redefine elegance",
            imgSrc: step3 // Replace with your image path
        },
        {
            title: "Renovations",
            description: "Expert solutions to upgrade your home",
            imgSrc: step4 // Replace with your image path
        }
    ];

    return (
        <div className="App2">
            <header className="App2-header">
                <h1 className='head-1'>One-stop shop for all things interiors</h1>
                <p className='p-head-1'>
                    Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office. With a wide range of furniture & decor, we have your back from start to finish.
                </p>
            </header>
            <div className="card-container">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.imgSrc} alt={card.title} className="card-image" />
                        <div className="card-content">
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                            <div>

                                <button className='okhover'><IoIosArrowForward /></button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card1;
