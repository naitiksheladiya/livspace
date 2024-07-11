import React, { useState } from 'react'
import logo from './image/livspace.458227b.svg'
import './css/navbae.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from './image/l1-type-a-page-top-banner-1-d-1614934772-2l3IR.avif'
import img2 from './image/type-b-offering-banner-d-v1-1615197204-ruuVf.avif'
import img3 from './image/vinviago-desk-1692623711-hHugW.avif'
import {BottomNavigation} from 'reactjs-bottom-navigation'
// import 'reactjs-bottom-navigation/dist/index.css'
import { BellOutlined, HomeOutlined, MenuFoldOutlined, SearchOutlined } from '@ant-design/icons';
// import Gridview from './Gridview';
export default function Navbar2() {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const handleMouseEnter = () => {
        setShow(true);
    };

    const handleMouseLeave = () => {
        setShow(false);
    };

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
    const handleMouseEnter3 = () => {
        setShow3(true);
    };

    const handleMouseLeave3 = () => {
        setShow3(false);
    };
    const handleMouseEnter4 = () => {
        setShow4(true);
    };

    const handleMouseLeave4 = () => {
        setShow4(false);
    };


    // const images1 = [
    //     { src: 'https://via.placeholder.com/150', alt: 'Placeholder 1' },
    //     { src: 'https://via.placeholder.com/150', alt: 'Placeholder 2' },
    //     { src: 'https://via.placeholder.com/150', alt: 'Placeholder 3' },
    //     { src: 'https://via.placeholder.com/150', alt: 'Placeholder 4' },
    //     { src: 'https://via.placeholder.com/150', alt: 'Placeholder 5' },
    //     // Add more images as needed
    // ];

    const bottomNavItems = [
        {
            title: 'Home',
            icon: <HomeOutlined style={{ fontSize: '18px' }} />,
            activeIcon: <HomeOutlined style={{ fontSize: '18px', color: '#fff' }} />
        },
        {
            title: 'Search',
            icon: <SearchOutlined style={{ fontSize: '18px' }} />,
            activeIcon: <SearchOutlined style={{ fontSize: '18px', color: '#fff' }} />
        },
        {
            title: 'Notifications',
            icon: <BellOutlined style={{ fontSize: '18px' }} />,
            activeIcon: <BellOutlined style={{ fontSize: '18px', color: '#fff' }} />
        },
        {
            title: 'Menu',
            icon: < MenuFoldOutlined style={{ fontSize: '18px' }} />,
            activeIcon: <MenuFoldOutlined style={{ fontSize: '18px', color: '#fff' }} />,
            onClick: () => alert('menu clicked')
        }
    ]

    return (
        <>
            {/* <Gridview images={images1} /> */}
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

            <Navbar expand="lg" className="bg-body-tertiary setnav">
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className='font '>How it works
                            </Nav.Link>
                            <NavDropdown
                                title="Offerings"
                                id="basic-nav-dropdown1"
                                className='font'
                                show={show3}
                                onMouseEnter={handleMouseEnter3}
                                onMouseLeave={handleMouseLeave3}
                            >

                                <div className='box2'>
                                    <div className='row'>

                                        <div className='col-lg-6 col-sm-6 col-md-6'>
                                            <p className='size'>EXPLORE OFFERINGS</p>
                                            <div className='round mt-3'>
                                                <div className='row setcenter'>
                                                    <div className='col-lg-4 col-md-4 col-sm-4 responsive'>
                                                        <img className='img2 ' src={img} />
                                                    </div>
                                                    <div className='col-lg-8 col-md-8 col-sm-8 responsive'>
                                                        <p className='subtitle_default'> Modular Interiors</p>
                                                        <p className='subtitle_default1'> Kitchens, wardrobes and storage  </p>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className='round mt-3'>
                                                <div className='row setcenter'>
                                                    <div className='col-lg-4 col-md-4 col-sm-4 responsive'>
                                                        <img className='img2' src={img2} />
                                                    </div>
                                                    <div className='col-lg-8 col-md-8 col-sm-8 responsive'>
                                                        <p className='subtitle_default'>
                                                            Full Home Interiors
                                                        </p>
                                                        <p className='subtitle_default1'>
                                                            End-to-end home interiors
                                                        </p>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className='round mt-3'>
                                                <div className='row setcenter'>
                                                    <div className='col-lg-4 col-md-4 col-sm-4 responsive'>
                                                        <img className='img2 ' src={img3} />
                                                    </div>
                                                    <div className='col-lg-8 col-md-8 col-sm-8 responsive '>
                                                        <p className='subtitle_default'>
                                                            Luxury interiors
                                                        </p>
                                                        <p className='subtitle_default1'>
                                                            Homes that redefine elegance
                                                        </p>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-sm-3 col-md-3 mt-3'>
                                            <p className='size' >KITCHEN</p>
                                            <li className='linkset'>
                                                Know Your Kitchen
                                            </li>
                                            <li className='linkset'>
                                                Kitchen Price Calculator
                                            </li>
                                            <li className='linkset'>
                                                Kitchen Components
                                            </li>
                                        </div>
                                        <div className='col-lg-3 col-sm-3 col-md-3 mt-3'>
                                            <p className='size'>WARDROBE</p>
                                            <li className='linkset'>
                                                Know Your Wardrobe
                                            </li>
                                            <li className='linkset'>
                                                Wardrobe Price Calculator
                                            </li>
                                            <li className='linkset'>
                                                Wardrobe Components
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </NavDropdown>

                            <NavDropdown
                                title="Price Calculators"
                                id="basic-nav-dropdown1"
                                className='font'
                                show={show4}
                                onMouseEnter={handleMouseEnter4}
                                onMouseLeave={handleMouseLeave4}
                            >

                                <div className='box'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-sm-6 col-md-6'>
                                            <li className='linkset'>
                                                Home Interior Price Calculator
                                            </li>
                                            <li className='linkset'>
                                                Kitchen Price Calculator
                                            </li>
                                            <li className='linkset'>
                                                Wardrobe Price Calculator
                                            </li>

                                        </div>
                                    </div>
                                </div>
                            </NavDropdown>
                            <Nav.Link href="#home" className='font '>The Modular Journey
                            </Nav.Link>
                            <Nav.Link href="#home" className='font '>Refer a Friend
                            </Nav.Link>
                            <Nav.Link href="#home" className='font '>Partner with us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <div>
                <BottomNavigation
                    items={bottomNavItems}
                    defaultSelected={0}
                    onItemClick={(item) => console.log(item)}
                />
            </div>

        </>
    )
}


