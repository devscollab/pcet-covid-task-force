import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./what-we-do-card.style.scss";

function WhatWeDOCard(props) {
    return (
        <Card className="whatwedocard">
            <Row className="whatwedocard-row">
                <Col md={5} className="whatwedocard-imgcol">
                    <Card.Img className="whatimg" src={props.img} />
                </Col>
                <Col md={7}>
                    <Card.Body className="whatwedocard-cardb">
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.desc}</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default WhatWeDOCard;
