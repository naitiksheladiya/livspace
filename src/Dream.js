import React from 'react';
import './Dream.css';
import step1 from './images/image-109-1-1647859968-rMRnq.png';
import step2 from './images/image-109-1647859972-oEX2n.png';
import step3 from './images/image-109-2-1647859969-XgOnv.png';
import step4 from './images/image-109-3-1647859970-hy0It.png';
import step5 from './images/image-109-4-1647859971-zjq4j.png';

const Dream = () => {
    return (
        <>
            <div className="container">
                <nav className="breadcrumb">
                    Home / Interiors / How it works
                </nav>
                <h1>Your dream home in 5 steps!</h1>
                <p>Looking to design your home interiors? Here's how you can get started.</p>

                <div className="App">
                    <div className="process-flow">
                        <div className="step">
                            <div className="circle">
                                <img src={step1} alt="Meet Designer" />
                            </div>
                            <div>
                                <div className="title"> <span className='oneone'>1</span> Meet Designer</div>
                            </div>
                        </div>
                        <div className="arrow"></div>
                        <div className="step">
                            <div className="circle">
                                <img src={step2} alt="Book Livspace" />
                            </div>
                            <div className="title"> <span className='oneone'>2</span> Book Livspace</div>
                        </div>
                        <div className="arrow"></div>
                        <div className="step">
                            <div className="circle">
                                <img src={step3} alt="Place the order" />
                            </div>
                            <div className="title"> <span className='oneone'>3</span> Place the order</div>
                        </div>
                        <div className="arrow"></div>
                        <div className="step">
                            <div className="circle">
                                <img src={step4} alt="Installation begins" />
                            </div>
                            <div className="title"> <span className='oneone'>4</span> begins  Installation</div>
                        </div>
                        <div className="arrow"></div>
                        <div className="step">
                            <div className="circle">
                                <img src={step5} alt="Move in" />
                            </div>
                            <div className="title"> <span className='oneone'>5</span> Move in work</div>
                        </div>
                    </div>
                </div>
                <button className="start-button">START YOUR PROJECT NOW</button>
            </div>
        </>
    );
}

export default Dream;
