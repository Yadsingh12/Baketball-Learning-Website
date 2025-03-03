import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';


import Logo from '../assets/Images/logo-transparent.png'
import "bootstrap-icons/font/bootstrap-icons.css";


const Navbar = () => {

    var size = window.innerWidth;
    var isMobile = false;
    if (size <= 992) {
        isMobile = true
    }
    useEffect(() => {
        size = window.innerWidth;
        if (size <= 992) {
            isMobile = false
        }
    })
    const [nav, setNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        // console.log(isOpen);
    };

    const changeValueOnScroll = () => {
        const scrollValue = document?.documentElement?.scrollTop;
        scrollValue > 30 ? setNav(true) : setNav(false);
    }

    return (
        <div className='Navigation-Bar'>
            <BootstrapNavbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
                <Container>
                    <BootstrapNavbar.Brand href="/" className='logo' >
                        {/* <img src={pupLogo} alt='logo' className='Picture img-fluid' style={{ height: "50px" }} /> */}
                        <img src={Logo} alt='logo' className='Picture' style={{ height: "60px" }} />
                    </BootstrapNavbar.Brand>
                    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
                        <i className={isOpen ? "bi bi-x fs-1" : "bi bi-list fs-1"}></i>
                    </BootstrapNavbar.Toggle>
                    <BootstrapNavbar.Collapse id="basic-navbar-nav" className={`sidebar ${isOpen ? "" : "close"}`}>
                        {/* <BootstrapNavbar.Collapse id="responsive-navbar-nav"> */}
                        <Nav className="navigation ms-auto">
                            <Nav.Link as={Link} eventKey="home" className='Nav-text' to={'/'}>Home</Nav.Link>
                            {/* <Nav.Link as={Link} eventKey="training" className='Nav-text' to={'/Training'}>Training</Nav.Link> */}
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className='Nav-text' style={{
                                    background: "transparent",
                                    border: "none",
                                    color: "inherit", // Inherit text color from navbar
                                    boxShadow: "none", // Remove any shadow 
                                    marginTop:"3px"
                                }}>
                                    Training
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} eventKey="beginner-training" to={'/beginner'}>Beginner</Dropdown.Item>
                                    <Dropdown.Item as={Link} eventKey="intermediate-training" to={'/intermediate'}>Intermediate</Dropdown.Item>
                                    <Dropdown.Item as={Link} eventKey="advance-training" to={'/advance'}>Advance</Dropdown.Item>                 
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link as={Link} eventKey="injury" className='Nav-text' to={'/injury'}>Injury</Nav.Link>
                            <Nav.Link as={Link} eventKey="questions" className='Nav-text' to={'/questions'}>Position</Nav.Link>
                            <Nav.Link as={Link} eventKey="uploadvideo" className='Nav-text' to={'/uploadvideo'}>Posture</Nav.Link>
                            <Nav.Link as={Link} eventKey="search" className='Nav-text' to={'/recommend'}>Recommendation</Nav.Link>
                        </Nav>
                    </BootstrapNavbar.Collapse>
                </Container>
            </BootstrapNavbar>
        </div>
    )
}

export default Navbar;
