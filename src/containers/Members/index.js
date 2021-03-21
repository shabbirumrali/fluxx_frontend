import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Members = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2> My Project Charters </h2>

          <Link to="/clanding" className="nav-link"><button name="create a new Charter">Create New Charter</button></Link> 
        </Col>
      </Row>
    </Container>
  );
};

export default Members;
