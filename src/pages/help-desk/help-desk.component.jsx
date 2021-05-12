import React from "react";
import HelpDeskCard from "../../components/helpdeskcard/help-desk-card.component";
import { Container, Row } from "react-bootstrap";

import { helpDeskData } from "./data";

import "./help-desk.styles.scss";

class HelpDeskPage extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: helpDeskData,
        };
    }

    render() {
        const { categories } = this.state;
        return (
            <div className="help-desk-page page" style={{}}>
                <div className="help-desk-page-title">Help Desk</div>
                <div className="help-desk-page-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequuntur magni qui voluptatibus quaerat quisquam
                    provident. Vel vero similique enim excepturi quam rem, iste
                    sunt ullam ipsam odit tenetur quos molestias.
                </div>
                <Container fluid>
                    <Row>
                        {categories.map((member, index) => (
                            <div className="col-md-3" key={index}>
                                <HelpDeskCard {...member} />
                            </div>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HelpDeskPage;
