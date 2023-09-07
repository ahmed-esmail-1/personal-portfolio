// Footer.js
import { Container, Row, Col } from "react-bootstrap";
import { NewsletterSubscription } from "./NewsletterSubscription";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer"> 
      <Container>
        <Row>
          <NewsletterSubscription />
        </Row>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ahmedesmailofficial/" target="_blank">
                <img src={navIcon1} alt="Icon 1" />
              </a>
              <a href="https://github.com/ahmed-esmail-1" target="_blank">
                <img src={navIcon2} alt="Icon 2" />
              </a>
              <a href="https://www.instagram.com/crit_x/" target="_blank">
                <img src={navIcon3} alt="Icon 3" />
              </a>
            </div>
            <p>CopyRight 2023. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
