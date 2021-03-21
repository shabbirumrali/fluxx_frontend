import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import ItemForm from "./ItemForm";

const Benefits = ({ setForm, formData, navigation }) => {
  const { benefits } = formData;
  const [benefitOpen, setBenefitOpen] = useState(true);
  const { previous, next } = navigation;

  return (   
    <Container>
    <Row className="my-3">
      <Col xs={1} md={5} className="project_details m-2">
        <p>Benefits</p>   
        <ItemForm label="What are the benefits of each goal?" name="benefits" value={benefits} onChange={setForm} />
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
            onClick={() => setBenefitOpen(!benefitOpen)}
            aria-controls="example-collapse-text"
            aria-expanded={benefitOpen} 
            className="faq-col mt-4" >
            <p> What exactly is a benefit & how is it different from a goal?</p>

            <Collapse in={benefitOpen}>
              <div id="example-collapse-text">
                Goals state what you want to achieve and
                benefits are precise, measurable ways
                explaining how to achieve that goal.
                For instance, if your goal was to increase
                profitability of a certain product line, your
                benefits may include things such as:
                ●
                Skip this step for now
                ●
                Reduce waste during
                manufacturing by 75%
                Increase annual sales by $50,000
              </div>
            </Collapse>
          </div>
          <div 
            onClick={() => setBenefitOpen(!benefitOpen)}
            aria-controls="example-collapse-text"
            aria-expanded={benefitOpen} 
            className="faq-col mt-4" >
            <p> What are some more examples of benefits?</p>
            <Collapse in={benefitOpen}>
              <div id="example-collapse-text">
                Ex.: Reduce travel expenses by $3,000 per
                trip
                Ex.: Increase production output by 30%
                Ex.: Gain an estimated 20% increase in
                new customers
              </div>
            </Collapse>

            </div>
        </div>
      </Col>
    </Row>
  </Container>
  );
};

export default Benefits;
