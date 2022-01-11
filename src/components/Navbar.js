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
                    <Navbar.Brand href="#home">
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
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav variant='dark' bg="dark" className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Accueil</Nav.Link>
                                <Nav.Link href="#action2">Restaurant</Nav.Link>
                                <Nav.Link href="#action2">Carte</Nav.Link>
                                <Nav.Link href="#action2">Commander</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>


        </>
    )
};

export default Navibar;

