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
                        {props.title !==
                        "PCET Covid Task Force Web Platform" ? (
                            <Card.Text>{props.desc}</Card.Text>
                        ) : (
                            <Card.Text>
                                This web platform is built using React, MongoDB,
                                hosted on Azure App Services and developed by{" "}
                                <br />
                                <a
                                    href="https://github.com/tejasmorkar"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    @tejasmorkar
                                </a>
                                <br />
                                <a
                                    href="https://github.com/SuyashSonawane"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    @SuyashSonawane
                                </a>
                                <br />
                                <a
                                    href="https://github.com/Yash0411"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    @Yash0411
                                </a>
                                <br />
                                <a
                                    href="https://github.com/shubhd556"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    @shubhd556
                                </a>
                                <br />
                                <a
                                    href="https://github.com/raibove"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    @raibove
                                </a>
                                <br />
                                <a
                                    href="https://github.com/yashb867"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    @yashb867
                                </a>
                                <br />
                                <a
                                    href="https://github.com/shubhamrajput0369"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    @shubhamrajput0369
                                </a>
                                <br />
                                <a
                                    href="https://github.com/cajoshi"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    @cajoshi
                                </a>
                                <br />
                                <a
                                    href="https://github.com/jrakshit749"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    @jrakshit749
                                </a>
                            </Card.Text>
                        )}
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default WhatWeDOCard;
