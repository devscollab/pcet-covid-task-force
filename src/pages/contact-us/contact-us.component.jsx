import React from "react";
import "./contact-us.styles.scss";
import { ReactComponent as WhatsappLogo } from "../../assets/whatsapp.svg";
import { ReactComponent as CallLogo } from "../../assets/call.svg";

const data = [
    {
        title: "Central Help Desk",
        img: "https://picsum.photos/200/300",
        name1: "Anand Lunawant",
        contact1: "8983628653",
        name2: "Tejaswini Yesugade",
        contact2: "9075592361",
    },
    {
        title: "Blood & Plasma Team",
        img: "https://picsum.photos/200/300",
        name1: "Rakshita Khidbide",
        contact1: "9168741574",
        name2: "Pooja Gaikwad",
        contact2: "8446871990",
    },
    {
        title: "Oxygen bed and ventilator arrangement team",
        img: "https://picsum.photos/200/300",
        name1: "Jayesh pawar",
        contact1: "9595377413",
        name2: "Mansi kadam",
        contact2: "8237897104",
    },
    {
        title: "Hospital admissions team",
        img: "https://picsum.photos/200/300",
        name1: "Prasad Harer",
        contact1: "9657808761",
        name2: "Kiran Chinchore",
        contact2: "8788573558",
    },
    {
        title: "Medicine Information",
        img: "https://picsum.photos/200/300",
        name1: "Chandan",
        contact1: "8828453096",
        name2: "Vinay",
        contact2: "9130843969",
    },
    {
        title: "Lab & Testing Team",
        img: "https://picsum.photos/200/300",
        name1: "Ruchika Kalagate",
        contact1: "7755965626",
        name2: "Pranav Bramhe",
        contact2: "7719829201",
    },
    {
        title: "Food availability for the needy",
        img: "https://picsum.photos/200/300",
        name1: "Ashish Bhagwat",
        contact1: "9421934981",
        name2: "Swarali Gholave",
        contact2: "8600143437",
    },
    {
        title: "Vaccination Information",
        img: "https://picsum.photos/200/300",
        name1: "Kajal Joshi",
        contact1: "9130203207",
        name2: "Nachiket D",
        contact2: "96659575867",
    },
    {
        title: "Doctors suggestions",
        img: "https://picsum.photos/200/300",
        name1: "Sayali Mahajan",
        contact1: "9172426703",
    },
    {
        title: "Moral support team",
        img: "https://picsum.photos/200/300",
        name1: "Rushikesh Uttarwar",
        contact1: "9404110192",
        name2: "Ritvik deshpande",
        contact2: " 9067076568",
    },
    {
        title: "Post Covid Communitcation team",
        img: "https://picsum.photos/200/300",
        name1: "Omkar Gadre",
        contact1: "9370310696",
        name2: "Manasi Bajare",
        contact2: "8551014184",
    },
    {
        title: "Technical Support team",
        img: "https://picsum.photos/200/300",
        name1: "Palash Potnurwar",
        contact1: "8806558785",
        name2: "Y",
        contact2: "0000000000",
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
                        {/* <div className="contact-us-card-img">
                                <img src={d.img} alt="" />
                            </div> */}
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
                                            window.open(
                                                `tel:+91${d.contact1}`,
                                                "_self"
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={index === 8 ? "" : "line"}></div>
                            <div
                                className={
                                    index === 8 ? "" : "contact-us-card-data-d1"
                                }
                            >
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
                                            window.open(
                                                `tel:+91${d.contact2}`,
                                                "_self"
                                            );
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
