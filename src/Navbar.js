import React, { useState } from 'react'
import logo from './image/livspace.458227b.svg'
import './css/navbae.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar2() {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleMouseEnter1 = () => {
        setShow1(true);
    };

    const handleMouseLeave1 = () => {
        setShow1(false);
    };
    const handleMouseEnter2 = () => {
        setShow2(true);
    };

    const handleMouseLeave2 = () => {
        setShow2(false);
    };
    const handleMouseEnter = () => {
        setShow(true);
    };

    const handleMouseLeave = () => {
        setShow(false);
    };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary setnav">
                <Container>
                    <Navbar.Brand href="#home"><img className='img' src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className='font ' >
                                Interiors
                            </Nav.Link>

                            <NavDropdown
                                title="Design Ideas"
                                id="basic-nav-dropdown"
                                className='font'
                                show={show}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >

                                <div className='box'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-sm-4 col-md-4'>
                                            <li className='linkset'>
                                                Modular Kitchen Designs
                                            </li>
                                            <li className='linkset'>
                                                Wardrobe Designs
                                            </li>
                                            <li className='linkset'>
                                                Bathroom Designs
                                            </li>
                                            <li className='linkset'>
                                                Master Bedroom Designs
                                            </li>
                                            <li className='linkset'>
                                                Living Room Designs
                                            </li>
                                            <li className='linkset'>
                                                Pooja Room Designs
                                            </li>
                                            <li className='linkset'>
                                                TV Unit Designs
                                            </li>
                                            <li className='linkset'>
                                                False Ceiling Designs
                                            </li>
                                            <li className='linkset'>
                                                Kids Bedroom Designs
                                            </li>
                                            <li className='linkset'>
                                                Balcony Designs
                                            </li>
                                        </div> <div className='col-lg-4 col-sm-4 col-md-4'>
                                            <li className='linkset'>
                                                Dining Room Designs
                                            </li>
                                            <li className='linkset'>
                                                Foyer Designs
                                            </li>
                                            <li className='linkset'>
                                                Homes by Livspace
                                            </li>
                                            <li className='linkset' >
                                                Home Office Designs
                                            </li>
                                            <li className='linkset'  >
                                                Guest Bedroom Designs
                                            </li>
                                            <li className='linkset'>
                                                Window Designs
                                            </li>
                                            <li className='linkset'>
                                                Flooring Designs
                                            </li>
                                            <li className='linkset'>
                                                Wall Decor Designs
                                            </li>
                                            <li className='linkset'>
                                                Wall Paint Designs
                                            </li>
                                            <li className='linkset'>
                                                Home Wallpaper Designs
                                            </li>
                                        </div>
                                        <div className='col-lg-4 col-sm-4 col-md-4'>
                                            <li className='linkset'>
                                                Tile Designs
                                            </li>
                                            <li className='linkset'>
                                                Study Room Designs
                                            </li>
                                            <li className='linkset'>
                                                Kitchen Sinks
                                            </li>
                                            <li className='linkset'>
                                                Space Saving Designs
                                            </li>

                                        </div>
                                    </div>


                                </div>





                            </NavDropdown>
                            <NavDropdown
                                title="Magazine"
                                id="basic-nav-dropdown1"
                                className='font'
                                show={show1}
                                onMouseEnter={handleMouseEnter1}
                                onMouseLeave={handleMouseLeave1}
                            >

                                <div className='box'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-sm-6 col-md-6'>
                                            <li className='linkset'> Room ldeas</li>
                                            <li className='linkset'>Decor & Inspiration</li>
                                            <li className='linkset'>Ceiling Design </li>
                                            <li className='linkset'>
                                                Furniture Ideas
                                            </li>
                                            <li className='linkset'> Home Decor</li>
                                            <li className='linkset'> Lighting Ideas</li>
                                            <li className='linkset'>  Wall Desing Ideas</li>

                                        </div>

                                        <div className='col-lg-6 col-sm-6 col-md-6'>
                                            <li className='linkset'>
                                                Home Organisations
                                            </li>
                                            <li className='linkset'>
                                                Materiais Guide
                                            </li>
                                            <li className='linkset'>
                                                Home  Renovations Ideas
                                            </li>
                                            <li className='linkset' >
                                                Expert Adivece
                                            </li>
                                            <li className='linkset'  >
                                                Interior Advice
                                            </li>
                                            <li className='linkset'>
                                                Vastu Tips
                                            </li>

                                        </div>
                                    </div>
                                </div>





                            </NavDropdown>
                            <Nav.Link href="#link" className='font'>Livspace TV
                            </Nav.Link>
                            <NavDropdown
                                title="More"
                                id="basic-nav-dropdown1"
                                className='font'
                                show={show2}
                                onMouseEnter={handleMouseEnter2}
                                onMouseLeave={handleMouseLeave2}
                            >

                                <div className='box1'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-sm-6 col-md-6'>
                                            <li className='linkset'>Own A Franchise</li>
                                            <li className='linkset'>Press</li>
                                            <li className='linkset'>Careers </li>
                                            <li className='linkset'>
                                                About Us
                                            </li>
                                            <li className='linkset'> Contact Us</li>
                                            <li className='linkset'> Policies</li>


                                        </div>


                                    </div>
                                </div>





                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


