import React from "react";
import { withRouter } from "react-router-dom";

import { Col, Container, Row, Spinner } from "react-bootstrap";

import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import Requests from "../../helpers/requests";

import "./forgot-password.styles.scss";

class ResetPasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            aadharNumber: "",
            loading: false,
            err: "",
            successMsg: "",
        };
    }

    componentDidMount() {
        let token = localStorage.getItem("token");
        if (token) {
            this.props.history.push("/");
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, aadharNumber } = this.state;
        this.setState({ loading: true }, () => {
            Requests.forgotPassword(email, aadharNumber)
                .then((res) => {
                    if (res.data.status === 200) {
                        this.setState({
                            successMsg: `Password Reset link sent successfully. Please check you inbox and spam folder. It might take a few minutes to receive the mail.`,
                            email: ``,
                            aadharNumber: ``,
                            err: ``,
                            loading: false,
                        });
                    } else {
                        this.setState({
                            successMsg: ``,
                            email: ``,
                            aadharNumber: ``,
                            err: res.data.message,
                            loading: false,
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value, err: "" });
    };

    render() {
        return (
            <div className="reset-password-page page">
                <div className="reset-password-page-title">Forgot Password</div>
                <Container fluid>
                    <Row>
                        <Col>
                            <form
                                onSubmit={this.handleSubmit}
                                className="reset-password-page-form"
                            >
                                <CustomInput
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    customStyle={{ width: "250px" }}
                                    value={this.state.email}
                                    handleChange={this.handleChange}
                                    required
                                />
                                <CustomInput
                                    type="number"
                                    placeholder="Aadhar Number"
                                    name="aadharNumber"
                                    max="999999999999"
                                    min="100000000000"
                                    customStyle={{ width: "250px" }}
                                    value={this.state.aadharNumber}
                                    handleChange={this.handleChange}
                                    required
                                />

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
                                        width: "250px",
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

export default withRouter(ResetPasswordPage);
