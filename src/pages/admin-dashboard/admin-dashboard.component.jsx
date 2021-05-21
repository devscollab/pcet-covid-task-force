import React from "react";
import { Col, Row, Table } from "react-bootstrap";

import "./admin-dashboard.style.scss";

import { leftItems, Data1 } from "./data";


class AdminDashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            activeItem: "",
            activeData : [],
            activeHeaders : []
        };
    }

    load_data(member,HelpData){
        const data = HelpData[member];
        const headers = [];

        // If will be removed when API will be used
        if(!data[0].requestObject["UserID"])
            headers.push("UserID")

        for(var k in data[0].requestObject) headers.push(k);
        //headers.pop(1);
        
        data.forEach(element => {
            //delete element.requestObject['loading']
            element.requestObject = {
                UserID : element.userId,
                ...element.requestObject
            }; 
        });

        this.setState({
            activeItem: leftItems[0],
            activeData : data,
            activeHeaders : headers
        })
    }

    componentDidMount(){
        
        // Get request to bring data
        const data = Data1;

        this.load_data("Blood", data)
    }

    onChangeData(member){

        // Get request to bring data
        const data = Data1; 
        this.load_data(member,data);
        this.setState({
            activeItem: member,
        });

    }
    

    render() {
        return (
            <div className="page">
                <Row>
                    <Col xs={12} md={2} className="mainCol">
                        {leftItems.map((member, index) => (
                                <div
                                    key={index}
                                    style={{marginBottom:'30px'}}
                                    type="button"
                                    onClick={()=>this.onChangeData(member)}
                                    className={`${
                                        this.state.activeItem === member
                                            ? "activated active"
                                            : ""
                                    }`}
                                >
                                    {member}
                                </div>
                        ))}
                    </Col>
                    <Col xs={12} md={10} className="datacol">
                        <h5>{this.state.activeItem}</h5>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    {this.state.activeHeaders.map(
                                        (member, index) => (
                                            <th  key={index}>{member.toUpperCase()}</th>
                                        )
                                    )}
                                </tr>
                            </thead>
                            <tbody>                            
                                {
                                    this.state.activeData.map(
                                    (member, index) => (
                                        <tr  key={index}>
                                            {
                                                Object.keys(member.requestObject).map((key, i) => (
                                                    <td key={key}>
                                                        {member.requestObject[key]}
                                                    </td>
                                                  )
                                                )
                                            }
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AdminDashboard;
