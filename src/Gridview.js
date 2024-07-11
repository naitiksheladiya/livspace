import React from 'react';
import './Gridview.css';
import Carousel from 'react-bootstrap/Carousel';
import { hover } from '@testing-library/user-event/dist/hover';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Gridview() {
    return (
        <>


            <div className='container'>
                <Carousel onPause={hover} interval={null}>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <div class="image-grid">
                            <div class="image-row">
                                {/* liveing room */}
                                <div class="image image-03"><h6 className='text-change'>Living Room</h6></div>
                                <div class="image image-01"><h6 className='text-change'>Master Bedroom</h6></div>
                                <div class="image image-02"><h6 className='text-change'>False Ceiling </h6></div>
                            </div>
                            <div class="image-row">
                                <div class="image image-06"><h6 className='text-change'>Homes by Livspace</h6></div>
                                <div class="image image-08"><h6 className='text-change'>Kitchen</h6></div>
                                <div class="image image-07"><h6 className='text-change'>Wardrobe</h6></div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <div class="image-grid">
                            <div class="image-row">
                                <div class="image image-05"><h6 className='text-change'>Kids Room</h6></div>
                                <div class="image image-04"><h6 className='text-change'>Home Office</h6></div>
                                <div class="image image-09"><h6 className='text-change'>Guest Bedroom</h6></div>
                            </div>
                            <div class="image-row">
                                <div class="image image-10"><h6 className='text-change'>Foyer</h6></div>
                                <div class="image image-11"><h6 className='text-change'>Dining Room</h6></div>
                                <div class="image image-12"><h6 className='text-change'>Bathroom</h6></div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default Gridview;
