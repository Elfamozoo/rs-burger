import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { Card, CardGroup, Container, Row, Button, Col, Nav, Modal } from 'react-bootstrap'
import "../styles/Carte.scss";
import menu from '../data/menu-burger.json'
import burger from '../data/Burger.json'
import desserts from '../data/accompagnements.json'
import ScrollTop from "react-scrolltop-button";
import Modals from "./Modals";

const Carte = () => {
    const [modalShow, setModalShow] = useState(false);
    const [id, setId] = useState(0)
    const [type, setType] = useState("")

    return (
        <>
            <Modals
                show={modalShow}
                id={id}
                type={type}
                onHide={() => setModalShow(false)}
            />
            <Container>
                <Row xs={1} md={1}>
                    <Nav fill defaultActiveKey="link-1">
                        <Nav.Item>
                            <Link className="onglets" to='#menu' >Menus burgers/wraps</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="onglets" to='#burger'>Burger/Wraps</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="onglets" to='#accom' >Accompagnements</Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row xs={1} md={3}>
                    <Card.Body id='menu'>
                        <Card.Title>
                            Menus burgers / wraps
                        </Card.Title>
                    </Card.Body>
                </Row>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {menu.map((products) =>
                        <div className='default-link'
                            onClick={() => {
                                setId(products.Id)
                                setType("menus")
                                setModalShow(true)
                            }}>
                            <CardGroup>
                                <Card className='default-card'>
                                    <Card.Img variant="top" src={products.Image} />
                                    <Card.Body>
                                        <Card.Title className="titre-card">{products.Nom}</Card.Title>
                                        <Card.Text className="corps-card">
                                            {products.Ingredients}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="footer-card">
                                        {products.Prix}
                                    </Card.Footer>
                                </Card>
                            </CardGroup>
                        </div>
                    )}
                </Row>

                <Row xs={1} md={3} className="g-0">
                    <Card.Body id='burger'>
                        <Card.Title>
                            Burgers / Wraps
                        </Card.Title>
                    </Card.Body>
                </Row>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {burger.map((products) =>
                        <div className='default-link' onClick={() => {
                            setId(products.Id)
                            setType("burgers")
                            setModalShow(true)
                        }}>
                            <CardGroup>
                                <Card className='default-card' >
                                    <Card.Img variant="top" src={products.Image} />
                                    <Card.Body>
                                        <Card.Title className="titre-card">{products.Nom}</Card.Title>
                                        <Card.Text className="corps-card">
                                            {products.Ingredients}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="footer-card">
                                        {products.Prix}
                                    </Card.Footer>
                                </Card>
                            </CardGroup>
                        </div>
                    )}
                </Row>
                <Row xs={1} md={3} className="g-0">
                    <Card.Body id='accom'>
                        <Card.Title>
                            Accompagnements
                        </Card.Title>
                    </Card.Body>
                </Row>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {desserts.map((products) =>
                        <div className='default-link' onClick={() => {
                            setId(products.Id)
                            setType("accompagnements")
                            setModalShow(true)
                        }}>
                            <CardGroup>
                                <Card className='default-card'>
                                    <Card.Img variant="top" src={products.Image} />
                                    <Card.Body>
                                        <Card.Title className="titre-card">{products.Nom}</Card.Title>
                                    </Card.Body>
                                    <Card.Footer className="footer-card">
                                        {products.Prix}
                                    </Card.Footer>
                                </Card>
                            </CardGroup>
                        </div>

                    )}
                </Row>
                <ScrollTop breakpoint="5000" />
            </Container>
        </>
    )
}

export default Carte;


