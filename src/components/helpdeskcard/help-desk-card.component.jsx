import React from "react";
import { Button, Card } from "react-bootstrap";

function HelpDeskCard(props) {
    return (
        <div>
            <Card style={{ margin: "20px 10px 10px 10px" }}>
                <Card.Img
                    style={{ height: "170px" }}
                    variant="top"
                    src={props.img}
                />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.desc}</Card.Text>
                    <Button style={{ backgroundColor: "#018361" }}>
                        Ask for help
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default HelpDeskCard;
