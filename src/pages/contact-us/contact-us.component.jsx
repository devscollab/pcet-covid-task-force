import React from "react";

import "./contact-us.styles.scss";

const data = [
    {
        title: "Food",
        img: "https://picsum.photos/200/300",
        name1: "John Doe",
        contact1: "8421546859",
        name2: "Name Beta",
        contact2: "8421546859",
    },
    {
        title: "Blood",
        img: "https://picsum.photos/200/300",
        name1: "Name Alpha",
        contact1: "8421546859",
        name2: "Name Beta",
        contact2: "8421546859",
    },
    {
        title: "Hospital",
        img: "https://picsum.photos/200/300",
        name1: "Name Alpha",
        contact1: "8421546859",
        name2: "Name Beta",
        contact2: "8421546859",
    },
    {
        title: "Vaccine",
        img: "https://picsum.photos/200/300",
        name1: "Name Alpha",
        contact1: "8421546859",
        name2: "Name Beta",
        contact2: "8421546859",
    },
];
const ContactUsPage = () => (
    <div className="contact-us-page page">
        <div className="contact-us-page-title">Contact Us</div>
        <div className="contact-us-page-data">
            {data.map((d, index) => (
                <div key={index}>
                    <p className="title">{d.title}</p>
                    <div className="contact-us-card">
                        <div className="contact-us-card-img">
                            <img src={d.img} alt="" />
                        </div>
                        <div className="contact-us-card-data">
                            <div className="contact-us-card-data-d1">
                                <p>{d.name1}</p>
                                <p>{d.contact1}</p>
                            </div>
                            <div className="line"></div>
                            <div className="contact-us-card-data-d1">
                                <p>{d.name2}</p>
                                <p>{d.contact2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ContactUsPage;
