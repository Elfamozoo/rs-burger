import React, { useState } from "react";
import "../styles/Footer.scss";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
import rsburger from '../assets/rsburger.png'
import { Button, Modal } from 'react-bootstrap'




const FooterRS = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Footer className='Footer'
                columns={[
                    {
                        title: 'Horaires',
                        items: [
                            {
                                title: 'Du Lundi au Vendredi et Dimanche :',

                            },
                            {
                                title: '12:00–15:00, 19:00–23:00',
                            },
                            {
                                title: 'Samedi :',

                            },
                            {
                                title: '19:00–01:00',
                            },
                        ],
                    },
                    {
                        icon: (
                            <img src={rsburger} alt="Rsburger" />
                        ),
                        title: 'RS Burger',
                        items: [
                            {
                                title: <span>© 2018 / {new Date().getFullYear()} - RS Burger - <span className="mention" onClick={handleShow}>Mention légales</span></span>

                            },
                        ],
                    },
                ]}
                bottom="Développé et designé par Zerga Illyes." 
            />



            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Mentions légales</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 modifié par la loi n°2011-525 du 17 mai 2011 pour la confiance dans l’économie numérique,
                    il est précisé aux utilisateurs du site rsburger.fr l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
                </Modal.Body>
                <Modal.Body>
                    SASU Société par actions simplifiée à associé unique RS Burger, au capital de 100 €
                </Modal.Body>
                <Modal.Body>
                    Entreprise sous le numéro : 84031352200012.
                </Modal.Body>
                <Modal.Body>
                    Responsable de publication : Illyes Zerga
                </Modal.Body>
                <Modal.Body>
                    Hébergement : 
                </Modal.Body>
                <Modal.Body>
                Signalement de contenus inappropriés ou illégaux : 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )











}



export default FooterRS;