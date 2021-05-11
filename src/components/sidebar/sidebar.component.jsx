import React from "react";
import { withRouter } from "react-router-dom";

import { ReactComponent as HomeLogo } from "../../assets/home.svg";
import { ReactComponent as HelpDeskLogo } from "../../assets/help-desk.svg";
import { ReactComponent as VolunteerLogo } from "../../assets/volunteer.svg";
import { ReactComponent as WhatWeDoLogo } from "../../assets/what-we-do.svg";
import { ReactComponent as ContactUsLogo } from "../../assets/contact-us.svg";

import "./sidebar.styles.scss";

const Sidebar = ({ location, history }) => {
    let activatedItemString = location.pathname.substring(1);
    let res = activatedItemString.indexOf("/");

    if (res !== -1) {
        activatedItemString = activatedItemString.substring(0, res);
    }

    const items = {
        "/": 1,
        "/help-desk": 2,
        "/volunteer": 3,
        "/what-we-do": 4,
        "/contact-us": 5,
    };

    const activatedItem = items[`/${activatedItemString}`];

    return (
        <div className="sidebar">
            <div
                className={`${
                    activatedItem === 1 ? "activated" : ""
                } sidebar-1`}
                onClick={() => history.push("/")}
            >
                <HomeLogo className="logo" />
            </div>
            <div
                className={`${
                    activatedItem === 2 ? "activated" : ""
                } sidebar-2`}
                onClick={() => history.push("/help-desk")}
            >
                <HelpDeskLogo className="logo" />
            </div>
            <div
                className={`${
                    activatedItem === 3 ? "activated" : ""
                } sidebar-3`}
                onClick={() => history.push("/volunteer")}
            >
                <VolunteerLogo className="logo" />
            </div>
            <div
                className={`${
                    activatedItem === 4 ? "activated" : ""
                } sidebar-4`}
                onClick={() => history.push("/what-we-do")}
            >
                <WhatWeDoLogo className="logo" />
            </div>
            <div
                className={`${
                    activatedItem === 5 ? "activated" : ""
                } sidebar-5`}
                onClick={() => history.push("/contact-us")}
            >
                <ContactUsLogo className="logo" />
            </div>
        </div>
    );
};

export default withRouter(Sidebar);
