import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { Card, CardGroup, Container, Row, Button, Col, Nav, Modal, Placeholder } from 'react-bootstrap'
import Modals from "./Modals";
import ScrollTop from "react-scrolltop-button";
import "../styles/Carte.scss";
import { useQuery } from 'react-query'
import axios from "axios"




const Carte = () => {
    const [modalShow, setModalShow] = useState(false);
    const [id, setId] = useState(0)
    const [type, setType] = useState("")
    const [selectedProduct, setSelectedProduct] = useState({})


    const fetchListCarte = () => {
        return axios.get('https://api.steinhq.com/v1/storages/6226806a4906bb053730b117/Carte')
    }


 /* It's a function that fetch the data from the API. */
    const { isLoading, data: sheet, isError, error } = useQuery(
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

    /* It's a loop that push the products in the array. */
    sheet?.data.forEach((product) => {
        if (product.Boissons) {
            menu.push(product)

        } else if (product.Ingredients) {
            burger.push(product)
        } else {
            desserts.push(product)
        }

        console.log(menu)

    })






    return (
        <>
            <Modals
                show={modalShow}
                id={id}
                type={type}
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
                                setId(products.Id)
                                setType("menus")
                                setModalShow(true)
                                setSelectedProduct(products)
                            }}>
                            <CardGroup>
                                {isLoading ? <> <Placeholder as={Card.Title} animation="glow">
                                    <Placeholder xs={6} />
                                </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                        <Placeholder xs={6} /> <Placeholder xs={8} />
                                    </Placeholder></> : <Card className='default-card'>
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
                                </Card>}
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
                            setId(products.Id)
                            setType("accompagnements")
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


