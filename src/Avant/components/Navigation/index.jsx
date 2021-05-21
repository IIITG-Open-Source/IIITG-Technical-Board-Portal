import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { NavHashLink as Link } from 'react-router-hash-link';
import Styles from './nav.module.css';
import AvantLogo from '../../Logo/avant.svg';

function Navigation(props) {
    return (
        <Navbar collapseOnSelect variant="light" bg="light" expand="lg" className={Styles.nav} >
            
            {/* Brand */}
            <Navbar.Brand as={Link} to="/avant">
                <Image src={AvantLogo} className={`${Styles.image} d-inline-block`} alt="Logo" />
            </Navbar.Brand>

            {/* Toggler */}
            <Navbar.Toggle aria-controls="club-nav" />
           
            {/* Nav Bar */}
            <Navbar.Collapse id="club-nav">
                <Nav className="ml-auto">

                    <Nav.Item>
                        <Nav.Link smooth as={Link} to="/">Technical Board</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link smooth as={Link} to={`/avant`}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link smooth as={Link} to={`/avant/#about`}>About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link smooth as={Link} to={`/avant/events`}>Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link smooth as={Link} to={`/avant/gallery`}>Gallery</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link smooth as={Link} to={`/avant/resources`}>Resources</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link smooth as={Link} to={`/avant/projects`}>Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link smooth as={Link} to={`/avant/past-coordinators`}>Past Coordinators</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link smooth as={Link} to={`/avant/#contact`}>Contact Us</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Navbar.Collapse>

        </Navbar >
    );
}

export default Navigation;