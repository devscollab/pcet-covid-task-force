import React from "react";
import { withRouter } from "react-router-dom";
import { Col, Container, Row, Spinner } from "react-bootstrap";

import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import Requests from "../../helpers/requests";

import "./volunteer.styles.scss";

// const categories = [
//     {
//         title: "Central Helpdesk",
//         desc: "Contact the central help desk if you want to know how we can help you during this pandemic",
//         img: "https://picsum.photos/550/275",
//         button: "Volunteer",
//     },
//     {
//         title: "Lab Testing Facility",
//         desc: "If you need verified information of the pathology labs and which tests are available in which areas, we will try to provide all the information that you'll need to contact the correct lab",
//         img: "https://picsum.photos/550/275",
//         button: "Volunteer",
//     },
//     {
//         title: "Hospital Admission",
//         desc: "Hospital bed availability is one of the concerning issues right now and we can help you get verified information about the availability",
//         img: "https://picsum.photos/550/275",
//         button: "Volunteer",
//     },
//     {
//         title: "Oxygen Bed and Ventilator arrangement",
//         desc: "Critical cases might need Oxygen beds and ventilator arrangements and we can help you get correct information and contact details for the same",
//         img: "https://picsum.photos/550/275",
//         button: "Volunteer",
//     },
// ];

class VolunteerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            volunteerType: "VolType",
            message: "",
            contactNumber: "",
            err: "",
            successMsg: "",
            loading: false,
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        let { volunteerType, contactNumber, message } = this.state;

        if (volunteerType === "VolType") {
            this.setState({ err: "Please select a Volunteer Type" });
        } else {
            let volData = {
                volunteerType: volunteerType,
                volunteerObject: {
                    contactNumber: contactNumber,
                    message: message,
                },
            };
            let token = localStorage.getItem("token");

            if (token) {
                this.setState({ loading: true }, () => {
                    Requests.addVolunteer(token, volData)
                        .then((res) => {
                            if (res.data.status === 200) {
                                // logged in successfully
                                this.setState({
                                    volunteerType: "VolType",
                                    message: "",
                                    contactNumber: "",
                                    err: "",
                                    successMsg: `Volunteer data submitted successfully!`,
                                    loading: false,
                                });
                            } else {
                                this.setState({
                                    err: res.data.message,
                                    loading: false,
                                });
                            }
                        })
                        .catch((err) => console.log(err));
                });
            } else {
                // Not Logged In
                this.props.history.push("/login");
            }
        }
    };

    handleChange = (event) => {
        let { value, name } = event.target;

        this.setState({ [name]: value, err: "" });
    };

    render() {
        return (
            <div className="volunteer-page page">
                <div className="volunteer-page-title">Volunteer</div>
                <div className="volunteer-page-description">
                    <i>
                        Helping one person might not change the world, but it
                        could change the world for one person!
                    </i>
                    <br />
                    <br />
                    Please fill out the details in the categories given below if
                    you are available for help and our task force will contact
                    you if your assistance is required for someone affected by
                    the COVID-19 outbreak.
                </div>
                <Container fluid>
                    <Row>
                        <Col>
                            <form
                                onSubmit={this.handleSubmit}
                                className="vol-form"
                            >
                                <div className="vol-form-title">
                                    Volunteer Form
                                </div>
                                <select
                                    style={{
                                        padding: "0.5em",
                                        borderRadius: "5px",
                                        border: "2px solid black",
                                        margin: "0.2em 1em 0.5em 0.5em",
                                    }}
                                    name="volunteerType"
                                    value={this.state.volunteerType}
                                    onChange={this.handleChange}
                                >
                                    <option value="VolType" disabled="disabled">
                                        Volunteer Type
                                    </option>
                                    <option value="Blood Donation">
                                        Blood Donation
                                    </option>
                                    <option value="Medicine Availability">
                                        Medicine Availability
                                    </option>
                                    <option value="Food Availability">
                                        Food Availability
                                    </option>
                                    <option value="Hospital Bed Availability">
                                        Hospital Bed Availability
                                    </option>
                                    <option value="Doctor Suggestions">
                                        Doctor Suggestions
                                    </option>
                                    <option value="Other">Other</option>
                                </select>
                                <CustomInput
                                    type="number"
                                    placeholder="Contact Number"
                                    name="contactNumber"
                                    value={this.state.contactNumber}
                                    handleChange={this.handleChange}
                                    required
                                />
                                <textarea
                                    name="message"
                                    rows="5"
                                    style={{
                                        border: "2px solid black",
                                        borderRadius: "5px",
                                        padding: "1em",
                                        margin: "0.5em",
                                        width: "213px",
                                    }}
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    maxLength="500"
                                    placeholder="Message (Max. 500 char)"
                                    required
                                ></textarea>

                                <div
                                    className="error-message"
                                    style={{ margin: "auto 0.5em" }}
                                >
                                    {this.state.err}
                                </div>

                                <div
                                    className="success-message"
                                    style={{ margin: "auto 0.5em" }}
                                >
                                    {this.state.successMsg}
                                </div>

                                <CustomButton
                                    type="submit"
                                    customStyle={{
                                        width: "200px",
                                        marginBottom: "0.25em",
                                    }}
                                >
                                    {this.state.loading ? (
                                        <Spinner
                                            animation="border"
                                            role="status"
                                        ></Spinner>
                                    ) : (
                                        `Submit`
                                    )}
                                </CustomButton>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(VolunteerPage);
