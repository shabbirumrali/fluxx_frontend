import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (     
    <footer className="footer mt-3">
      <Container fluid>
        <Row>
          <Col className="footer-fixed">
            <p>
              &copy; 2021 Irreverent Rogue, LLC | 
              <Link to="/privacypolicy" rel="noreferrer" className="px-2">
                your privacy
              </Link>
              |
              <Link to="/terms" rel="noreferrer" className="px-2">
                terms
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
