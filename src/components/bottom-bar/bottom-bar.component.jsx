import React from "react";
import { withRouter } from "react-router-dom";

import { ReactComponent as HomeLogo } from "../../assets/home.svg";
import { ReactComponent as HelpDeskLogo } from "../../assets/help-desk.svg";
import { ReactComponent as VolunteerLogo } from "../../assets/volunteer.svg";
import { ReactComponent as WhatWeDoLogo } from "../../assets/what-we-do.svg";
import { ReactComponent as ContactUsLogo } from "../../assets/contact-us.svg";

import "./bottom-bar.styles.scss";

const BottomBar = ({ location, history }) => {
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
        <div className="bottombar">
            <div
                className={`${activatedItem === 1 ? "activated" : ""} `}
                onClick={() => history.push("/")}
            >
                <HomeLogo className="logo" />
            </div>
            <div
                className={`${activatedItem === 2 ? "activated" : ""} `}
                onClick={() => history.push("/help-desk")}
            >
                <HelpDeskLogo className="logo" />
            </div>
            <div
                className={`${activatedItem === 3 ? "activated" : ""} `}
                onClick={() => history.push("/volunteer")}
            >
                <VolunteerLogo className="logo" />
            </div>
            <div
                className={`${activatedItem === 4 ? "activated" : ""} `}
                onClick={() => history.push("/what-we-do")}
            >
                <WhatWeDoLogo className="logo" />
            </div>
            <div
                className={`${activatedItem === 5 ? "activated" : ""} `}
                onClick={() => history.push("/contact-us")}
            >
                <ContactUsLogo className="logo" />
            </div>
        </div>
    );
};

export default withRouter(BottomBar);
