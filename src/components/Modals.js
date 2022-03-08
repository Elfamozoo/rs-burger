import React, { useState } from "react";
import "../styles/Modals.scss";
import { Container, Row, Button, Col, Image, Modal } from 'react-bootstrap'
import Carte from "./Carte";

const Modals = ({ show, id, type, onHide, product }) => {



    return (
        <>
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={onHide}
            >

                <Modal.Header closeButton>
                    <Modal.Title className="titre-modal" id="contained-modal-title-vcenter">
                        {product.Nom}
                    </Modal.Title>
                </Modal.Header>
                <Image className='img-modal' fluid src={product.Image} />
                <Modal.Body className="corps-modal">
                    {product.Ingredients && <span>Composition : {product.Ingredients}</span>}
                </Modal.Body>
                <Modal.Body className="corps-modal">
                    {product.Sauce && <span>Sauces : {product.Sauce} </span>}
                </Modal.Body>
                <Modal.Body className="corps-modal">
                    {product.Boissons && <span>Boissons : {product.Boissons}</span>}
                </Modal.Body>
                <Modal.Footer className="footer-modal">
                    Prix : {product.Prix}
                </Modal.Footer>
            </Modal>
        </>
    );


}

export default Modals;
