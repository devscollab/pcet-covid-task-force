import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/home.component";
import HelpDeskPage from "./pages/help-desk/help-desk.component";
import VolunteerPage from "./pages/volunteer/volunteer.component";
import WhatWeDoPage from "./pages/what-we-do/what-we-do.component";
import ContactUsPage from "./pages/contact-us/contact-us.component";
import LoginPage from "./pages/login/login.component";
import RegisterPage from "./pages/register/register.component";
import AskForHelpPage from "./pages/ask-for-help/ask-for-help.component";
import RegisteredSuccessfully from "./pages/registered-successfully/registered-successfully.component";
import AdminDashboard from "./pages/admin-dashboard/admin-dashboard.component";

import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import BottomBar from "./components/bottom-bar/bottom-bar.component";

import "./App.css";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            activatedItem: 1,
            isAuthenticated: false,
        };
    }

    authenticate() {
        let token = localStorage.getItem("token");
        if (token !== null) {
            this.setState({ isAuthenticated: true });
        } else {
            this.setState({ isAuthenticated: false });
        }
    }

    componentDidMount() {
        this.authenticate();
    }

    render() {
        return (
            <div>
                <Header
                    className="header"
                    isAuthenticated={this.state.isAuthenticated}
                    authenticate={this.authenticate.bind(this)}
                />
                <div className="main-container">
                    <Sidebar
                        className="sidebar"
                        activatedItem={this.state.activatedItem}
                    />
                    <Switch>
                        <Route path="/help-desk" component={HelpDeskPage} />
                        <Route path="/volunteer" component={VolunteerPage} />
                        <Route path="/what-we-do" component={WhatWeDoPage} />
                        <Route path="/contact-us" component={ContactUsPage} />
                        <Route path="/login">
                            <LoginPage
                                authenticate={this.authenticate.bind(this)}
                            />
                        </Route>
                        <Route path="/register">
                            <RegisterPage
                                authenticate={this.authenticate.bind(this)}
                            />
                        </Route>
                        <Route
                            path="/ask-for-help/:id"
                            component={AskForHelpPage}
                        />
                        <Route
                            path="/registered-successfully/:id"
                            component={RegisteredSuccessfully}
                        />
                        <Route
                            path="/admin-dashboard"
                            component={AdminDashboard}
                        />
                        <Route path="/" component={HomePage} />
                    </Switch>
                </div>
                <BottomBar className="bottom-bar" />
            </div>
        );
    }
}

export default App;
