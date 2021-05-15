import React from "react";
import { Col, Row, Table } from "react-bootstrap";

import './admin-dashboard.style.scss';

import {leftItems, Data} from './data';


class AdminDashboard extends React.Component{
    constructor() {
        super();
        this.state = {
            activeItem:leftItems[0],
        };
    }

    render() {
        return (
            <div className="page" >
                <Row>
                    <Col xs={12} md={2} className="mainCol">
                        {leftItems.map((member, index) => (
                                <div key={index}>
                                    <div type='button'
                                        onClick={()=>{
                                            this.setState({
                                                activeItem:member,

                                            })
                                        }}
                                        className={
                                            `${
                                                this.state.activeItem === member ? "activated active" : ""
                                            }`
                                        }
                                    >
                                        {member}
                                    </div>
                                </div>
                            ))}
                    </Col>
                    <Col xs={12} md={10}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            {Data[this.state.activeItem].Headers.map((member, index) => (
                                        <th>
                                            {member}
                                        </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {Data[this.state.activeItem].Data.map((member, index) => (
                                    <tr>
                                        {member.map((member, index) => (
                                            <td>
                                                {member}
                                            </td>
                                    )   )}
                                    </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
};

export default AdminDashboard;
