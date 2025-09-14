import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import colomboImg from "../Images/branches/colombo.jpg";
import kandyImg from "../Images/branches/kandy.jpg";
import galleImg from "../Images/branches/galle.jpg";
import contactusHeroImage from '../Images/table.jpg';
import Banner from "../components/Banner/Banner";

const branches = [
    {
        name: "Colombo Branch",
        address: "NO.17, Colombo 07, Sri Lanka",
        img: colomboImg,
        details: "Tel: +94 112345678",
    },
    {
        name: "Kandy Branch",
        address: "NO.25, Kandy Road, Kandy, Sri Lanka",
        img: kandyImg,
        details: "Tel: +94 812345678",
    },
    {
        name: "Galle Branch",
        address: "NO.10, Galle Fort, Galle, Sri Lanka",
        img: galleImg,
        details: "Tel: +94 912345678",
    },
];

const Contactus = () => (

    <div className="contactus-container" >
        <Banner
            title="Contact Us"
            subtitle="Get in touch with our team"
            image={contactusHeroImage}
            overlayHeight="50%"
        />
        <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
            <div style={{ marginBottom: 32 }}>
                <h2>Our Branches</h2>
                <div className="branches-list">
                    {branches.map((branch, idx) => (
                        <div className="branch-card" key={idx}>
                            <img src={branch.img} alt={branch.name} className="branch-img" />
                            <div className="branch-overlay">
                                {branch.name}
                                <p>
                                    <FaMapMarkerAlt style={{ marginRight: 5 }} />
                                    {branch.address}
                                </p>
                                <p>
                                    <FaPhone style={{ marginRight: 5 }} />
                                    {branch.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ marginBottom: 32 }}>
                <h2>Contact Details</h2>
                <ul>
                    <li>
                        <FaEnvelope style={{ marginRight: 8 }} />
                        Email: <a href="mailto:galbothal@gmail.com">galbothal@gmail.com</a>
                    </li>
                    <li>
                        <FaPhone style={{ marginRight: 8 }} />
                        Phone: <a href="tel:+94726756766">+94 726756766</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Contact Form</h2>
                <form>
                    <div style={{ marginBottom: 12 }}>
                        <label>Name:</label><br />
                        <input
                            type="text"
                            name="name"
                            required
                            style={{
                                width: "100%",
                                padding: "8px",
                                backgroundColor: "#c7c3c361",
                                color: "black",
                                borderRadius: "4px"
                            }}
                        />                </div>
                    <div style={{ marginBottom: 12 }}>
                        <label>Email:</label><br />
                        <input
                            type="email"
                            name="email"
                            required
                            style={{
                                width: "100%",
                                padding: "8px",
                                backgroundColor: "#c7c3c361",
                                color: "black",
                                borderRadius: "4px"
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: 12 }}>
                        <label>Message:</label><br />
                        <textarea
                            name="message"
                            rows={4}
                            required
                            style={{
                                width: "100%",
                                padding: "8px",
                                backgroundColor: "#c7c3c361",
                                color: "black",
                                borderRadius: "4px"
                            }}
                        />
                    </div>
                    <button type="submit" style={{ padding: "8px 24px", background: "#ff4d30", color: "#fff", border: "none", borderRadius: 4 }}>
                        Send
                    </button>
                </form>
            </div>

        </div>

    </div>
);

export default Contactus;