import React from "react";

import AskForHelpForm from "../../components/ask-for-help-form/ask-for-help-form.component";

import "./ask-for-help.styles.scss";

const askForHelpFormData = {
    "central-help-desk": {
        inputFields: [
            {
                type: "text",
                name: "name",
                placeholder: "Full Name",
                required: true,
            },
            {
                type: "select",
                name: "bloodgroup",
                placeholder: "Blood Group",
            },
        ],
    },
};

const AskForHelpPage = ({ match }) => (
    <div className="ask-for-help-page page">
        <div className="ask-for-help-page-title">Ask For Help</div>
        <div className="ask-for-help-page-form-container">
            <AskForHelpForm {...askForHelpFormData[match.params.id]} />
        </div>
    </div>
);

export default AskForHelpPage;
