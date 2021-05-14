import React from "react";
import { Button, Card } from "react-bootstrap";

import "./help-desk-card.style.scss";

function HelpDeskCard(props) {
    return (
        <Card className="helpercard">
            <Card.Img className="helperimg"
                style={{ height: "200px" }}
                variant="top"
                src={props.img}
            />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.desc}</Card.Text>
                <Button className="helpercard-button">{props.button}</Button>
            </Card.Body>
        </Card>
    );
}

export default HelpDeskCard;
