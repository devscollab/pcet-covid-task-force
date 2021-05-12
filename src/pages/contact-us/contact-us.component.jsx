import React from "react";
import "./contact-us.styles.scss";
import { ReactComponent as WhatsappLogo } from "../../assets/whatsapp.svg";
import { ReactComponent as CallLogo } from "../../assets/call.svg";

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
                                <div className="info">
                                    <p>{d.name1}</p>
                                    <p>
                                        <a href={`tel:+91${d.contact1}`}>
                                            {d.contact1}
                                        </a>
                                    </p>
                                </div>
                                <div className="logo-box">
                                    <WhatsappLogo
                                        className="logo"
                                        onClick={() => {
                                            window.open(
                                                `https://wa.me/91${d.contact1}`,
                                                "_blank"
                                            );
                                        }}
                                    />
                                    <CallLogo
                                        className="logo"
                                        onClick={() => {
                                            window.open(`tel:+91${d.contact1}`);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="contact-us-card-data-d1">
                                <div className="info">
                                    <p>{d.name2}</p>
                                    <p>
                                        <a href={`tel:+91${d.contact2}`}>
                                            {d.contact2}
                                        </a>
                                    </p>
                                </div>
                                <div className="logo-box">
                                    <WhatsappLogo
                                        className="logo"
                                        onClick={() => {
                                            window.open(
                                                `https://wa.me/91${d.contact2}`,
                                                "_blank"
                                            );
                                        }}
                                    />
                                    <CallLogo
                                        className="logo"
                                        onClick={() => {
                                            window.open(`tel:+91${d.contact2}`);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default ContactUsPage;
