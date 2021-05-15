import React from "react";
import { Button, Card } from "react-bootstrap";
import './volunteer-cards.style.scss'
function VolunteerCards(props) {
    return (
        <Card className="volcard"
            style={{
               minwidth:"550px"    
            }}
        >
            <Card.Img className="volimg"
                style={{ height: "275px" }}
                variant="top"
                src={props.img}
            />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.desc}</Card.Text>
                <Button className="helpercard-button" style={{ backgroundColor: "#018361" }}>
                    {props.button}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default VolunteerCards;
