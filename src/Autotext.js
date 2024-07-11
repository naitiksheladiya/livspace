import React from 'react'
import './css/autotext.css'
import fullhi from './image/full-hi-1682068037-mSqKH.avif'
import calculator from './image/calculator-1682069838-tZQ4E.avif'

export default function Autotext() {
    return (
        <>
            <div className='autotext container'>

                <h6 className='font_wr'>
                    Get the estimate for your
                    <div className="text-container">
                        <span style={{ '--i': 0 }}>Full Home</span>
                        <span style={{ '--i': 1 }}>Kitchen</span>
                        <span style={{ '--i': 2 }}>wardrobe</span>
                        <span style={{ '--i': 3 }}>Full Home</span>
                        <span style={{ '--i': 4 }}>Kitchen</span>
                    </div>
                </h6>
                <p className='pregara_size'>Calculate the approximate cost of doing up your home interiors</p>
                <div className='row control'>
                    <div className='col-lg-3 col-md-3 col-sm-3 Calculate'>

                        <div className='icon_flex'>

                            <img src={fullhi} />
                            <img className='img_logo_box' src={calculator} />
                        </div>

                        <p className='fulltext'>
                            Full Home Interior
                        </p>
                        <p className='fulltext1'>
                            Know the estimate price for your full home interiors
                        </p>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-3 Calculate'>


                        <div className='icon_flex'>

                            <img src={fullhi} />
                            <img className='img_logo_box' src={calculator} />
                        </div>

                        <p className='fulltext'>
                            Full Home Interior
                        </p>
                        <p className='fulltext1'>
                            Know the estimate price for your full home interiors
                        </p>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-3 Calculate'>

                        <div className='icon_flex'>

                            <img src={fullhi} />
                            <img className='img_logo_box' src={calculator} />
                        </div>
                        <p className='fulltext'>
                            Full Home Interior
                        </p>
                        <p className='fulltext1'>
                            Know the estimate price for your full home interiors
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}
