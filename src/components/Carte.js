import React from 'react';
import { Card, Container, Row, Button, Col } from 'react-bootstrap'
import menu from '../data/menu-burger.json'
import burger from '../data/Burger.json'
import desserts from '../data/accompagnements.json'


class Carte extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row xs={1} md={2} className="g-4">
                        {menu.map((products) =>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={products.Image} />
                                <Card.Body>
                                    <Card.Title>{products.Nom}</Card.Title>
                                    <Card.Text>
                                        {products.Ingredients}
                                    </Card.Text>
                                    <Card.Text>
                                        {products.Prix}
                                    </Card.Text>
                                    <Button variant="primary">Voir details</Button>
                                </Card.Body>
                            </Card>

                        )}
                    </Row>
                    <Row xs={1} md={2} className="g-4">
                        {burger.map((products) =>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={products.Image} />
                                <Card.Body>
                                    <Card.Title>{products.Nom}</Card.Title>
                                    <Card.Text>
                                        {products.Ingredients}
                                    </Card.Text>
                                    <Card.Text>
                                        {products.Prix}
                                    </Card.Text>
                                    <Button variant="primary">Voir details</Button>
                                </Card.Body>
                            </Card>

                        )}
                    </Row>
                    <Row xs={1} md={2} className="g-4">
                        {desserts.map((products) =>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={products.Image} />
                                <Card.Body>
                                    <Card.Title>{products.Nom}</Card.Title>
                                    <Card.Text>
                                        {products.Ingredients}
                                    </Card.Text>
                                    <Card.Text>
                                        {products.Prix}
                                    </Card.Text>
                                    <Button variant="primary">Voir details</Button>
                                </Card.Body>
                            </Card>

                        )}
                    </Row>
                </Container>
            </>
        )
    }
}

export default Carte;


