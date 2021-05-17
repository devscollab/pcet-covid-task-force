import React from "react";
import HelpDeskCard from "../../components/helpdeskcard/help-desk-card.component";
import { Col, Container, Row } from "react-bootstrap";

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
                    Fill out the form for any given category below to ask for
                    help. Please note that filling out the forms on this website
                    does not guarantee that we'll provide whatever required but
                    we will give it our 100% to find resources and contact you
                    back with any assistance available. You can contact us
                    directly after filling out the forms to track the status.
                </div>
                <Container fluid>
                    <Row>
                        {categories.map((member, index) => (
                            <Col
                                xs={12}
                                sm={6}
                                lg={4}
                                xl={3}
                                key={index}
                                className="cardCol"
                            >
                                <HelpDeskCard {...member} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HelpDeskPage;
