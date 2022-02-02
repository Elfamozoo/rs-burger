import React from 'react';
import { Card, Container, Row, Button, Col } from 'react-bootstrap'

class Details extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={{ order: 2 }} md={{ span: 6, order: 1 }}>
                    <Card>
                        Card 1
                    </Card>
                </Col>
                <Col xs={{ order: 1 }} md={{ order: 2 }}>
                    <Card>
                        Card 2
                    </Card>
                    <Card className="d-none d-md-block">
                        Card 3 hidden only on smaller screens
                    </Card>
                </Col>
                <Col xs={{ order: 3 }} className="d-sm-block d-md-none">
                    <Card>
                        Card 3 hidden on medium to x-large screens
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default Details;