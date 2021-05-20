import React from "react";
import { withRouter } from "react-router-dom";

import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import Requests from "../../helpers/requests";

import "./register.styles.scss";

const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    dob: "",
    age: "",
    contactNumber: "",
    gender: "rns",
    isStudent: null,
    college: "pccoe",
    course: "be",
    year: "1",
    branch: "comp",
    div: "",
    bloodGroup: "o+ve",
    rollNumber: "",
    aadharNumber: "",
    currentAddress: "",
    city: "",
    state: "Maharashtra",
    pincode: "",
    emergencyContact: "",
    haCovid: null,
    startCovidDate: "",
    isRecovered: null,
    endCovidDate: "",
    isVaccinated: null,
    isRegisteredoncowin: null,
    vaccineType: "",
    dateOfDose1: "",
    dateOfDose2: "",
    caDonateblood: null,
    caDonateplasma: null,
    password: "",
    confirmPassword: "",
    err: "",
};
class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = initialState;
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        let {
            dob,
            startCovidDate,
            endCovidDate,
            dateOfDose1,
            dateOfDose2,
            isStudent,
            haCovid,
            isRecovered,
            isVaccinated,
            isRegisteredoncowin,
            caDonateblood,
            caDonateplasma,
            password,
            confirmPassword,
            err,
            ...formData
        } = this.state;

        dob = new Date(dob).getTime();
        startCovidDate = new Date(startCovidDate).getTime();
        endCovidDate = new Date(endCovidDate).getTime();
        dateOfDose1 = new Date(dateOfDose1).getTime();
        dateOfDose2 = new Date(dateOfDose2).getTime();

        if (
            isStudent !== null &&
            haCovid !== null &&
            isVaccinated !== null &&
            caDonateblood !== null &&
            caDonateplasma !== null
        ) {
            if (password.length >= 8) {
                if (password === confirmPassword) {
                    Requests.register({
                        dob,
                        startCovidDate,
                        endCovidDate,
                        dateOfDose1,
                        dateOfDose2,
                        isStudent,
                        haCovid,
                        isRecovered,
                        isVaccinated,
                        isRegisteredoncowin,
                        caDonateblood,
                        caDonateplasma,
                        password,
                        ...formData,
                    })
                        .then((res) => {
                            if (res.data.status === 200) {
                                // logged in successfully
                                localStorage.setItem("token", res.data.token);
                                Requests.getData(res.data.token)
                                    .then((userRes) => {
                                        if (userRes.data.status === 200) {
                                            localStorage.setItem(
                                                "userData",
                                                userRes.data.userData
                                            );
                                        } else {
                                            this.setState({
                                                email: "",
                                                password: "",
                                                err: res.data.message,
                                            });
                                        }
                                    })
                                    .then(() => {
                                        this.props.authenticate();
                                        this.props.history.push("/");
                                    });
                            } else {
                                this.setState({ err: res.data.message });
                            }
                        })
                        .catch((err) => console.log(err));
                } else {
                    this.setState({
                        err: `Password and Confirm Password does not match`,
                    });
                }
            } else {
                this.setState({
                    err: `Length of password should not be less than 8`,
                });
            }
        } else {
            this.setState({
                err: `All fields are mandatory`,
            });
        }
    };

    handleChange = (event) => {
        let { value, name } = event.target;

        if (name === "div" || name === "rollNumber") {
            value = value.toUpperCase();
        }

        this.setState({ [name]: value, err: "" });
    };

    handleRadioInput = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value === `${name.slice(2).toLowerCase()}` ? true : false,
            err: "",
        });
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
                    <div className="custrow">
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
                    {/* <div className="field-legend">Date of Birth:</div> */}
                    <CustomInput
                        customStyle={{
                            width: "300px",
                        }}
                        type="text"
                        name="dob"
                        placeholder="Date of Birth"
                        max="2021-01-01"
                        value={this.state.dob}
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="custrow">
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
                        className="custrow"
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
                        className="custrow"
                        style={{ alignSelf: "flex-start", margin: "1em 0" }}
                    >
                        <fieldset className="radio-field">
                            <div
                                className="field-legend"
                                style={{ margin: "0 1em" }}
                            >
                                Designation:
                            </div>
                            <div
                                style={{
                                    fontSize: "1.2em",
                                    margin: "0 1em 0 0.5em",
                                }}
                            >
                                <input
                                    type="radio"
                                    name="isStudent"
                                    id="student"
                                    value="student"
                                    onChange={this.handleRadioInput}
                                />
                                <label htmlFor="student">Student</label>
                            </div>
                            <div style={{ fontSize: "1.2em" }}>
                                <input
                                    type="radio"
                                    name="isStudent"
                                    id="staff"
                                    value="staff"
                                    onChange={this.handleRadioInput}
                                />
                                <label htmlFor="staff">Staff</label>
                            </div>
                        </fieldset>
                    </div>

                    {this.state.isStudent ? (
                        <div style={{ width: "100%" }}>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <div
                                    className="field-legend"
                                    style={{
                                        alignSelf: "center",
                                        margin: "0.5em 1em",
                                        width: "50px",
                                    }}
                                >
                                    College:
                                </div>
                                <select
                                    style={{
                                        padding: "0.5em",
                                        borderRadius: "5px",
                                        border: "2px solid black",
                                        width: "250px",
                                    }}
                                    name="college"
                                    value={this.state.college}
                                    onChange={this.handleChange}
                                >
                                    <option value="pccoe">
                                        Pimpri Chinchwad College of Engineering,
                                        Nigdi, Pune
                                    </option>
                                    <option value="pccoer">
                                        Pimpri Chinchwad College of Engineering
                                        & Research, Ravet, Pune
                                    </option>
                                    <option value="ncer">
                                        Nutan College of Engineering and
                                        Research, Talegaon, Pune
                                    </option>
                                    <option value="nmiet">
                                        Nutan Maharashtra Institute of
                                        Engineering and Technology, Talegaon,
                                        Pune
                                    </option>
                                </select>
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <div
                                    className="field-legend"
                                    style={{
                                        alignSelf: "center",
                                        margin: "0.5em 1em",
                                        width: "50px",
                                    }}
                                >
                                    Course:
                                </div>
                                <select
                                    style={{
                                        padding: "0.5em",
                                        borderRadius: "5px",
                                        border: "2px solid black",
                                        width: "120px",
                                    }}
                                    name="course"
                                    value={this.state.course}
                                    onChange={this.handleChange}
                                >
                                    <option value="be">BE / B.Tech</option>
                                    <option value="me">ME / M.Tech</option>
                                    <option value="mca">MCA</option>
                                </select>
                                <div
                                    className="field-legend"
                                    style={{
                                        alignSelf: "center",
                                        margin: "0.5em 0 0 0.5em",
                                        width: "50px",
                                    }}
                                >
                                    Year:
                                </div>
                                <select
                                    style={{
                                        padding: "0.5em 0",
                                        borderRadius: "5px",
                                        border: "2px solid black",
                                        width: "70px",
                                    }}
                                    name="year"
                                    value={this.state.year}
                                    onChange={this.handleChange}
                                >
                                    <option value="1">1st</option>
                                    <option value="2">2nd</option>
                                    <option value="3">3rd</option>
                                    <option value="4">4th</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "center",
                                    margin: "1em 0 0 10px",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <div
                                    className="field-legend"
                                    style={{
                                        alignSelf: "center",
                                        margin: "0.5em",
                                        width: "50px",
                                    }}
                                >
                                    Branch:
                                </div>
                                <select
                                    style={{
                                        padding: "0.5em",
                                        borderRadius: "5px",
                                        border: "2px solid black",
                                        width: "160px",
                                    }}
                                    name="branch"
                                    value={this.state.branch}
                                    onChange={this.handleChange}
                                >
                                    <option value="comp">Computer</option>
                                    <option value="it">IT</option>
                                    <option value="entc">EnTC</option>
                                    <option value="mech">Mechanical</option>
                                    <option value="civil">Civil</option>
                                    <option value="auto">Automobile</option>
                                    <option value="mca">MCA</option>
                                    <option value="other">Other</option>
                                </select>
                                <CustomInput
                                    customStyle={{
                                        width: "70px",
                                        margin: "10px",
                                    }}
                                    type="text"
                                    name="div"
                                    placeholder="Div"
                                    maxLength="1"
                                    value={this.state.div}
                                    handleChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="field-legend">Blood Group:</div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "center",
                                    margin: "0.25em 0 1em 10px",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <select
                                    style={{
                                        padding: "0.5em",
                                        borderRadius: "5px",
                                        border: "2px solid black",
                                        width: "100px",
                                        margin: "0 1em",
                                    }}
                                    name="bloodGroup"
                                    value={this.state.bloodGroup}
                                    onChange={this.handleChange}
                                >
                                    <option value="o+ve">O+ve</option>
                                    <option value="a+ve">A+ve</option>
                                    <option value="b+ve">B+ve</option>
                                    <option value="ab+ve">AB+ve</option>
                                    <option value="o-ve">O-ve</option>
                                    <option value="a-ve">A-ve</option>
                                    <option value="b-ve">B-ve</option>
                                    <option value="ab-ve">AB-ve</option>
                                </select>
                                <CustomInput
                                    customStyle={{
                                        width: "170px",
                                        margin: "0 1em",
                                    }}
                                    type="text"
                                    name="rollNumber"
                                    placeholder="Roll Number"
                                    value={this.state.rollNumber}
                                    handleChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "center",
                                    margin: "0.25em 0 1em 10px",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <CustomInput
                                    customStyle={{
                                        width: "300px",
                                        margin: "0 1em",
                                    }}
                                    type="number"
                                    name="aadharNumber"
                                    placeholder="Aadhar Number"
                                    max="999999999999"
                                    value={this.state.aadharNumber}
                                    handleChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="field-legend">Current Address:</div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "center",
                                    margin: "0.25em 0 1em 10px",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <CustomInput
                                    customStyle={{
                                        width: "300px",
                                        margin: "0 1em",
                                    }}
                                    type="text"
                                    name="currentAddress"
                                    placeholder="Full Address"
                                    value={this.state.currentAddress}
                                    handleChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "center",
                                    margin: "0.25em 0 1em 10px",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <CustomInput
                                    customStyle={{
                                        width: "150px",
                                        margin: "0 1em",
                                    }}
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={this.state.city}
                                    handleChange={this.handleChange}
                                    required
                                />
                                <select
                                    style={{
                                        padding: "0.5em",
                                        borderRadius: "5px",
                                        border: "2px solid black",
                                        width: "130px",
                                        margin: "0 1em",
                                    }}
                                    name="state"
                                    value={this.state.state}
                                    onChange={this.handleChange}
                                >
                                    <option value="Andhra Pradesh">
                                        Andhra Pradesh
                                    </option>
                                    <option value="Andaman and Nicobar Islands">
                                        Andaman and Nicobar Islands
                                    </option>
                                    <option value="Arunachal Pradesh">
                                        Arunachal Pradesh
                                    </option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">
                                        Chandigarh
                                    </option>
                                    <option value="Chhattisgarh">
                                        Chhattisgarh
                                    </option>
                                    <option value="Dadar and Nagar Haveli">
                                        Dadar and Nagar Haveli
                                    </option>
                                    <option value="Daman and Diu">
                                        Daman and Diu
                                    </option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Lakshadweep">
                                        Lakshadweep
                                    </option>
                                    <option value="Puducherry">
                                        Puducherry
                                    </option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">
                                        Himachal Pradesh
                                    </option>
                                    <option value="Jammu and Kashmir">
                                        Jammu and Kashmir
                                    </option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">
                                        Madhya Pradesh
                                    </option>
                                    <option value="Maharashtra">
                                        Maharashtra
                                    </option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">
                                        Tamil Nadu
                                    </option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">
                                        Uttar Pradesh
                                    </option>
                                    <option value="Uttarakhand">
                                        Uttarakhand
                                    </option>
                                    <option value="West Bengal">
                                        West Bengal
                                    </option>
                                </select>
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "center",
                                    margin: "0.25em 0 1em 10px",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <CustomInput
                                    customStyle={{
                                        width: "110px",
                                        margin: "0 1em",
                                    }}
                                    type="number"
                                    name="pincode"
                                    placeholder="Pincode"
                                    max="999999"
                                    value={this.state.pincode}
                                    handleChange={this.handleChange}
                                    required
                                />
                                <CustomInput
                                    customStyle={{
                                        width: "170px",
                                        margin: "0 1em",
                                    }}
                                    type="number"
                                    name="emergencyContact"
                                    placeholder="Emergency Contact"
                                    value={this.state.emergencyContact}
                                    handleChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0 0 0",
                                }}
                            >
                                <fieldset className="radio-field">
                                    <div
                                        className="field-legend"
                                        style={{ margin: "0 1em" }}
                                    >
                                        Had Covid earlier?
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.2em",
                                            margin: "0 1em 0 0.5em",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="haCovid"
                                            id="covid"
                                            value="covid"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="covid">Yes</label>
                                    </div>
                                    <div style={{ fontSize: "1.2em" }}>
                                        <input
                                            type="radio"
                                            name="haCovid"
                                            id="notCovid"
                                            value="notCovid"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="notCovid">No</label>
                                    </div>
                                </fieldset>
                            </div>
                            {this.state.haCovid ? (
                                <div>
                                    {/* <div className="field-legend">
                                        Covid Start Date:
                                    </div> */}
                                    <div
                                        className="custrow"
                                        style={{
                                            alignSelf: "flex-start",
                                            margin: "0em 0",
                                        }}
                                    >
                                        <CustomInput
                                            customStyle={{
                                                width: "300px",
                                                margin: "0 1em",
                                            }}
                                            type="text"
                                            name="startCovidDate"
                                            placeholder="When was it detected?"
                                            value={this.state.startCovidDate}
                                            handleChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div
                                        className="custrow"
                                        style={{
                                            alignSelf: "flex-start",
                                            margin: "1em 0 0 0",
                                        }}
                                    >
                                        <fieldset className="radio-field">
                                            <div
                                                className="field-legend"
                                                style={{ margin: "0 1em" }}
                                            >
                                                Are you recovered?
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "1.2em",
                                                    margin: "0 1em 0 0.5em",
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="isRecovered"
                                                    id="recovered"
                                                    value="recovered"
                                                    onChange={
                                                        this.handleRadioInput
                                                    }
                                                />
                                                <label htmlFor="recovered">
                                                    Yes
                                                </label>
                                            </div>
                                            <div style={{ fontSize: "1.2em" }}>
                                                <input
                                                    type="radio"
                                                    name="isRecovered"
                                                    id="notRecovered"
                                                    value="notRecovered"
                                                    onChange={
                                                        this.handleRadioInput
                                                    }
                                                />
                                                <label htmlFor="notRecovered">
                                                    No
                                                </label>
                                            </div>
                                        </fieldset>
                                    </div>
                                    {this.state.isRecovered ? (
                                        <div>
                                            {/* <div className="field-legend">
                                                Covid End Date:
                                            </div> */}
                                            <div
                                                className="custrow"
                                                style={{
                                                    alignSelf: "flex-start",
                                                    margin: "0em 0",
                                                }}
                                            >
                                                <CustomInput
                                                    customStyle={{
                                                        width: "300px",
                                                        margin: "0 1em",
                                                    }}
                                                    type="text"
                                                    name="endCovidDate"
                                                    placeholder="When did your quarantine end?"
                                                    value={
                                                        this.state.endCovidDate
                                                    }
                                                    handleChange={
                                                        this.handleChange
                                                    }
                                                    required
                                                />
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            ) : null}

                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0",
                                }}
                            >
                                <fieldset className="radio-field">
                                    <div
                                        className="field-legend"
                                        style={{ margin: "0 1em" }}
                                    >
                                        Are you Vaccinated?
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.2em",
                                            margin: "0 1em 0 0.5em",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="isVaccinated"
                                            id="vaccinated"
                                            value="vaccinated"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="vaccinated">Yes</label>
                                    </div>
                                    <div style={{ fontSize: "1.2em" }}>
                                        <input
                                            type="radio"
                                            name="isVaccinated"
                                            id="notVaccinated"
                                            value="notVaccinated"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="notVaccinated">
                                            No
                                        </label>
                                    </div>
                                </fieldset>
                            </div>

                            {this.state.isVaccinated ? (
                                <div>
                                    <div
                                        className="custrow"
                                        style={{
                                            alignSelf: "flex-start",
                                            margin: "1em 0",
                                        }}
                                    >
                                        <div
                                            className="field-legend"
                                            style={{ width: "100px" }}
                                        >
                                            Vaccine Type:
                                        </div>
                                        <select
                                            style={{
                                                padding: "0.5em",
                                                borderRadius: "5px",
                                                border: "2px solid black",
                                                width: "180px",
                                                margin: "0 1em",
                                            }}
                                            name="vaccineType"
                                            value={this.state.vaccineType}
                                            onChange={this.handleChange}
                                        >
                                            <option value="Covaxin">
                                                Covaxin
                                            </option>
                                            <option value="Covishield">
                                                Covishield
                                            </option>
                                        </select>
                                    </div>
                                    {/* <div className="field-legend">
                                        Date of Dose 1:
                                    </div> */}
                                    <div
                                        className="custrow"
                                        style={{
                                            alignSelf: "flex-start",
                                            margin: "0em 0",
                                        }}
                                    >
                                        <CustomInput
                                            customStyle={{
                                                width: "300px",
                                                margin: "0 1em",
                                            }}
                                            type="text"
                                            name="dateOfDose1"
                                            placeholder="Date of Dose 1?"
                                            value={this.state.dateOfDose1}
                                            handleChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    {/* <div className="field-legend">
                                        Date of Dose 2:
                                    </div> */}
                                    <div
                                        className="custrow"
                                        style={{
                                            alignSelf: "flex-start",
                                            margin: "1em 0",
                                        }}
                                    >
                                        <CustomInput
                                            customStyle={{
                                                width: "300px",
                                                margin: "0 1em",
                                            }}
                                            type="text"
                                            name="dateOfDose2"
                                            placeholder="Date of Dose 2?"
                                            value={this.state.dateOfDose2}
                                            handleChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            ) : this.state.isVaccinated === false ? (
                                <div
                                    className="custrow"
                                    style={{
                                        alignSelf: "flex-start",
                                        margin: "1em 0",
                                    }}
                                >
                                    <fieldset className="radio-field">
                                        <div
                                            className="field-legend"
                                            style={{ margin: "0 1em" }}
                                        >
                                            Registered For Vaccination?
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "1.2em",
                                                margin: "0 1em 0 0.5em",
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="isRegisteredoncowin"
                                                id="registeredoncowin"
                                                value="registeredoncowin"
                                                onChange={this.handleRadioInput}
                                            />
                                            <label htmlFor="registeredoncowin">
                                                Yes
                                            </label>
                                        </div>
                                        <div style={{ fontSize: "1.2em" }}>
                                            <input
                                                type="radio"
                                                name="isRegisteredoncowin"
                                                id="notRegisteredoncowin"
                                                value="notRegisteredoncowin"
                                                onChange={this.handleRadioInput}
                                            />
                                            <label htmlFor="notRegisteredoncowin">
                                                No
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>
                            ) : null}

                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0",
                                }}
                            >
                                <fieldset className="radio-field">
                                    <div
                                        className="field-legend"
                                        style={{ margin: "0 1em" }}
                                    >
                                        Can donate blood?
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.2em",
                                            margin: "0 1em 0 0.5em",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="caDonateblood"
                                            id="donateblood"
                                            value="donateblood"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="donateblood">Yes</label>
                                    </div>
                                    <div style={{ fontSize: "1.2em" }}>
                                        <input
                                            type="radio"
                                            name="caDonateblood"
                                            id="cantDonateblood"
                                            value="cantDonateblood"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="cantDonateblood">
                                            No
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0",
                                }}
                            >
                                <fieldset className="radio-field">
                                    <div
                                        className="field-legend"
                                        style={{ margin: "0 1em" }}
                                    >
                                        Can donate plasma?
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.2em",
                                            margin: "0 1em 0 0.5em",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="caDonateplasma"
                                            id="donateplasma"
                                            value="donateplasma"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="donateplasma">
                                            Yes
                                        </label>
                                    </div>
                                    <div style={{ fontSize: "1.2em" }}>
                                        <input
                                            type="radio"
                                            name="caDonateplasma"
                                            id="cantDonateplasma"
                                            value="cantDonateplasma"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="cantDonateplasma">
                                            No
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0",
                                    justifyContent: "center",
                                }}
                            >
                                <CustomInput
                                    customStyle={{
                                        width: "300px",
                                        margin: "0 1em",
                                    }}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    handleChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0",
                                    justifyContent: "center",
                                }}
                            >
                                <CustomInput
                                    customStyle={{
                                        width: "300px",
                                        margin: "0 1em",
                                    }}
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={this.state.confirmPassword}
                                    handleChange={this.handleChange}
                                    required
                                />
                            </div>
                        </div>
                    ) : this.state.isStudent === false ? (
                        <div style={{ width: "100%" }}>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <div
                                    className="field-legend"
                                    style={{
                                        alignSelf: "center",
                                        margin: "0.5em 1em",
                                        width: "50px",
                                    }}
                                >
                                    College:
                                </div>
                                <select
                                    style={{
                                        padding: "0.5em",
                                        borderRadius: "5px",
                                        border: "2px solid black",
                                        width: "250px",
                                    }}
                                    name="college"
                                    value={this.state.college}
                                    onChange={this.handleChange}
                                >
                                    <option value="pccoe">
                                        Pimpri Chinchwad College of Engineering,
                                        Nigdi, Pune
                                    </option>
                                    <option value="pccoer">
                                        Pimpri Chinchwad College of Engineering
                                        & Research, Ravet, Pune
                                    </option>
                                    <option value="ncer">
                                        Nutan College of Engineering and
                                        Research, Talegaon, Pune
                                    </option>
                                    <option value="nmiet">
                                        Nutan Maharashtra Institute of
                                        Engineering and Technology, Talegaon,
                                        Pune
                                    </option>
                                    <option value="na">Not Applicable</option>
                                </select>
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <div
                                    className="field-legend"
                                    style={{
                                        alignSelf: "center",
                                        margin: "0.5em 1em",
                                        width: "50px",
                                    }}
                                >
                                    Course:
                                </div>
                                <select
                                    style={{
                                        padding: "0.5em",
                                        borderRadius: "5px",
                                        border: "2px solid black",
                                        width: "150px",
                                    }}
                                    name="course"
                                    value={this.state.course}
                                    onChange={this.handleChange}
                                >
                                    <option value="be">BE / B.Tech</option>
                                    <option value="me">ME / M.Tech</option>
                                    <option value="mca">MCA</option>
                                    <option value="na">Not Applicable</option>
                                </select>
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "center",
                                    margin: "1em 0 0 10px",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <div
                                    className="field-legend"
                                    style={{
                                        alignSelf: "center",
                                        margin: "0.5em",
                                        width: "50px",
                                    }}
                                >
                                    Branch:
                                </div>
                                <select
                                    style={{
                                        padding: "0.5em",
                                        borderRadius: "5px",
                                        border: "2px solid black",
                                        width: "160px",
                                    }}
                                    name="branch"
                                    value={this.state.branch}
                                    onChange={this.handleChange}
                                >
                                    <option value="comp">Computer</option>
                                    <option value="it">IT</option>
                                    <option value="entc">EnTC</option>
                                    <option value="mech">Mechanical</option>
                                    <option value="civil">Civil</option>
                                    <option value="auto">Automobile</option>
                                    <option value="mca">MCA</option>
                                    <option value="other">Other</option>
                                    <option value="na">Not Applicable</option>
                                </select>
                            </div>
                            <div className="field-legend">Blood Group:</div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "center",
                                    margin: "0.25em 0 1em 10px",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <select
                                    style={{
                                        padding: "0.5em",
                                        borderRadius: "5px",
                                        border: "2px solid black",
                                        width: "100px",
                                        margin: "0 1em",
                                    }}
                                    name="bloodGroup"
                                    value={this.state.bloodGroup}
                                    onChange={this.handleChange}
                                >
                                    <option value="o+ve">O+ve</option>
                                    <option value="a+ve">A+ve</option>
                                    <option value="b+ve">B+ve</option>
                                    <option value="ab+ve">AB+ve</option>
                                    <option value="o-ve">O-ve</option>
                                    <option value="a-ve">A-ve</option>
                                    <option value="b-ve">B-ve</option>
                                    <option value="ab-ve">AB-ve</option>
                                </select>
                                {/* <CustomInput
                                    customStyle={{
                                        width: "180px",
                                        margin: "0 1em",
                                    }}
                                    type="text"
                                    name="rollNumber"
                                    placeholder="Roll Number"
                                    value={this.state.rollNumber}
                                    handleChange={this.handleChange}
                                    required
                                /> */}
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "center",
                                    margin: "0.25em 0 1em 10px",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <CustomInput
                                    customStyle={{
                                        width: "300px",
                                        margin: "0 1em",
                                    }}
                                    type="number"
                                    name="aadharNumber"
                                    placeholder="Aadhar Number"
                                    max="999999999999"
                                    value={this.state.aadharNumber}
                                    handleChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="field-legend">Current Address:</div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "center",
                                    margin: "0.25em 0 1em 10px",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <CustomInput
                                    customStyle={{
                                        width: "300px",
                                        margin: "0 1em",
                                    }}
                                    type="text"
                                    name="currentAddress"
                                    placeholder="Full Address"
                                    value={this.state.currentAddress}
                                    handleChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "center",
                                    margin: "0.25em 0 1em 10px",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <CustomInput
                                    customStyle={{
                                        width: "150px",
                                        margin: "0 1em",
                                    }}
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={this.state.city}
                                    handleChange={this.handleChange}
                                    required
                                />
                                <select
                                    style={{
                                        padding: "0.5em",
                                        borderRadius: "5px",
                                        border: "2px solid black",
                                        width: "130px",
                                        margin: "0 1em",
                                    }}
                                    name="state"
                                    value={this.state.state}
                                    onChange={this.handleChange}
                                >
                                    <option value="Andhra Pradesh">
                                        Andhra Pradesh
                                    </option>
                                    <option value="Andaman and Nicobar Islands">
                                        Andaman and Nicobar Islands
                                    </option>
                                    <option value="Arunachal Pradesh">
                                        Arunachal Pradesh
                                    </option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">
                                        Chandigarh
                                    </option>
                                    <option value="Chhattisgarh">
                                        Chhattisgarh
                                    </option>
                                    <option value="Dadar and Nagar Haveli">
                                        Dadar and Nagar Haveli
                                    </option>
                                    <option value="Daman and Diu">
                                        Daman and Diu
                                    </option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Lakshadweep">
                                        Lakshadweep
                                    </option>
                                    <option value="Puducherry">
                                        Puducherry
                                    </option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">
                                        Himachal Pradesh
                                    </option>
                                    <option value="Jammu and Kashmir">
                                        Jammu and Kashmir
                                    </option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">
                                        Madhya Pradesh
                                    </option>
                                    <option value="Maharashtra">
                                        Maharashtra
                                    </option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">
                                        Tamil Nadu
                                    </option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">
                                        Uttar Pradesh
                                    </option>
                                    <option value="Uttarakhand">
                                        Uttarakhand
                                    </option>
                                    <option value="West Bengal">
                                        West Bengal
                                    </option>
                                </select>
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "center",
                                    margin: "0.25em 0 1em 10px",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <CustomInput
                                    customStyle={{
                                        width: "110px",
                                        margin: "0 1em",
                                    }}
                                    type="number"
                                    name="pincode"
                                    placeholder="Pincode"
                                    max="999999"
                                    value={this.state.pincode}
                                    handleChange={this.handleChange}
                                    required
                                />
                                <CustomInput
                                    customStyle={{
                                        width: "170px",
                                        margin: "0 1em",
                                    }}
                                    type="number"
                                    name="emergencyContact"
                                    placeholder="Emergency Contact"
                                    value={this.state.emergencyContact}
                                    handleChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0 0 0",
                                }}
                            >
                                <fieldset className="radio-field">
                                    <div
                                        className="field-legend"
                                        style={{ margin: "0 1em" }}
                                    >
                                        Had Covid earlier?
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.2em",
                                            margin: "0 1em 0 0.5em",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="haCovid"
                                            id="covid"
                                            value="covid"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="covid">Yes</label>
                                    </div>
                                    <div style={{ fontSize: "1.2em" }}>
                                        <input
                                            type="radio"
                                            name="haCovid"
                                            id="notCovid"
                                            value="notCovid"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="notCovid">No</label>
                                    </div>
                                </fieldset>
                            </div>
                            {this.state.haCovid ? (
                                <div>
                                    {/* <div className="field-legend">
                                        Covid Start Date:
                                    </div> */}
                                    <div
                                        className="custrow"
                                        style={{
                                            alignSelf: "flex-start",
                                            margin: "0em 0",
                                        }}
                                    >
                                        <CustomInput
                                            customStyle={{
                                                width: "300px",
                                                margin: "0 1em",
                                            }}
                                            type="text"
                                            name="startCovidDate"
                                            placeholder="When was it detected?"
                                            value={this.state.startCovidDate}
                                            handleChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div
                                        className="custrow"
                                        style={{
                                            alignSelf: "flex-start",
                                            margin: "1em 0 0 0",
                                        }}
                                    >
                                        <fieldset className="radio-field">
                                            <div
                                                className="field-legend"
                                                style={{ margin: "0 1em" }}
                                            >
                                                Are you recovered?
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "1.2em",
                                                    margin: "0 1em 0 0.5em",
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="isRecovered"
                                                    id="recovered"
                                                    value="recovered"
                                                    onChange={
                                                        this.handleRadioInput
                                                    }
                                                />
                                                <label htmlFor="recovered">
                                                    Yes
                                                </label>
                                            </div>
                                            <div style={{ fontSize: "1.2em" }}>
                                                <input
                                                    type="radio"
                                                    name="isRecovered"
                                                    id="notRecovered"
                                                    value="notRecovered"
                                                    onChange={
                                                        this.handleRadioInput
                                                    }
                                                />
                                                <label htmlFor="notRecovered">
                                                    No
                                                </label>
                                            </div>
                                        </fieldset>
                                    </div>
                                    {this.state.isRecovered ? (
                                        <div>
                                            {/* <div className="field-legend">
                                                Covid End Date:
                                            </div> */}
                                            <div
                                                className="custrow"
                                                style={{
                                                    alignSelf: "flex-start",
                                                    margin: "0em 0",
                                                }}
                                            >
                                                <CustomInput
                                                    customStyle={{
                                                        width: "300px",
                                                        margin: "0 1em",
                                                    }}
                                                    type="text"
                                                    name="endCovidDate"
                                                    placeholder="When did your quarantine end?"
                                                    value={
                                                        this.state.endCovidDate
                                                    }
                                                    handleChange={
                                                        this.handleChange
                                                    }
                                                    required
                                                />
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            ) : null}

                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0",
                                }}
                            >
                                <fieldset className="radio-field">
                                    <div
                                        className="field-legend"
                                        style={{ margin: "0 1em" }}
                                    >
                                        Are you Vaccinated?
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.2em",
                                            margin: "0 1em 0 0.5em",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="isVaccinated"
                                            id="vaccinated"
                                            value="vaccinated"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="vaccinated">Yes</label>
                                    </div>
                                    <div style={{ fontSize: "1.2em" }}>
                                        <input
                                            type="radio"
                                            name="isVaccinated"
                                            id="notVaccinated"
                                            value="notVaccinated"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="notVaccinated">
                                            No
                                        </label>
                                    </div>
                                </fieldset>
                            </div>

                            {this.state.isVaccinated ? (
                                <div>
                                    <div
                                        className="custrow"
                                        style={{
                                            alignSelf: "flex-start",
                                            margin: "1em 0",
                                        }}
                                    >
                                        <div
                                            className="field-legend"
                                            style={{ width: "100px" }}
                                        >
                                            Vaccine Type:
                                        </div>
                                        <select
                                            style={{
                                                padding: "0.5em",
                                                borderRadius: "5px",
                                                border: "2px solid black",
                                                width: "180px",
                                                margin: "0 1em",
                                            }}
                                            name="vaccineType"
                                            value={this.state.vaccineType}
                                            onChange={this.handleChange}
                                        >
                                            <option value="Covaxin">
                                                Covaxin
                                            </option>
                                            <option value="Covishield">
                                                Covishield
                                            </option>
                                        </select>
                                    </div>
                                    {/* <div className="field-legend">
                                        Date of Dose 1:
                                    </div> */}
                                    <div
                                        className="custrow"
                                        style={{
                                            alignSelf: "flex-start",
                                            margin: "0em 0",
                                        }}
                                    >
                                        <CustomInput
                                            customStyle={{
                                                width: "300px",
                                                margin: "0 1em",
                                            }}
                                            type="text"
                                            name="dateOfDose1"
                                            placeholder="Date of Dose 1?"
                                            value={this.state.dateOfDose1}
                                            handleChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    {/* <div className="field-legend">
                                        Date of Dose 2:
                                    </div> */}
                                    <div
                                        className="custrow"
                                        style={{
                                            alignSelf: "flex-start",
                                            margin: "1em 0",
                                        }}
                                    >
                                        <CustomInput
                                            customStyle={{
                                                width: "300px",
                                                margin: "0 1em",
                                            }}
                                            type="text"
                                            name="dateOfDose2"
                                            placeholder="Date of Dose 2?"
                                            value={this.state.dateOfDose2}
                                            handleChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            ) : this.state.isVaccinated === false ? (
                                <div
                                    className="custrow"
                                    style={{
                                        alignSelf: "flex-start",
                                        margin: "1em 0",
                                    }}
                                >
                                    <fieldset className="radio-field">
                                        <div
                                            className="field-legend"
                                            style={{ margin: "0 1em" }}
                                        >
                                            Registered For Vaccination?
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "1.2em",
                                                margin: "0 1em 0 0.5em",
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="isRegisteredoncowin"
                                                id="registeredoncowin"
                                                value="registeredoncowin"
                                                onChange={this.handleRadioInput}
                                            />
                                            <label htmlFor="registeredoncowin">
                                                Yes
                                            </label>
                                        </div>
                                        <div style={{ fontSize: "1.2em" }}>
                                            <input
                                                type="radio"
                                                name="isRegisteredoncowin"
                                                id="notRegisteredoncowin"
                                                value="notRegisteredoncowin"
                                                onChange={this.handleRadioInput}
                                            />
                                            <label htmlFor="notRegisteredoncowin">
                                                No
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>
                            ) : null}

                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0",
                                }}
                            >
                                <fieldset className="radio-field">
                                    <div
                                        className="field-legend"
                                        style={{ margin: "0 1em" }}
                                    >
                                        Can donate blood?
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.2em",
                                            margin: "0 1em 0 0.5em",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="caDonateblood"
                                            id="donateblood"
                                            value="donateblood"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="donateblood">Yes</label>
                                    </div>
                                    <div style={{ fontSize: "1.2em" }}>
                                        <input
                                            type="radio"
                                            name="caDonateblood"
                                            id="cantDonateblood"
                                            value="cantDonateblood"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="cantDonateblood">
                                            No
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0",
                                }}
                            >
                                <fieldset className="radio-field">
                                    <div
                                        className="field-legend"
                                        style={{ margin: "0 1em" }}
                                    >
                                        Can donate plasma?
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.2em",
                                            margin: "0 1em 0 0.5em",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="caDonateplasma"
                                            id="donateplasma"
                                            value="donateplasma"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="donateplasma">
                                            Yes
                                        </label>
                                    </div>
                                    <div style={{ fontSize: "1.2em" }}>
                                        <input
                                            type="radio"
                                            name="caDonateplasma"
                                            id="cantDonateplasma"
                                            value="cantDonateplasma"
                                            onChange={this.handleRadioInput}
                                        />
                                        <label htmlFor="cantDonateplasma">
                                            No
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0",
                                    justifyContent: "center",
                                }}
                            >
                                <CustomInput
                                    customStyle={{
                                        width: "300px",
                                        margin: "0 1em",
                                    }}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    handleChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div
                                className="custrow"
                                style={{
                                    alignSelf: "flex-start",
                                    margin: "1em 0",
                                    justifyContent: "center",
                                }}
                            >
                                <CustomInput
                                    customStyle={{
                                        width: "300px",
                                        margin: "0 1em",
                                    }}
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={this.state.confirmPassword}
                                    handleChange={this.handleChange}
                                    required
                                />
                            </div>
                        </div>
                    ) : null}

                    <div className="error-message">{this.state.err}</div>
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
