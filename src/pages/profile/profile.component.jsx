import React from "react";
import "./profile.styles.scss";
import { Col, Container, Row ,Button, Card,Form } from "react-bootstrap";
class ProfilePage extends React.Component {
    constructor() {
        super();
        this.state = {
            dob: 963273600000,
            startCovidDate: null,
            endCovidDate: null,
            dateOfDose1: 1620864000000,
            dateOfDose2: null,
            isStudent: true,
            haCovid: false,
            isRecovered: null,
            isVaccinated: true,
            isRegisteredoncowin: null,
            caDonateblood: true,
            caDonateplasma: false,
            email: "testuser@gmail.com",
            firstName: "Test",
            lastName: "User",
            age: 19,
            contactNumber: 8452632152,
            gender: "male",
            college: "pccoe",
            course: "be",
            year: "3",
            branch: "comp",
            div: "B",
            bloodGroup: "o+ve",
            rollNumber: "TECOB000",
            aadharNumber: "XXXXXXXX5964",
            currentAddress: "Vaishali Residency, Kathe Galli, Dwarka",
            city: "Nashik",
            state: "Maharashtra",
            pincode: 422011,
            emergencyContact: 8456236548,
            vaccineType: "Covishield",
        };
    }

    render() {
        return (
            <div className="profile-page page">
                <div className="profile-page-title">Profile Page</div>
                <Container>
<Row>
<Col className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
<Card className="h-20">
	<Card.Body>
		<div className="account-settings">
			<div className="user-profile">
				<div className="user-avatar">
					<Card.Img src="https://picsum.photos/200/300.webp" alt="User Profile"/>
                    {/* <Form.Group>
                    <Form.File 
						className="about"
                        id="custom-file"
                        label="Update Profile Pic"
                    />
                    </Form.Group> */}
				</div>
				<Card.Title className="user-name">John Doe</Card.Title>
				
			</div>
			<div className="about">
				<Card.Title>About</Card.Title>
				<Card.Text>Lorem anim aliquip labore laborum non sit. Cillum tempor eu enim nostrud quis.Labore minim incididunt aliquip adipisicing deserunt pariatur adipisicing velit ullamco ad incididunt labore sit.</Card.Text>
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
				<h5 className="mb-2 headline">Personal Details</h5>
			</Col>
            <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label name="LastName">First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label name="LastName">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
                <Form.Label>DOB</Form.Label>
                <Form.Control type="text" placeholder="Enter Date Of Birth" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
                <Form.Label>Aadhar Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Aadhar Number" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
                <Form.Label>Blood Group</Form.Label>
                <Form.Control type="text" placeholder="Enter Blood Group" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Contact Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone Number" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Emergency Contact Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Emergency No." />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Gender</Form.Label>
                <Form.Control type="text" id="gender" placeholder="Gender" />
				</Form.Group>
			</Col>
		</Row>
		<Row>
			<Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h5 className="mt-3 mb-2 headline">Address</h5>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Current Address</Form.Label>
                <Form.Control type="text" id="address" placeholder="Address" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>City</Form.Label>
                <Form.Control type="text" id="city" placeholder="Enter City" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>State</Form.Label>
                <Form.Control type="text" id="state" placeholder="Enter State" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Pin Code</Form.Label>
                <Form.Control type="text" id="pin code" placeholder="Enter Pin Code" />
				</Form.Group>
			</Col>
		</Row>
		<Row>
			<Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h5 className="mt-3 mb-2 headline">College Details</h5>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>College</Form.Label>
                <Form.Control type="text" placeholder="Enter College" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Is Student?</Form.Label>
                <Form.Control as="select" size="sm" custom >
				<option>Yes</option>
      			<option>No</option>
				</Form.Control>
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Course</Form.Label>
                <Form.Control type="text" placeholder="Enter Course" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Year</Form.Label>
                <Form.Control type="text"  placeholder="Enter Year" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Branch</Form.Label>
                <Form.Control type="text"placeholder="Enter Branch" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Division</Form.Label>
                <Form.Control type="text" placeholder="Enter Division" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Roll Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Roll Number" />
				</Form.Group>
			</Col>
		</Row>
		<Row>
			<Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h5 className="mt-3 mb-2 headline">Covid Details</h5>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Had Covid</Form.Label>
                <Form.Control as="select" size="sm" custom >
				<option>Yes</option>
      			<option>No</option>
				</Form.Control>
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Start Covid Date</Form.Label>
                <Form.Control type="text" placeholder="Enter Covid Start Date" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>End Covid Date</Form.Label>
                <Form.Control type="text"  placeholder="Enter Covid End Date" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Have you recovered from Covid?</Form.Label>
				<Form.Control as="select" size="sm" custom >
				<option>Yes</option>
      			<option>No</option>
				</Form.Control>
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Registered on CoWin</Form.Label>
				<Form.Control as="select" size="sm" custom >
				<option>Yes</option>
      			<option>No</option>
				</Form.Control>
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Got vaccinated?</Form.Label>
				<Form.Control as="select" size="sm" custom >
				<option>Yes</option>
      			<option>No</option>
				</Form.Control>
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Vaccine Type</Form.Label>
                <Form.Control type="text" placeholder="Enter Type of Vaccine" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Date Of Dose 1</Form.Label>
                <Form.Control type="text" placeholder="Enter Dose1 Date" />
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Date Of Dose 2</Form.Label>
                <Form.Control type="text" placeholder="Enter Dose2 Date" />
				</Form.Group>
			</Col>
		</Row>
		<Row>
			<Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h5 className="mt-3 mb-2 headline">Donation</h5>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Willing to Donate Blood?</Form.Label>
                <Form.Control as="select" size="sm" custom >
				<option>Yes</option>
      			<option>No</option>
				</Form.Control>
				</Form.Group>
			</Col>
			<Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<Form.Group>
				<Form.Label>Willing to Donate Plasma?</Form.Label>
                <Form.Control as="select" size="sm" custom >
				<option>Yes</option>
      			<option>No</option>
				</Form.Control>
				</Form.Group>
			</Col>
			
		</Row>
		<Row>
		<Form.Group>
        <Form.Check
          required
          label="All the data filled is correct"
          feedback="You must agree before submitting."
        />
      </Form.Group>
			<Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="text-right">
                <Button variant="light" id="submit" name="submit">Cancel</Button>
                <Button variant="success" id="submit" name="submit">Update</Button>
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

export default ProfilePage;
