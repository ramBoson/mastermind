import React from 'react';
import {
    Link
  } from "react-router-dom";
import {Navbar, Nav, Container} from 'react-bootstrap'
import Logo from '../assets/images/logo.png'

function Header() {
    return (
        <header className="header">
            <Navbar collapseOnSelect expand="md">
                <Container>
                    <Navbar.Brand href="#home"><img src={Logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {/* <NavDropdown title="INVEST" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                            </NavDropdown> */}
                            <Link className="nav-item" to="/">Home</Link>
                            <Link className="nav-item" to="/invest">INVEST</Link>
                            <Link className="nav-item" to="/portfolio">PORTFOLIO</Link>
                            {/* <Link className="nav-item" to="/">ABOUT</Link> */}
                            <Link className="nav-item" to="/contact-us">CONTACT US</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </header>
    );
}

export default Header;