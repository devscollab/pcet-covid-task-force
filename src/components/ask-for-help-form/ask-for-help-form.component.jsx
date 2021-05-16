import React from "react";

import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./ask-for-help-form.styles.scss";

class AskForHelpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.initialState;
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`Submit`);
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
                                    // value={this.state.gender}
                                    // onChange={this.handleChange}
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
                                <CustomInput {...inputField} />
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
                                ></textarea>
                            </div>
                        );
                    } else {
                        return (
                            <div className="custrow" key={inputField.name}>
                                <CustomInput {...inputField} />
                            </div>
                        );
                    }
                })}
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

export default AskForHelpForm;
