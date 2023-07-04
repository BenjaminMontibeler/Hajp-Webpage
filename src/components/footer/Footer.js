import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h4>O nama</h4>
            <p>
            Hajp je novonastali plesni studio osnovan prije od 3 godine od strane dvoje mladih plesača, trenera i studenata Josipa Bišćana i Karle Mitrović.
            Josip i Karla bave se plesom više od 10 godina, dotakli su se mnogih plesnih stilova, sudjelovali u brojnim nastupima, natjecanjima,
            koreografirali spotove te osnivali plesne evente. Hajp je sam po sebi počeo kao plesni event u lokalnom studentskom kafiću gdje su Karla i Josipa
            osjetili zainteresiranost mladih studenata za plesom.
            </p>
          </Col>
          <Col md={4} className="text-center footer-kontakt">
            <h4>Kontakt</h4>
            <p>
              Telefon: 095 698 6689
              <br />
              <br />
              Email: hajp@gmail.com
              <br />
              <br />
              Adresa: Ivana Gundulića 5, Osijek
            </p>
          </Col>
          <Col md={4} className="text-end">
            <h4>Pratite nas</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/profile.php?id=100086255118054">
                  <i className="fab fa-facebook fa-lg"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/hajpos/">
                  <i className="fab fa-instagram fa-lg"></i> Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Hajp Plesni studio. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;