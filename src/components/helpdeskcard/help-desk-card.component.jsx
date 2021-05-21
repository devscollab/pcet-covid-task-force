import React from "react";
import { Button, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import "./help-desk-card.style.scss";

const onButtonClick = (route, history) => {
    let token = localStorage.getItem("token");
    if (token) {
        history.push(`/ask-for-help/${route}`);
    } else {
        history.push(`/login`);
    }
};

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
                        onButtonClick(route, history);
                    }}
                >
                    {button}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default withRouter(HelpDeskCard);
