import React from 'react';
import { Card, Container, Row, Button, Col, Nav } from 'react-bootstrap'
import menu from '../data/menu-burger.json'
import burger from '../data/Burger.json'
import desserts from '../data/accompagnements.json'
import ScrollTop from "react-scrolltop-button";


class Carte extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row xs={1} md={2}>
                        <Nav fill defaultActiveKey="link-1">
                            <Nav.Item>
                                <Nav.Link href='#menu' eventKey="link-1" >Menus burgers/wraps</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='#burger' eventKey="link-2">Burger/Wraps</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='#accom' eventKey="link-3" >Accompagnements</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>
                    <Row xs={1} md={2}>
                        <Card.Body id='menu'>
                            <Card.Title>
                                Menus burgers / wraps
                            </Card.Title>
                        </Card.Body>
                    </Row>
                    <Row xs={1} md={2} className="g-4">
                        {menu.map((products) =>
                            <Col xl={3}>
                                <Card>
                                    <Card.Img variant="top" src={products.Image} />
                                    <Card.Body>
                                        <Card.Title>{products.Nom}</Card.Title>
                                        <Card.Text>
                                            {products.Ingredients}
                                        </Card.Text>
                                        <Card.Text>
                                            {products.Prix}
                                        </Card.Text>
                                        <Button variant="dark">Voir details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                    <Row xs={1} md={2} className="g-0">

                        <Card.Body id='burger'>
                            <Card.Title>
                                Burgers / Wraps
                            </Card.Title>
                        </Card.Body>
                    </Row>
                    <Row xs={1} md={2} className="g-4">
                        {burger.map((products) =>
                            <Col xl={3}>
                                <Card>
                                    <Card.Img variant="top" src={products.Image} />
                                    <Card.Body>
                                        <Card.Title>{products.Nom}</Card.Title>
                                        <Card.Text>
                                            {products.Ingredients}
                                        </Card.Text>
                                        <Card.Text>
                                            {products.Prix}
                                        </Card.Text>
                                        <Button variant="dark">Voir details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                    <Row xs={1} md={2} className="g-0 w-100">
                        <Card.Body id='accom'>
                            <Card.Title>
                                Accompagnements
                            </Card.Title>
                        </Card.Body>
                    </Row>
                    <Row xs={1} md={2} className="g-4">
                        {desserts.map((products) =>
                            <Col xl={3}>
                                <Card>
                                    <Card.Img variant="top" src={products.Image} />
                                    <Card.Body>
                                        <Card.Title>{products.Nom}</Card.Title>
                                        <Card.Text>
                                            {products.Ingredients}
                                        </Card.Text>
                                        <Card.Text>
                                            {products.Prix}
                                        </Card.Text>
                                        <Button variant="dark">Voir details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                    <ScrollTop breakpoint="5000"/>
                </Container>
            </>
        )
    }
}

export default Carte;


