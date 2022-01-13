import React from "react";
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap'
import "../styles/App.scss";
import indien from '../assets/indien.jpg'
import chicken from '../assets/chicken.jpg'
import espagnol from '../assets/espagnol.jpg'
import normand from '../assets/normand.jpg'
import montagnard from '../assets/montagnard.jpg'




class Accueil extends React.Component {
  render() {
    return (
      <>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{}}
              src={indien}
              alt="First slide"
            />
            <Carousel.Caption style={{
              top: "50%",
              transform: "translateY(-50%)",
              bottom: "initial"
            }}>
              <h1 className="titreCarousel">Venez déguster nos excellents burgers</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={chicken}
              alt="Second slide"
            />

            <Carousel.Caption style={{
              top: "50%",
              transform: "translateY(-50%)",
              bottom: "initial"
            }}>
              <h1 className="titreCarousel">100 % frais, pain boulanger et frites maison</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={espagnol}
              alt="Third slide"
            />

            <Carousel.Caption style={{
              top: "50%",
              transform: "translateY(-50%)",
              bottom: "initial"
            }}>
              <h1 className="titreCarousel">On vous garantit les meilleurs ingrédients</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row xs={1} md={2} className="g-4">
          <Card className="text-center">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Le burger du moment</Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Le normand
              </Card.Text>
            </Card.Body>
            <Card.Img src={normand} />
          </Card>
          <Card className="text-center">
            <Card.Body>
              <Card.Title >Le préféré des Clients</Card.Title>
              <Card.Text >
                Le montagnard
              </Card.Text>
            </Card.Body>
            <Card.Img src={montagnard} />
          </Card>
        </Row>
      </>
    );

  }
}

export default Accueil;
