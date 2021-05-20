import React from "react";
import { withRouter } from "react-router-dom";

import Requests from "../../helpers/requests";

import "./profile.styles.scss";
import {
    Col,
    Container,
    Row,
    Button,
    Card,
    Form,
    Spinner,
} from "react-bootstrap";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        let token = localStorage.getItem("token");
        if (token) {
            Requests.getData(token)
                .then((res) => {
                    if (res.data.status === 200) {
                        this.setState({ err: "", ...res.data.userData });
                    } else {
                        this.setState({
                            err: `There was some error retrieving the data. Try logging out if this error persists.`,
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            // Not Logged In
            this.props.history.push("/login");
        }
    }

    handleSubmit() {
        let {
            startCovidDate,
            endCovidDate,
            dateOfDose1,
            dateOfDose2,
            err,
            ...data
        } = this.state;
        startCovidDate = new Date(startCovidDate).getTime();
        endCovidDate = new Date(endCovidDate).getTime();
        dateOfDose1 = new Date(dateOfDose1).getTime();
        dateOfDose2 = new Date(dateOfDose2).getTime();

        let token = localStorage.getItem("token");
        if (token) {
            let dataToBeSent = {
                startCovidDate: startCovidDate,
                endCovidDate: endCovidDate,
                dateOfDose1: dateOfDose1,
                dateOfDose2: dateOfDose2,
                ...data,
            };
            console.log(dataToBeSent);
            Requests.updateData(token, dataToBeSent)
                .then((res) => {
                    if (res.data.status === 200) {
                    } else {
                        this.setState({ err: res.data.message });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            // not logged in
            this.props.history.push("/login");
        }
    }

    handleChange(event) {
        let { name, value } = event.target;

        if (
            name === "haCovid" ||
            name === "isRecovered" ||
            name === "isVaccinated" ||
            name === "isRegisteredoncowin" ||
            name === "caDonateblood" ||
            name === "caDonateplasma"
        ) {
            if (value === "yes") value = true;
            else value = false;
        }

        this.setState({ [name]: value, err: "" });
    }

    getDate(ms) {
        let d = new Date(ms),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
    }

    render() {
        if (this.state === null) {
            return (
                <div className="profile-page page spinner-container">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            );
        } else {
            return (
                <div className="profile-page page">
                    {/* <div className="profile-page-title">Profile Page</div> */}
                    <Container>
                        <Row>
                            <Col className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                <Card className="h-100">
                                    <Card.Body>
                                        <div className="account-settings">
                                            <div className="user-profile">
                                                <div className="user-avatar">
                                                    <Card.Img
                                                        src="https://raw.githubusercontent.com/devscollab/pcet-covid-task-force/main/src/assets/account.webp"
                                                        alt="User Profile"
                                                    />
                                                    {/* <Form.Group>
                    <Form.File 
						className="about"
                        id="custom-file"
                        label="Update Profile Pic"
                    />
                    </Form.Group> */}
                                                </div>
                                                <Card.Title className="user-name">
                                                    {this.state.firstName}{" "}
                                                    {this.state.lastName}
                                                </Card.Title>
                                            </div>
                                            <div className="about">
                                                <div
                                                    className="err-message"
                                                    style={{
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    {this.state.err}
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                <Card className="h-100">
                                    <Card.Body>
                                        <Row>
                                            <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <h5 className="mb-2 headline">
                                                    Personal Details
                                                </h5>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label name="LastName">
                                                        First Name
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="firstName"
                                                        placeholder="Enter First Name"
                                                        value={
                                                            this.state.firstName
                                                        }
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label name="LastName">
                                                        Last Name
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="lastName"
                                                        placeholder="Enter Last Name"
                                                        value={
                                                            this.state.lastName
                                                        }
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Email
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        placeholder="Enter Email"
                                                        value={this.state.email}
                                                        // onChange={this.handleChange}
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>DOB</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        name="dob"
                                                        placeholder="Enter Date Of Birth"
                                                        value={this.getDate(
                                                            this.state.dob
                                                        )}
                                                        // onChange={this.handleChange}
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Aadhar Number
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="aadharNumber"
                                                        placeholder="Enter Aadhar Number"
                                                        value={`XXXX XXXX ${this.state.aadharNumber}`}
                                                        disabled
                                                        // onChange={this.handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Blood Group
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="bloodGroup"
                                                        placeholder="Enter Blood Group"
                                                        value={this.state.bloodGroup.toUpperCase()}
                                                        // onChange={this.handleChange}
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Contact Number
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        name="contactNumber"
                                                        placeholder="Enter Phone Number"
                                                        value={
                                                            this.state
                                                                .contactNumber
                                                        }
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Emergency Contact Number
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        name="emergencyContact"
                                                        placeholder="Enter Emergency No."
                                                        value={
                                                            this.state
                                                                .emergencyContact
                                                        }
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Gender
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="gender"
                                                        name="gender"
                                                        placeholder="Gender"
                                                        value={this.state.gender.toUpperCase()}
                                                        // onChange={this.handleChange}
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <h5 className="mt-3 mb-2 headline">
                                                    Address
                                                </h5>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Current Address
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="address"
                                                        name="currentAddress"
                                                        placeholder="Address"
                                                        value={
                                                            this.state
                                                                .currentAddress
                                                        }
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        City
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="city"
                                                        name="city"
                                                        placeholder="Enter City"
                                                        value={this.state.city}
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        State
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="state"
                                                        name="state"
                                                        placeholder="Enter State"
                                                        value={this.state.state}
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Pin Code
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="pin code"
                                                        name="pincode"
                                                        placeholder="Enter Pin Code"
                                                        value={
                                                            this.state.pincode
                                                        }
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <h5 className="mt-3 mb-2 headline">
                                                    College Details
                                                </h5>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        College
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="college"
                                                        placeholder="Enter College"
                                                        value={this.state.college.toUpperCase()}
                                                        // onChange={this.handleChange}
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Designation
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="isStudent"
                                                        placeholder="Enter College"
                                                        value={
                                                            this.state.isStudent
                                                                ? `Student`
                                                                : `Staff`
                                                        }
                                                        // onChange={this.handleChange}
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Course
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="course"
                                                        placeholder="Enter Course"
                                                        value={this.state.course.toUpperCase()}
                                                        // onChange={this.handleChange}
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Year
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="year"
                                                        placeholder="Enter Year"
                                                        value={this.state.year}
                                                        // onChange={this.handleChange}
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Branch
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="branch"
                                                        placeholder="Enter Branch"
                                                        value={this.state.branch.toUpperCase()}
                                                        // onChange={this.handleChange}
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Division
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="div"
                                                        placeholder="Enter Division"
                                                        value={this.state.div}
                                                        // onChange={this.handleChange}
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Roll Number
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="rollNumber"
                                                        placeholder="Enter Roll Number"
                                                        value={
                                                            this.state
                                                                .rollNumber
                                                        }
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <h5 className="mt-3 mb-2 headline">
                                                    Covid Details
                                                </h5>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Had Covid
                                                    </Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        size="sm"
                                                        custom
                                                        name="haCovid"
                                                        value={
                                                            this.state.haCovid
                                                                ? "yes"
                                                                : "no"
                                                        }
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    >
                                                        <option value="yes">
                                                            Yes
                                                        </option>
                                                        <option value="no">
                                                            No
                                                        </option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            {this.state.haCovid ? (
                                                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <Form.Group>
                                                        <Form.Label>
                                                            Start Covid Date
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="date"
                                                            placeholder="Enter Covid Start Date"
                                                            value={this.getDate(
                                                                this.state
                                                                    .startCovidDate
                                                                    ? this.state
                                                                          .startCovidDate
                                                                    : ""
                                                            )}
                                                            onChange={
                                                                this
                                                                    .handleChange
                                                            }
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            ) : null}
                                            {this.state.haCovid ? (
                                                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <Form.Group>
                                                        <Form.Label>
                                                            Have you recovered
                                                            from Covid?
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="select"
                                                            size="sm"
                                                            custom
                                                            name="isRecovered"
                                                            value={
                                                                this.state
                                                                    .isRecovered ===
                                                                true
                                                                    ? "yes"
                                                                    : this.state
                                                                          .isRecovered ===
                                                                      false
                                                                    ? "no"
                                                                    : "null"
                                                            }
                                                            onChange={
                                                                this
                                                                    .handleChange
                                                            }
                                                        >
                                                            <option value="yes">
                                                                Yes
                                                            </option>
                                                            <option value="no">
                                                                No
                                                            </option>
                                                            <option
                                                                value="null"
                                                                disabled="disabled"
                                                            >
                                                                Null
                                                            </option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                            ) : null}
                                            {this.state.haCovid ? (
                                                this.state.isRecovered ===
                                                true ? (
                                                    <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <Form.Group>
                                                            <Form.Label>
                                                                End Covid Date
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="date"
                                                                placeholder="Enter Covid End Date"
                                                                value={this.getDate(
                                                                    this.state
                                                                        .endCovidDate
                                                                        ? this
                                                                              .state
                                                                              .endCovidDate
                                                                        : ""
                                                                )}
                                                                onChange={
                                                                    this
                                                                        .handleChange
                                                                }
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                ) : null
                                            ) : null}

                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Got vaccinated?
                                                    </Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        size="sm"
                                                        custom
                                                        name="isVaccinated"
                                                        value={
                                                            this.state
                                                                .isVaccinated
                                                                ? "yes"
                                                                : "no"
                                                        }
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    >
                                                        <option value="yes">
                                                            Yes
                                                        </option>
                                                        <option value="no">
                                                            No
                                                        </option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            {this.state.isVaccinated ===
                                            true ? null : (
                                                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <Form.Group>
                                                        <Form.Label>
                                                            Registered on CoWin
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="select"
                                                            size="sm"
                                                            custom
                                                            name="isRegisteredoncowin"
                                                            value={
                                                                this.state
                                                                    .isRegisteredoncowin ===
                                                                true
                                                                    ? "yes"
                                                                    : this.state
                                                                          .isRegisteredoncowin ===
                                                                      false
                                                                    ? "no"
                                                                    : "null"
                                                            }
                                                            onChange={
                                                                this
                                                                    .handleChange
                                                            }
                                                        >
                                                            <option value="yes">
                                                                Yes
                                                            </option>
                                                            <option value="no">
                                                                No
                                                            </option>
                                                            <option
                                                                value="null"
                                                                disabled="disabled"
                                                            >
                                                                Null
                                                            </option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                            )}
                                            {this.state.isVaccinated ===
                                            true ? (
                                                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <Form.Group>
                                                        <Form.Label>
                                                            Vaccine Type
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter Type of Vaccine"
                                                            name="vaccineType"
                                                            value={
                                                                this.state
                                                                    .vaccineType
                                                            }
                                                            onChange={
                                                                this
                                                                    .handleChange
                                                            }
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            ) : null}
                                            {this.state.isVaccinated ===
                                            true ? (
                                                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <Form.Group>
                                                        <Form.Label>
                                                            Date Of Dose 1
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="date"
                                                            placeholder="Enter Dose1 Date"
                                                            name="dateOfDose1"
                                                            value={this.getDate(
                                                                this.state
                                                                    .dateOfDose1
                                                                    ? this.state
                                                                          .dateOfDose1
                                                                    : ""
                                                            )}
                                                            onChange={
                                                                this
                                                                    .handleChange
                                                            }
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            ) : null}
                                            {this.state.isVaccinated ===
                                            true ? (
                                                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <Form.Group>
                                                        <Form.Label>
                                                            Date Of Dose 2
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="date"
                                                            placeholder="Enter Dose2 Date"
                                                            name="dateOfDose2"
                                                            value={this.getDate(
                                                                this.state
                                                                    .dateOfDose2
                                                                    ? this.state
                                                                          .dateOfDose2
                                                                    : ""
                                                            )}
                                                            onChange={
                                                                this
                                                                    .handleChange
                                                            }
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            ) : null}
                                        </Row>
                                        <Row>
                                            <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <h5 className="mt-3 mb-2 headline">
                                                    Donation
                                                </h5>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Willing to Donate Blood?
                                                    </Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        size="sm"
                                                        custom
                                                        name="caDonateblood"
                                                        value={
                                                            this.state
                                                                .caDonateblood
                                                                ? "yes"
                                                                : "no"
                                                        }
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    >
                                                        <option value="yes">
                                                            Yes
                                                        </option>
                                                        <option value="no">
                                                            No
                                                        </option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <Form.Group>
                                                    <Form.Label>
                                                        Willing to Donate
                                                        Plasma?
                                                    </Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        size="sm"
                                                        custom
                                                        name="caDonateblood"
                                                        value={"na"}
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    >
                                                        <option
                                                            value="yes"
                                                            disabled="disabled"
                                                        >
                                                            Yes
                                                        </option>
                                                        <option
                                                            value="no"
                                                            disabled="disabled"
                                                        >
                                                            No
                                                        </option>
                                                        <option value="na">
                                                            Not Applicable
                                                        </option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            {/* <Form.Group>
                                                <Form.Check
                                                    required
                                                    label="All the data filled is correct"
                                                    feedback="You must agree before submitting."
                                                />
                                            </Form.Group> */}
                                            <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="err-message">
                                                    {this.state.err}
                                                </div>
                                                <div className="text-right">
                                                    <Button
                                                        variant="light"
                                                        id="cancel"
                                                        name="cancel"
                                                        onClick={() => {
                                                            this.props.history.push(
                                                                "/"
                                                            );
                                                        }}
                                                    >
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        variant="success"
                                                        id="submit"
                                                        name="submit"
                                                        onClick={
                                                            this.handleSubmit
                                                        }
                                                    >
                                                        Update
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    }
}

export default withRouter(ProfilePage);
