import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./registered-successfully.style.scss";

const RegisteredSuccessfully = ({ match }) => (
    <div className="page">
        <Col xs={12} className="registered-successfylly">
            Your request has been successfully submitted.
            <br/>
            <br/>
            Please note down your request ID : 
            <br/>
            <span className="comp">{match.params.id}</span>
            <br/>
            <br/>
            <Link to="/" className="btn redirect">
                All Requests
            </Link>


        </Col>
    </div>
);

export default RegisteredSuccessfully;
