import React from "react";
import { withRouter } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";

const Header = ({ history }) => (
    <div className="header">
        <div className="header-left" onClick={() => history.push("/")}>
            <Logo className="logo" />
            <span className="header-title">PCET Covid Task Force</span>
        </div>
        <div className="header-right">
            <span className="user-name">John Doe &#9660;</span>
            <div className="user-img">
                <img src="https://picsum.photos/id/1005/54" alt="Display" />
            </div>
        </div>
    </div>
);

export default withRouter(Header);
