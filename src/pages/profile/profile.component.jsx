import React from "react";

import "./profile.styles.scss";

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
            </div>
        );
    }
}

export default ProfilePage;
