import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import ItemForm from "./ItemForm";

const Goal = ({ setForm, formData, navigation }) => {
  const { goal } = formData;
  const [goalOpen, setGoalOpen] = useState(true);
  const { previous, next } = navigation;

  return (   
    <Container>
    <Row className="my-3">
      <Col xs={1} md={5} className="project_details m-2">
        <p>Goals</p>   
        <ItemForm label="What do you hope to accomplish
            with this project? What do you
            hope to gain or retain with this
            effort?" name="goal" value={goal} onChange={setForm} />
          <Link className="d-block text-right my-3"
          style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}} >
            ADD GOAL +
          </Link>
          <Button variant="light" type="submit" className="p-3" onClick={previous}>
            BACK
          </Button>
          <Button type="submit" className="ml-4 p-3" 
          style={{background: "#5aa380", border: "none"}} onClick={next}>
            SAVE AND CONTINUE
          </Button>              
          <Button variant="link" type="submit" className="d-block mt-4"
            style={{color: "#5aa380", textDecoration: "none"}}  onClick={next}>
            Skip this step for now
          </Button>        
      </Col>

      <Col xs={1} md={6} className="faq-section border p-4">
        <div>
          <p>Frequently Asked Questions</p>
          <div 
            onClick={() => setGoalOpen(!goalOpen)}
            aria-controls="example-collapse-text"
            aria-expanded={goalOpen} 
            className="faq-col mt-4" >
            <p> What type of details should I include in the background? </p>

            <Collapse in={goalOpen}>
              <div id="example-collapse-text">
              Why is the project necessary? Does it address a problem? Does it offer an
              improvement over what you're doing currently? It may help if you imagine that
              you’re explaining things to someone who doesn’t know anything about your project.
              </div>
            </Collapse>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  );
};

export default Goal;
