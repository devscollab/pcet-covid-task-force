import React from "react";
import { withRouter } from "react-router-dom";

import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";

import requests from "../../helpers/requests";

import "./ask-for-help-form.styles.scss";

class AskForHelpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.initialState;
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        if (this.state.requiredBy) {
            this.state.requiredBy = new Date(this.state.requiredBy).getTime();
        }

        if (this.state.dateOfRecovery) {
            this.state.dateOfRecovery = new Date(
                this.state.dateOfRecovery
            ).getTime();
        }

        let token = localStorage.getItem("token");
        if (token) {
            let requestObject = this.state;
            delete requestObject["err"];
            let requestData = {
                requestType: this.props.requestType,
                requestObject: requestObject,
            };
            requests.addRequest(token, requestData).then((res) => {
                if (res.data.status === 200) {
                    this.props.history.push(
                        `/registered-successfully/${res.data.requestId}`
                    );
                } else {
                    this.setState({ err: res.data.message });
                }
            });
        } else {
            // not logged in
            this.props.history.push("/login");
        }
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value, err: "" });
    };

    render() {
        return (
            <form className="ask-for-help-form" onSubmit={this.handleSubmit}>
                <div className="ask-for-help-form-title">
                    {this.props.category}
                </div>
                {this.props.inputFields.map((inputField) => {
                    if (inputField.type === "select") {
                        return (
                            <div
                                key={inputField.name}
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0",
                                }}
                            >
                                <div className="field-legend">
                                    {inputField.placeholder}:
                                </div>
                                <select
                                    style={{
                                        padding: "0.5em",
                                        borderRadius: "5px",
                                        border: "2px solid black",
                                    }}
                                    name={inputField.name}
                                    value={this.state[inputField.name]}
                                    onChange={this.handleChange}
                                >
                                    {inputField.options.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        );
                    } else if (inputField.type === "date") {
                        return (
                            <div
                                key={inputField.name}
                                className="custrow"
                                style={{ flexDirection: "column" }}
                            >
                                <div
                                    className="field-legend"
                                    style={{
                                        width: "213px",
                                    }}
                                >
                                    {inputField.placeholder}:
                                </div>
                                <CustomInput
                                    {...inputField}
                                    value={this.state[inputField.name]}
                                    handleChange={this.handleChange}
                                />
                            </div>
                        );
                    } else if (inputField.type === "textarea") {
                        return (
                            <div className="custrow" key={inputField.name}>
                                <textarea
                                    {...inputField}
                                    rows="5"
                                    style={{
                                        border: "2px solid black",
                                        borderRadius: "5px",
                                        padding: "1em",
                                        margin: "0.5em",
                                        width: "213px",
                                    }}
                                    value={this.state[inputField.name]}
                                    onChange={this.handleChange}
                                ></textarea>
                            </div>
                        );
                    } else {
                        return (
                            <div className="custrow" key={inputField.name}>
                                <CustomInput
                                    {...inputField}
                                    value={this.state[inputField.name]}
                                    handleChange={this.handleChange}
                                />
                            </div>
                        );
                    }
                })}
                <div className="error-message">{this.state.err}</div>
                <CustomButton
                    type="submit"
                    customStyle={{
                        width: "250px",
                        marginBottom: "0.25em",
                        justifySelf: "center",
                        alignSelf: "center",
                    }}
                >
                    Submit
                </CustomButton>
            </form>
        );
    }
}

export default withRouter(AskForHelpForm);
