import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (     
    <Container fluid>
      <Row>
        <Col className="footer-fixed">
          <p>
            &copy; 2021 Irreverent Rogue, LLC | 
            <a href="/" rel="noreferrer" className="px-2">
              your privacy
            </a>
             |
            <a href="/" rel="noreferrer" className="px-2">
              terms
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
