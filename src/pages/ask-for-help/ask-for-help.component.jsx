import React from "react";

import AskForHelpForm from "../../components/ask-for-help-form/ask-for-help-form.component";

import { askForHelpFormData } from "./data";

import "./ask-for-help.styles.scss";

const AskForHelpPage = ({ match }) => (
    <div className="ask-for-help-page page">
        <div className="ask-for-help-page-title">Ask For Help</div>
        <div className="ask-for-help-page-form-container">
            {askForHelpFormData[match.params.id] !== undefined ? (
                <AskForHelpForm {...askForHelpFormData[match.params.id]} />
            ) : (
                <div>404: Not Found</div>
            )}
        </div>
    </div>
);

export default AskForHelpPage;
