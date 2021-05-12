import React from "react";
import { withRouter } from "react-router-dom";

import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import req from "../../helpers/requests";

import "./register.styles.scss";

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            dob: "",
            age: "",
            contactNumber: "",
            gender: "rns",
            designation: "student",
            password: "",
            err: "",
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        req.login(email, password)
            .then((res) => {
                if (res.data.status === 200) {
                    // logged in successfully
                    localStorage.setItem("token", res.data.token);
                    this.props.authenticate();
                    this.props.history.push("/");
                } else {
                    this.setState({
                        email: "",
                        password: "",
                        err: res.data.message,
                    });
                }
            })
            .catch((err) => console.log(err));
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value, err: "" });
    };

    render() {
        return (
            <div className="register-page page">
                <form
                    className="register-page-form"
                    onSubmit={this.handleSubmit}
                >
                    <div className="register-page-form-title">REGISTER</div>
                    <div className="error-message">{this.state.err}</div>
                    <CustomInput
                        customStyle={{ width: "300px" }}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="row">
                        <CustomInput
                            customStyle={{ width: "140px", margin: "10px" }}
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            handleChange={this.handleChange}
                            required
                        />
                        <CustomInput
                            customStyle={{ width: "140px", margin: "10px" }}
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            handleChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="field-legend">Date of Birth:</div>
                    <CustomInput
                        customStyle={{
                            width: "300px",
                        }}
                        type="date"
                        name="dob"
                        placeholder="dob"
                        max="2021-01-01"
                        value={this.state.dob}
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="row">
                        <CustomInput
                            customStyle={{
                                width: "100px",
                                margin: "10px",
                            }}
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={this.state.age}
                            handleChange={this.handleChange}
                            required
                        />
                        <CustomInput
                            customStyle={{
                                width: "180px",
                                margin: "10px",
                            }}
                            type="number"
                            name="contactNumber"
                            placeholder="Contact Number"
                            value={this.state.contactNumber}
                            handleChange={this.handleChange}
                            required
                        />
                    </div>
                    <div
                        className="row"
                        style={{ alignSelf: "flex-start", margin: "1em 0" }}
                    >
                        <div className="field-legend">Gender:</div>
                        <select
                            style={{
                                padding: "0.5em",
                                borderRadius: "5px",
                                border: "2px solid black",
                            }}
                            name="gender"
                            value={this.state.gender}
                            onChange={this.handleChange}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="rns">Rather Not Say</option>
                        </select>
                    </div>
                    <div
                        className="row"
                        style={{ alignSelf: "flex-start", margin: "1em 0" }}
                    >
                        <div className="field-legend">Designation:</div>
                        <div className="radio-field">
                            <input
                                type="radio"
                                name="designation"
                                value="student"
                            />
                            <span className="radio-legend">Student</span>{" "}
                        </div>
                        <input type="radio" name="designation" value="staff" />
                        <span className="radio-legend">Staff</span>
                    </div>

                    <CustomButton
                        type="submit"
                        customStyle={{ width: "300px", marginBottom: "0.25em" }}
                    >
                        Submit
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default withRouter(RegisterPage);
