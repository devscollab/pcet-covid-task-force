import React from "react";
import { withRouter } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import HeaderTips from "../header-tips/header-tips.component";

import "./header.styles.scss";

const headerArray = [
    "Use Masks in public",
    "Maintain 6 feet distance",
    "Help Each Other",
];
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        className="toggle-namebar"
        href="/"
        ref={ref}
        style={{ color: "#24C59B" }}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
        &#x25bc;
    </a>
));
const CustommobileToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        className="user-after-img"
        href="/"
        ref={ref}
        style={{ color: "#24C59B" }}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </a>
));

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
                <Dropdown>
                    <Dropdown.Toggle
                        as={CustomToggle}
                        id="dropdown-custom-components"
                        className="toggle-namebar"
                    >
                        {userName}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item
                            onClick={() => {
                                history.push("/profile");
                            }}
                        >
                            Profile
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => {
                                localStorage.removeItem("token");
                                authenticate();
                            }}
                        >
                            Logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {/* <span
                    className="user-name"
                    
                >
                    
                </span> */}
                <div
                    className="user-img"
                    onClick={() => {
                        history.push("/profile");
                    }}
                >
                    <img
                        src="https://raw.githubusercontent.com/devscollab/pcet-covid-task-force/main/src/assets/account.png"
                        alt="Account"
                    />
                </div>

                <Dropdown>
                    <Dropdown.Toggle
                        as={CustommobileToggle}
                        id="dropdown-custom-components"
                    >
                        <span className="user-after-img">&#9660;</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item
                            onClick={() => {
                                history.push("/profile");
                            }}
                        >
                            Profile
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => {
                                localStorage.removeItem("token");
                                authenticate();
                            }}
                        >
                            Logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
