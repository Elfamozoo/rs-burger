import React from "react";
import { Carousel, Card, Container, Row, Col, Image } from 'react-bootstrap'
import "../styles/App.scss";
import indien from '../assets/indien.jpg'
import chicken from '../assets/chicken.jpg'
import espagnol from '../assets/espagnol.jpg'
import normand from '../assets/normand.jpg'
import montagnard from '../assets/montagnard.jpg'
import rsburger from '../assets/rsburger.png'
import { Link } from 'react-router-dom';


class Accueil extends React.Component {

  render() {
    return (
      <>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={montagnard}
              alt="First slide"
            />
            <Carousel.Caption style={{
              top: "50%",
              transform: "translateY(-50%)",
              bottom: "initial"
            }}>
              <div className="titreCarousel">
                <Image style={{ maxHeight: "80px" }} fluid src={rsburger}></Image>
                <Link style={{ color: "white" }} to="carte"><h1>Decouvrez la carte en cliquant ici !</h1></Link>
              </div>
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
              <div className="titreCarousel">
                <Image style={{ maxHeight: "80px" }} fluid src={rsburger}></Image>
                <Link style={{ color: "white" }} to="restaurant"><h1>Viens manger directement sur place !</h1></Link>
              </div>
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
              <div className="titreCarousel">
                <Image style={{ maxHeight: "80px" }} fluid src={rsburger}></Image>
                <h1>On vous garantit les meilleurs ingrédients !</h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default Accueil;
