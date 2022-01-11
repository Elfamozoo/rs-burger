import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import indien from '../assets/indien.jpg'
import chicken from '../assets/chicken.jpg'
import espagnol from '../assets/espagnol.jpg'



class Accueil extends React.Component {
  render() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={indien}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Venez déguster nos excellents burgers</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={chicken}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>100 % frais, pain boulanger et frites maison</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={espagnol}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>On vous garantit les meilleurs ingrédients</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );

  }
}

export default Accueil;
