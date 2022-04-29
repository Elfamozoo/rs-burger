import React, { useState } from "react";
import "../styles/Navbar.scss";
import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import rsburger from '../assets/rsburger.png'
import { Link } from 'react-router-dom';

const Navibar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar className='navbar' sticky='top' bg="dark" variant="dark" expand={false}>
                <Container fluid>
                    <Link to="/">
                        <img
                            alt="logo"
                            src={rsburger}
                            width="80"
                            height="50"
                            style={{ marginLeft: "15px" }}
                            className="d-inline-block align-top" />
                    </Link>
                    <Navbar.Toggle onClick={handleShow} aria-controls="offcanvasNavbar"/>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        show={show} onHide={handleClose}
                    >
                        <Offcanvas.Header style={{ backgroundColor: "black" }} closeButton closeVariant='white'>
                            <Offcanvas.Title style={{ color: "white" }} id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body style={{ backgroundColor: "black" }}>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link onClick={handleClose} className="nav-link" style={{ color: "white" }} to="">Accueil</Link>
                                <Link onClick={handleClose} className="nav-link" style={{ color: "white" }} to="restaurant">Restaurant</Link>
                                <Link onClick={handleClose} className="nav-link" style={{ color: "white" }} to="carte">Carte</Link>
                                <Nav.Link style={{ color: "white" }} href="https://www.just-eat.fr/menu/rs-burger">Commander</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
};

export default Navibar;
