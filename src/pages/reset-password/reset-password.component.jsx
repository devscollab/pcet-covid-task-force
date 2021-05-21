import React from "react";
import { withRouter } from "react-router-dom";

import { Col, Container, Row, Spinner } from "react-bootstrap";

import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import Requests from "../../helpers/requests";

import "./reset-password.styles.scss";

class ResetPasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            confirmPassword: "",
            hash: "",
            loading: false,
            err: "",
            successMsg: "",
        };
    }

    componentDidMount() {
        let hash = decodeURIComponent(this.props.match.params.hash);
        if (hash) {
            this.setState({ hash: hash });
        } else {
            this.props.history.push("/");
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { password, confirmPassword, hash } = this.state;

        if (password === confirmPassword) {
            this.setState({ loading: true }, () => {
                Requests.resetPassword(hash, password).then((res) => {
                    if (res.data.status === 200) {
                        this.setState({
                            loading: false,
                            successMsg: `Password Reset Successfully!`,
                            password: "",
                            confirmPassword: "",
                            err: ``,
                        });
                    } else {
                        this.setState({
                            loading: false,
                            successMsg: ``,
                            password: "",
                            confirmPassword: "",
                            err: res.data.message,
                        });
                    }
                });
            });
        } else {
            this.setState({
                err: `Password and Confirm Password should match`,
            });
        }
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value, err: "" });
    };

    render() {
        return (
            <div className="reset-password-page page">
                <div className="reset-password-page-title">Reset Password</div>
                <Container fluid>
                    <Row>
                        <Col>
                            <form
                                onSubmit={this.handleSubmit}
                                className="reset-password-page-form"
                            >
                                <CustomInput
                                    type="text"
                                    placeholder="New Password"
                                    name="password"
                                    customStyle={{ width: "250px" }}
                                    value={this.state.password}
                                    handleChange={this.handleChange}
                                    required
                                />
                                <CustomInput
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    customStyle={{ width: "250px" }}
                                    value={this.state.confirmPassword}
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
