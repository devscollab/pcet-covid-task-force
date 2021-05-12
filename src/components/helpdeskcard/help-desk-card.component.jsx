import React from "react";
import { Button, Card } from "react-bootstrap";

function HelpDeskCard(props) {
    return (
        <Card
            style={{
                margin: "20px 10px 10px 10px",
                height: "100%",
            }}
        >
            <Card.Img
                style={{ height: "170px" }}
                variant="top"
                src={props.img}
            />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.desc}</Card.Text>
                <Button style={{ backgroundColor: "#018361" }}>
                    {props.button}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default HelpDeskCard;
