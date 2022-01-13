import React from 'react';
import {
    Card, Container, Row, Col
} from 'react-bootstrap'
import PrettyRating from "pretty-rating-react";
import { faStar, faStarHalfAlt, } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const icons = {
    star: {
        complete: faStar,
        half: faStarHalfAlt,
        empty: farStar,
    }
}
const color = {
    star: ['#d9ad26', '#d9ad26', '#434b4d'],
}

class Restaurant extends React.Component {

    render() {
        return (
            <>
                <Container>
                    <div>
                        <h1>Google</h1>
                        <PrettyRating value={4.5} icons={icons.star} colors={color.star} />
                        <a href='https://urlz.fr/h8la'>+40 avis</a>
                    </div>





                    <div className="google-map">
                        <iframe title="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502.4007306551175!2d3.065083387733846!3d50.60963599385257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7a5e389e5b1a4036!2sRS%20Burger!5e0!3m2!1sfr!2sfr!4v1642083753686!5m2!1sfr!2sfr" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </Container>
            </>
        );
    }
};


export default Restaurant;