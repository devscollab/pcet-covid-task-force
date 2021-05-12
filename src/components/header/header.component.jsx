import React from "react";
import { withRouter } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import HeaderTips from "../header-tips/header-tips.component";

import "./header.styles.scss";

const headerArray = [
    "Use Masks in public",
    "Maintain 6 feet distance",
    "Help Each Other",
];

const userName = "John Doe";

const Header = ({ isAuthenticated, authenticate, history }) => (
    <div className="header">
        <div className="header-left" onClick={() => history.push("/")}>
            <Logo className="logo" />
            <span className="header-title">PCET Covid Task Force</span>
        </div>
        <div className="header-center">
            <HeaderTips array={headerArray} />
        </div>
        {isAuthenticated ? (
            <div className="header-right">
                <span
                    className="user-name"
                    onClick={() => {
                        localStorage.removeItem("token");
                        authenticate();
                    }}
                >
                    {userName} &#9660;
                </span>
                <div className="user-img">
                    <img src="https://picsum.photos/id/1005/54" alt="Display" />
                </div>
                <span className="user-after-img">&#9660;</span>
            </div>
        ) : (
            <div className="header-right">
                <span className="log-in-register-call-to-action">
                    <span
                        onClick={() => {
                            history.push("/login");
                        }}
                    >
                        Log In /
                    </span>
                    <span
                        onClick={() => {
                            history.push("/register");
                        }}
                    >
                        {" "}
                        Register
                    </span>
                </span>
            </div>
        )}
    </div>
);

export default withRouter(Header);
