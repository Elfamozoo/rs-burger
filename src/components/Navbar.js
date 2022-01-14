import React from 'react';
import "../styles/Navbar.scss";
import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import rsburger from '../assets/rsburger.png'
import Accueil from './Accueil';



const Navibar = () => {

    return (
        <>
            <Navbar sticky='top' bg="dark" variant="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={rsburger}
                            width="80"
                            height="50"
                            style={{ marginLeft: "15px" }}
                            className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header style={{ backgroundColor: "black" }} closeButton closeVariant='white'>
                            <Offcanvas.Title style={{ color: "white" }} id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body style={{ backgroundColor: "black" }}>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link style={{ color: "white" }} href="/">Accueil</Nav.Link>
                                <Nav.Link style={{ color: "white" }} href="restaurant">Restaurant</Nav.Link>
                                <Nav.Link style={{ color: "white" }} href="carte">Carte</Nav.Link>
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

