import React from "react";
import HelpDeskCard from "../../components/helpdeskcard/help-desk-card.component";
import { Container, Row } from "react-bootstrap";

import "./help-desk.styles.scss";
const DSCLead = [
    {
        title: "Central Helpdesk",
        desc: "Hello world",
        img: "https://drive.google.com/uc?id=1OjiyVadEf8OAZiE7eB6sLBYHU8JBeduu",
    },
    {
        title: "Lab Testing Facility",
        desc: "Hello world",
        img: "https://drive.google.com/uc?id=1PzWg1Y7_1FB0IJkGQnTE7x61PwTBjXqc",
    },
    {
        title: "Hospital Admission",
        desc: "Hello world",
        img: "https://drive.google.com/uc?id=1yroVrDrBMmZUaQFKG5IwPwlkAaBOlrsk",
    },
    {
        title: "Oxygen Bed and Ventilator arragement",
        desc: "Hello world",
        img: "https://drive.google.com/uc?id=1euis01Dp391o5SbnYrRUZ8XxO1QU_CKO",
    },
    {
        title: "Medicines",
        desc: "Hello world",
        img: "https://drive.google.com/uc?id=1FMhXpEwFl78FItgkiL64bUvxoo-WVb6E",
    },
    {
        title: "Blood and Plasma",
        desc: "Hello world",
        img: "https://drive.google.com/uc?id=1syursfT_lLyug-Tutjyq4MNy0s3KgHDe",
    },
    {
        title: "Moral Support",
        desc: "Hello world",
        img: "https://drive.google.com/uc?id=1vj_HlFBZUcrUxpbLslPXwdVT7rbNRdbh",
    },
    {
        title: "Vaccination",
        desc: "Hello world",
        img: "https://drive.google.com/uc?id=1RcLL41CIg6SrZqSc1kw_DnhwBlfPptKz",
    },
    {
        title: "Doctors for Suggestions",
        desc: "Hello world",
        img: "https://drive.google.com/uc?id=1-NA4iWKXhSLNzYQrKdm_nJawDu78Lz4a",
    },
    {
        title: "Food Availability for the needy",
        desc: "Hello world",
        img: "https://drive.google.com/uc?id=1ut4ZWctD_tySlPsnoNLmmj7A5vmgO2X5",
    },
    {
        title: "Post Covid Communication",
        desc: "Hello world",
        img: "https://drive.google.com/uc?id=1ERAzJulbR2EuWI12FQ116PvQtHQ0FW8O",
    },
    {
        title: "Technical Support",
        desc: "Hello world",
        img: "https://drive.google.com/uc?id=188iyL7dKTyvHqvj9ahNnz9-Tfu-cTtfr",
    },
];

const HelpDeskPage = () => (
    <div className="help-desk-page page" style={{}}>
        <div className="help-desk-page-title">Help Desk</div>
        <div className="help-desk-page-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur magni qui voluptatibus quaerat quisquam provident. Vel
            vero similique enim excepturi quam rem, iste sunt ullam ipsam odit
            tenetur quos molestias.
        </div>
        <Container fluid>
            <Row>
                {DSCLead.map((member, index) => (
                    <div className="col-md-3" key={index}>
                        <HelpDeskCard
                            title={member.title}
                            desc={member.desc}
                            img={member.img}
                        />
                    </div>
                ))}
            </Row>
        </Container>
    </div>
);

export default HelpDeskPage;
