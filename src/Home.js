import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import dining from './image/dining-room-webbanner-d-1689597794-Kyvb0.avif'
import homepage from './image/homepage-banner-web-1714034622-yivWL.avif'
import kitchen from './image/kitchen-homepage-banner-web-1689683306-uyQOf.avif'
import './css/home.css'
export default function Home() {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1500}>
                    < img className='rgbset' src={homepage} />
                    <Carousel.Caption>
                        <h2 className='heading'>
                            Home to beautiful interiors
                        </h2>
                        <button className='componet'>
                            <h5 className='btn_font' >
                                Book free consultation
                            </h5>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={kitchen} />
                    <Carousel.Caption>
                        <h2 className='heading'>
                            Want to know how much your kitchen interiors will cost?
                        </h2>
                        <button className='componet2'>
                            <h5 className='btn_font' >
                                Calculate now
                            </h5>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    < img className='rgbset' src={dining} />
                    <Carousel.Caption>
                        <h2 className='heading'>
                            Come say hi to beautiful interiors
                        </h2>
                        <p className='font_pregara'>
                            Visit your nearest Experience Centre to touch, feel and experience our products
                        </p>
                        <button className='componet3'>
                            <h5 className='btn_font' >
                                Visit us
                            </h5>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </>
    )
}
