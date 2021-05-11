import React from "react";

import { ReactComponent as HelpDeskColorLogo } from "../../assets/help-desk-color.svg";
import { ReactComponent as VolunteerColorLogo } from "../../assets/volunteer-color.svg";
import { ReactComponent as WhatWeDoColorLogo } from "../../assets/what-we-do-color.svg";
import { ReactComponent as ContactUsColorLogo } from "../../assets/contact-us-color.svg";

import "./home.styles.scss";

const HomePage = () => (
    <div className="home-page page">
        <div className="home-page-title">
            PCET's Students have joined to form a Covid Task Force for You
        </div>
        <div className="home-page-img-txt-capsule">
            <div className="home-page-img-txt-capsule-img">
                <img src="https://picsum.photos/300/150" alt="Home Page" />
            </div>
            <div className="home-page-img-txt-capsule-description">
                Hope you and your family members are safe in this pandemic
                situation. We have observed that few of our students, alumni,
                and their immediate family members need some medical or other
                related help. To help our students, alumni, and their immediate
                family members, we have created PCET STUDENTS COVID TASK FORCE,
                which will try to help the concerned people. Some tasks may be
                like Lab Testing, Hospital admission, Oxygen bed, Ventilator,
                Plasma, medicines, moral support, arranging Isolation Beds,
                medical suggestions from Doctors, etc.
            </div>
        </div>
        <div className="quick-links-container">
            <div
                className="quick-link"
                onClick={() => console.log("Help Desk")}
            >
                <HelpDeskColorLogo className="quick-link-img" />
                <div className="quick-link-text">Help Desk</div>
            </div>
            <div className="quick-link">
                <VolunteerColorLogo className="quick-link-img" />
                <div className="quick-link-text">Volunteer</div>
            </div>
            <div className="quick-link">
                <WhatWeDoColorLogo className="quick-link-img" />
                <div className="quick-link-text">What We Do</div>
            </div>
            <div className="quick-link">
                <ContactUsColorLogo className="quick-link-img" />
                <div className="quick-link-text">Contact Us</div>
            </div>
        </div>
    </div>
);

export default HomePage;
