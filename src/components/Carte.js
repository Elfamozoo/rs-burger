import React from 'react';
import { Card, Container, Row, Button, Col, Nav } from 'react-bootstrap'
import menu from '../data/menu-burger.json'
import burger from '../data/Burger.json'
import desserts from '../data/accompagnements.json'
import banmenu from '../assets/banniere_menu.png'
import banburger from '../assets/banniere_burger.png'
import banaccom from '../assets/banniere_accom.png'


class Carte extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row xs={1} md={2}>
                        <Nav fill variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" >Menus burgers/wraps</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Burger/Wraps</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-3" >Accompagnements</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>
                    <Row xs={1} md={2}>
                        <Card.Body>
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

                        <Card.Body>
                            <Card.Title>
                                Burger / Wraps
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
                        <Card.Body>
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
                </Container>
            </>
        )
    }
}

export default Carte;


