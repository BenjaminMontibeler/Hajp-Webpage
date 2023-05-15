import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h4>About Us</h4>
            <p>
              We are a dance studio that offers a variety of dance styles for
              all ages and levels. Our mission is to provide quality dance
              education and create a positive and fun learning environment for
              our students.
            </p>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <p>
              Phone: (123) 456-7890
              <br />
              Email: info@dancestudio.com
              <br />
              Address: 123 Main St, Anytown USA
            </p>
          </Col>
          <Col md={4}>
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  <i className="fab fa-facebook fa-lg"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram fa-lg"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter fa-lg"></i> Twitter
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Dance Studio. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;