import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { Card, CardGroup, Container, Row, Nav } from 'react-bootstrap'
import Modals from "./Modals";
import ScrollTop from "react-scrolltop-button";
import "../styles/Carte.scss";
import { useQuery } from 'react-query'
import axios from "axios"




const Carte = () => {
    const [modalShow, setModalShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({})

    const fetchListCarte = () => {
        return axios.get('https://api.steinhq.com/v1/storages/6226806a4906bb053730b117/Carte')
    }

    const { isLoading, data: sheet } = useQuery(
        'Carte',
        fetchListCarte,
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false
        },
    )

    let menu = []
    let burger = []
    let desserts = []


    sheet?.data.forEach((product) => {
        if (product.Boissons) {
            menu.push(product)

        } else if (product.Ingredients) {
            burger.push(product)
        } else {
            desserts.push(product)
        }
    })

    return (
        <>
            <Modals
                show={modalShow}
                onHide={() => setModalShow(false)}
                product={selectedProduct}
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
                                setModalShow(true)
                                setSelectedProduct(products)
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
                            setModalShow(true)
                            setSelectedProduct(products)
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
                            setModalShow(true)
                            setSelectedProduct(products)
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