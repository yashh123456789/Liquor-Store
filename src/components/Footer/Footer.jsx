import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"
import ftlogo from './2.png'
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className='box'>
            <div className="logo">
              <img src={ftlogo} alt="" />
            </div>

          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>
                <Link to="/terms-and-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=NO.17,+Clombo+07,+Sri+lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMapMarkerAlt style={{ marginRight: "8px" }} />
                  NO.17, Clombo 07, Sri lanka
                </a>
              </li>
              <li>
                <a href="mailto:galbothal@gmail.com">
                  <FaEnvelope style={{ marginRight: "8px" }} />
                  galbothal@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+94726756766">
                  <FaPhone style={{ marginRight: "8px" }} />
                  +94 726756766
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer