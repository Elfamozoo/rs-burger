import React from 'react';
import "../styles/Navbar.scss";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import rsburger from '../assets/rsburger.png'



const Navibar = () => {
    return (
        <>
            <Navbar fixed='top' bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={rsburger}
                        width="80"
                        height="50"
                        style={{ marginLeft: "15px" }}
                        className="d-inline-block align-top" />
                </Navbar.Brand>
            </Navbar>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav>


        </>
    )

};

export default Navibar;

