import React from 'react';
import { useParams } from "react-router"
import { Card, CardGroup, Container, Row, Button, Col } from 'react-bootstrap'
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
                <CardGroup>
                    <Card className='default-card'>
                        <Card.Img variant="top" src={menuProducts.Image} />
                        <Card.Body>
                            <Card.Title>{menuProducts.Nom}</Card.Title>
                            <Card.Text>
                                {menuProducts.Ingredients}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            {menuProducts.Prix}
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </>
        )

    } else if (url.type === "burgers") {
        const burgersProducts = burger.find(getProductsById)
        return (
            <>
                <CardGroup>
                    <Card className='default-card'>
                        <Card.Img variant="top" src={burgersProducts.Image} />
                        <Card.Body>
                            <Card.Title>{burgersProducts.Nom}</Card.Title>
                            <Card.Text>
                                {burgersProducts.Ingredients}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            {burgersProducts.Prix}
                        </Card.Footer>
                    </Card>
                </CardGroup>

            </>
        )

    } else if (url.type === "accompagnements") {
        const accomProducts = desserts.find(getProductsById)
        return (
            <>
                <CardGroup>
                    <Card className='default-card'>
                        <Card.Img variant="top" src={accomProducts.Image} />
                        <Card.Body>
                            <Card.Title>{accomProducts.Nom}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            {accomProducts.Prix}
                        </Card.Footer>
                    </Card>
                </CardGroup>

            </>
        )

    }
}

export default Details