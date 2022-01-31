import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardGroup, Container, Row, Button, Col, Nav } from 'react-bootstrap'
import "../styles/Carte.scss";
import menu from '../data/menu-burger.json'
import burger from '../data/Burger.json'
import desserts from '../data/accompagnements.json'
import ScrollTop from "react-scrolltop-button";


class Carte extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row xs={1} md={1}>
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
                    <Row xs={1} md={3}>
                        <Card.Body id='menu'>
                            <Card.Title>
                                Menus burgers / wraps
                            </Card.Title>
                        </Card.Body>
                    </Row>
                    <Row xs={1} md={1} lg={3} className="g-4">
                        {menu.map((products) =>
                            <Link className='default-link' to="/restaurant">
                                <CardGroup>
                                    <Card style={{ height: "28rem" }}>
                                        <Card.Img variant="top" src={products.Image} />
                                        <Card.Body>
                                            <Card.Title>{products.Nom}</Card.Title>
                                            <Card.Text>
                                                {products.Ingredients}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            {products.Prix}
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </Link>
                        )}
                    </Row>
                    <Row xs={1} md={3} className="g-0">
                        <Card.Body id='burger'>
                            <Card.Title>
                                Burgers / Wraps
                            </Card.Title>
                        </Card.Body>
                    </Row>
                    <Row xs={1} md={1} lg={3} className="g-4">
                        {burger.map((products) =>
                            <Link className='default-link' to="/restaurant">
                                <CardGroup>
                                    <Card style={{ height: "28rem" }}>
                                        <Card.Img variant="top" src={products.Image} />
                                        <Card.Body>
                                            <Card.Title>{products.Nom}</Card.Title>
                                            <Card.Text>
                                                {products.Ingredients}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            {products.Prix}
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </Link>
                        )}
                    </Row>
                    <Row xs={1} md={3} className="g-0">
                        <Card.Body id='accom'>
                            <Card.Title>
                                Accompagnements
                            </Card.Title>
                        </Card.Body>
                    </Row>
                    <Row xs={1} md={1} lg={3} className="g-4">
                        {desserts.map((products) =>
                            <Link className='default-link' to="/restaurant">
                                <CardGroup>
                                    <Card style={{ height: "28rem" }}>
                                        <Card.Img variant="top" src={products.Image} />
                                        <Card.Body>
                                            <Card.Title>{products.Nom}</Card.Title>
                                            <Card.Text>
                                                {products.Ingredients}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            {products.Prix}
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </Link>

                        )}
                    </Row>
                    <ScrollTop breakpoint="5000" />
                </Container>
            </>
        )
    }
}

export default Carte;


