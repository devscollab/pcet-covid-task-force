import React from "react";
import { withRouter } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import { ReactComponent as LoginImage } from "../../assets/login-image.svg";

import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import Requests from "../../helpers/requests";

import "./login.styles.scss";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            err: "",
            loading: false,
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        this.setState({ loading: true }, () => {
            Requests.login(email, password)
                .then((res) => {
                    if (res.data.status === 200) {
                        // logged in successfully
                        localStorage.setItem("token", res.data.token);
                        Requests.getData(res.data.token)
                            .then((userRes) => {
                                if (userRes.data.status === 200) {
                                    localStorage.setItem(
                                        "firstName",
                                        userRes.data.userData.firstName
                                    );
                                    localStorage.setItem(
                                        "lastName",
                                        userRes.data.userData.lastName
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
                                this.props.updateUserName();
                                this.props.history.push("/");
                            });
                    } else {
                        this.setState({
                            email: "",
                            password: "",
                            err: res.data.message,
                        });
                    }
                })
                .then(() => {
                    this.setState({ loading: false });
                })
                .catch((err) => console.log(err));
        });
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value, err: "" });
    };

    render() {
        return (
            <div className="log-in-page page">
                <div className="log-in-page-img">
                    <LoginImage />
                </div>
                <form className="log-in-page-form" onSubmit={this.handleSubmit}>
                    <div className="log-in-page-form-title">LOGIN</div>
                    <div className="error-message">{this.state.err}</div>
                    <CustomInput
                        customStyle={{ width: "300px" }}
                        type="email"
                        name="email"
                        placeholder="User Email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomInput
                        customStyle={{ width: "300px" }}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />

                    <CustomButton
                        type="submit"
                        customStyle={{ width: "300px", marginBottom: "0.25em" }}
                    >
                        {this.state.loading ? (
                            <Spinner animation="border" role="status"></Spinner>
                        ) : (
                            `Submit`
                        )}
                    </CustomButton>
                    <div className="forgot-password">
                        Forgot your password? Click{" "}
                        <span className="click-here">here</span>
                    </div>
                    <div
                        className="register-link"
                        onClick={() => this.props.history.push("/register")}
                    >
                        Create a new account / Register{" "}
                        <span style={{ fontSize: "1.5em" }}>&#x21A6;</span>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginPage);
