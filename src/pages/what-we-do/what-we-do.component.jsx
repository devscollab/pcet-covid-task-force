import React from "react";
import WhatWeDoCard from "../../components/what-we-do-card/what-we-do-card.component";
import { Col, Container, Row } from "react-bootstrap";

import "./what-we-do.styles.scss";

import { whatWeDoData } from "./data";

const WhatWeDoPage = () => {
    return (
        <div className="what-we-do-page page">
            <div className="help-desk-page-title">About Us</div>
            <div className="help-desk-page-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur magni qui voluptatibus quaerat quisquam provident.
                Vel vero similique enim excepturi quam rem, iste sunt ullam
                ipsam odit tenetur quos molestias.
            </div>
            <Container fluid>
                <Row>
                    {whatWeDoData.map((member, index) => (
                        <Col xs={12} lg={6} key={index} className="cardCol">
                            <WhatWeDoCard {...member} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default WhatWeDoPage;
