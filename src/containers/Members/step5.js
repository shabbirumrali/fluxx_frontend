import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import ItemForm from "./ItemForm";

  const Benefits = ({ setForm, formData, navigation }) => {
  const { benefits } = formData;
  const [benefitOpen1, setBenefitOpen1] = useState(true);
  const [benefitOpen2, setBenefitOpen2] = useState(false);
  const { previous, next } = navigation;  

  return (

    <Container>
      <Row className="my-3">
          <Col xs={1} md={5} className="project_details m-2">
            <p> benefits </p>            
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="form-labels">What are the benefits of each goal?</Form.Label>
                <Form.Control as="textarea" rows={2} name="benefits" value={benefits} onChange={setForm} />
              </Form.Group>
              <a className="d-block text-right my-3"
              style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}} >
                ADD IN SCOPE ITEM +
              </a>
              <Button variant="light" type="submit" className="p-3" onClick={previous}>
                BACK
              </Button>
              <Button type="submit" className="ml-4 p-3" onClick={next}
              style={{background: "#5aa380", border: "none"}}>
                SAVE AND CONTINUE
              </Button>              
              <Button variant="link" type="submit" className="d-block mt-4" onClick={next}
                style={{color: "#5aa380", textDecoration: "none"}} >
                Skip this step for now
              </Button>
            </Form>
          </Col>
      {/* <Col xs={1} md={5} className="project_details m-2">
        <p>benefits</p>   
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
      </Col> */}
      

      <Col xs={1} md={6} className="faq-section border p-4">
        <div>
          <p>Frequently Asked Questions</p>
          <div 
            onClick={() => setBenefitOpen1(!benefitOpen1)}
            aria-controls="example-collapse-text"
            aria-expanded={benefitOpen1} 
            className="faq-col mt-4" >
            <p> What exactly is a benefit & how is it different from a goal?</p>

            <Collapse in={benefitOpen1}>
              <div id="example-collapse-text">
                <p>Goals state what you want to achieve and benefits are precise, measurable ways explaining how to achieve that goal. </p>
                <p>For instance, if your goal was to increase profitability of a certain product line, your benefits may include things such as: </p>

                <ul>
                  <li>Reduce waste during manufacturing by 75% </li>                  
                  <li>Increase annual sales by $50,000</li>                  
                </ul>                                                
              </div>
            </Collapse>
          </div>
          <div 
            onClick={() => setBenefitOpen2(!benefitOpen2)}
            aria-controls="example-collapse-text"
            aria-expanded={benefitOpen2} 
            className="faq-col mt-4" >
            <p> What are some more examples of benefits?</p>
            <Collapse in={benefitOpen2}>
              <div id="example-collapse-text">
                <p> Ex.: Reduce travel expenses by $3,000 per trip</p>
                <p> Ex.: Increase production output by 30% </p>
                <p> Ex.: Gain an estimated 20% increase in new customers</p>
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
