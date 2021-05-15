import React from "react";
import VolunteerCards from '../../components/volunteer-cards/volunteer-cards.component'
import "./volunteer.styles.scss";
import { Col, Container, Row } from "react-bootstrap";
const categories = [
    {
        title: "Central Helpdesk",
        desc: "Contact the central help desk if you want to know how we can help you during this pandemic",
        img: "https://picsum.photos/550/275",
        button: "Ask for help",
    },
    {
        title: "Lab Testing Facility",
        desc: "If you need verified information of the pathology labs and which tests are available in which areas, we will try to provide all the information that you'll need to contact the correct lab",
        img: "https://picsum.photos/550/275",
        button: "Ask for help",
    },
    {
        title: "Hospital Admission",
        desc: "Hospital bed availability is one of the concerning issues right now and we can help you get verified information about the availability",
        img: "https://picsum.photos/550/275",
        button: "Ask for help",
    },
    {
        title: "Oxygen Bed and Ventilator arrangement",
        desc: "Critical cases might need Oxygen beds and ventilator arrangements and we can help you get correct information and contact details for the same",
        img: "https://picsum.photos/550/275",
        button: "Ask for help",
    },
    
];
const VolunteerPage = () => (
    <div className="volunteer-page page">
        <div className="volunteer-page-title">Volunteer</div>
        <div className="volunteer-page-description">
            <i>
                Helping one person might not change the world, but it could
                change the world for one person!
            </i>
            <br />
            <br />
            Please fill out the details in the categories given below if you are
            available for help and our task force will contact you if your
            assistance is required for someone affected by the COVID-19
            outbreak.
        </div>
        <Container fluid>
                    <Row>
                        {categories.map((member, index) => (
                            <Col xs={12} sm={6} lg={6} xl={6} key={index} className="cardCol">
                                <VolunteerCards title={member.title} desc={member.desc} img={member.img} button={member.button}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
        
    </div>
);

export default VolunteerPage;
