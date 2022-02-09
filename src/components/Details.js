import React from 'react';
import "../styles/Details.scss";
import { useParams } from "react-router"
import { Card, CardGroup, Container, Row, Button, Col, Image } from 'react-bootstrap'
import menu from '../data/menu-burger.json'
import burger from '../data/Burger.json'
import desserts from '../data/accompagnements.json'

const Details = () => {
    const url = useParams()

    function getProductsById(product) {
        return product.Id === url.id
    }


    if (url.type === "menus") {
        const menuProducts = menu.find(getProductsById)
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Image className='img-details' fluid src={menuProducts.Image} />
                        </Col>
                        <Col>
                            <Card.Body className='text-details'>
                                <Card.Title>{menuProducts.Nom}</Card.Title>
                                <Card.Text>
                                    Composition : {menuProducts.Ingredients}
                                </Card.Text>
                                <Card.Text>
                                    Boissons : {menuProducts.Boissons}
                                </Card.Text>
                                <Card.Text>
                                    {menuProducts.Sauce && <span>Sauces : {menuProducts.Sauce} </span>}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                Prix : {menuProducts.Prix}
                            </Card.Footer>
                        </Col>
                    </Row>
                </Container>
            </>
        )

    } else if (url.type === "burgers") {
        const burgersProducts = burger.find(getProductsById)
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Image className='img-details' fluid src={burgersProducts.Image} />
                        </Col>
                        <Col>
                            <Card.Body className='text-details'>
                                <Card.Title>{burgersProducts.Nom}</Card.Title>
                                <Card.Text>
                                    Composition : {burgersProducts.Ingredients}
                                </Card.Text>
                                <Card.Text>
                                    Boissons : {burgersProducts.Boissons}
                                </Card.Text>
                                <Card.Text>
                                    {burgersProducts.Sauce && <span>Sauces : {burgersProducts.Sauce} </span>}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                Prix : {burgersProducts.Prix}
                            </Card.Footer>
                        </Col>
                    </Row>
                </Container>
            </>
        )

    } else if (url.type === "accompagnements") {
        const accomProducts = desserts.find(getProductsById)
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Image className='img-details' fluid src={accomProducts.Image} />
                        </Col>
                        <Col>
                            <Card.Body className='text-details'>
                                <Card.Title>{accomProducts.Nom}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                Prix : {accomProducts.Prix}
                            </Card.Footer>
                        </Col>
                    </Row>
                </Container>
            </>
        )

    }
}

export default Details