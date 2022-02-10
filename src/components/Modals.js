import React, { useState } from "react";
import "../styles/Modals.scss";
import { Container, Row, Button, Col, Image, Modal } from 'react-bootstrap'
import Carte from "./Carte";
import menu from '../data/menu-burger.json'
import burger from '../data/Burger.json'
import desserts from '../data/accompagnements.json'

const Modals = ({ show, id, type, onHide }) => {

    function getProductsById(product) {
        return product.Id === id
    }

    let product = ""
    if (type === "menus") {
        product = menu.find(getProductsById)
    } else if (type === "burger") {
        product = burger.find(getProductsById)
    } else if (type === "accompagnements") {
        product = desserts.find(getProductsById)
    }


    return (
        <>
            <Modal
                show = {show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Image className='img-details' fluid src={product.Image} />
                    <Modal.Title id="contained-modal-title-vcenter">
                        {product.Nom}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {product.Ingredients && <span>Composition : {product.Ingredients}</span>}
                    {product.Boissons && <span>Boissons : {product.Boissons}</span>}
                    {product.Sauce && <span>Sauces : {product.Sauce} </span>}
                </Modal.Body>
                <Modal.Footer>
                    Prix : {product.Prix}
                </Modal.Footer>
            </Modal>
        </>
    );


}

export default Modals;
