import React from "react";
import { Button, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import "./help-desk-card.style.scss";

function HelpDeskCard({ title, img, desc, button, route, history }) {
    return (
        <Card className="helpercard">
            <Card.Img
                className="helperimg"
                style={{ height: "200px" }}
                variant="top"
                src={img}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Button
                    className="helpercard-button"
                    onClick={() => {
                        history.push(`/ask-for-help/${route}`);
                    }}
                >
                    {button}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default withRouter(HelpDeskCard);
