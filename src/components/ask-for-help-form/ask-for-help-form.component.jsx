import React from "react";

import CustomInput from "../custom-input/custom-input.component";

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
                {this.props.inputFields.map((inputField) => {
                    if (inputField.type === "select") {
                        return <h1 key={inputField.name}>Select</h1>;
                    } else {
                        return (
                            <CustomInput
                                {...inputField}
                                key={inputField.name}
                            />
                        );
                    }
                })}
            </form>
        );
    }
}

export default AskForHelpForm;
