import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './glim.css'; // Optional, for custom styling

import step1 from './glimimage/contemporary-3-bhk-house-design-in-gurgaon-1682068277-e8xQN.jpg';
import step2 from './glimimage/contemporary-house-design-for-3-bhk-flat-in-ahmedabad-1682068278-VzD95.jpg';
import step3 from './glimimage/contemporary-house-design-for-4-bhk-penthouse-in-noida-1682068280-0eOO7.jpg';
import step4 from './glimimage/modern-4-bhk-penthouse-home-design-in-bangalore-1682068280-rncG1.jpg';
import step5 from './glimimage/modern-house-design-for-2-bhk-flat-in-mumbai-1682068281-ab4gr.jpg';
import step6 from './glimimage/rustic-house-design-for-3-bhk-flat-in-bangalore-1682068282-lbPWM.jpg';

const Glim = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            }
        ]
    };

    const slides = [
        { image: step1, title: 'Modern 4 BHK Penthouse, Bangalore' },
        { image: step2, title: 'Contemporary 3 BHK House, Gurgaon' },
        { image: step3, title: 'Contemporary 4 BHK Penthouse, Noida' },
        { image: step4, title: 'Modern 4 BHK Penthouse, Bangalore' },
        { image: step5, title: 'Modern 2 BHK Flat, Mumbai' },
        { image: step6, title: 'Rustic 3 BHK Flat, Bangalore' }
    ];

    return (
        <div className="image-slider">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="slide">
                        <img src={slide.image} alt={slide.title} className="slide-image" />
                        <div className="slide-caption">{slide.title}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Glim;
