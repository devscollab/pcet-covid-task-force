import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/home.component";
import HelpDeskPage from "./pages/help-desk/help-desk.component";
import VolunteerPage from "./pages/volunteer/volunteer.component";
import WhatWeDoPage from "./pages/what-we-do/what-we-do.component";
import ContactUsPage from "./pages/contact-us/contact-us.component";

import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import BottomBar from "./components/bottom-bar/bottom-bar.component";

import "./App.css";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            activatedItem: 1,
        };
    }

    render() {
        return (
            <div>
                <Header className="header" />
                <div className="main-container">
                    <Sidebar
                        className="sidebar"
                        activatedItem={this.state.activatedItem}
                    />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/help-desk" component={HelpDeskPage} />
                        <Route path="/volunteer" component={VolunteerPage} />
                        <Route path="/what-we-do" component={WhatWeDoPage} />
                        <Route path="/contact-us" component={ContactUsPage} />
                    </Switch>
                </div>
                <BottomBar className="bottombar" />
            </div>
        );
    }
}

export default App;
