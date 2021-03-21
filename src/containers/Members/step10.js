import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import ItemForm from "./ItemForm";

const Assumptions = ({ setForm, formData, navigation }) => {
  const { assumptionTime } = formData;
    
  const [assumptionsOpen, setAssumptionsOpen] = useState(true);
  const { previous, next } = navigation;

  return (   
    <Container>
        <Row className="my-3">
          <Col xs={1} md={5} className="project_details m-2">
            <p> Assumptions </p> 
            <ItemForm label="What are the assumptions at this time?" name="assumptionTime" value={assumptionTime} onChange={setForm} />             
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="form-labels">What are the assumptions at this time?</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>              
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
            </Form>
          </Col>

          <Col xs={1} md={6} className="faq-section border p-4">
            <div>
              <p>Frequently Asked Questions</p>

              <div 
                onClick={() => setAssumptionsOpen(!assumptionsOpen)}
                aria-controls="example-collapse-text"
                aria-expanded={assumptionsOpen} 
                className="faq-col mt-4" >
                <p> What exactly is an assumption? </p>

                <Collapse in={assumptionsOpen}>
                  <div id="example-collapse-text">
                    How much will all of this cost? Are you going to need new equipment? Will you
                    need to hire outside assistance? The estimated total of all of those items
                    should be reflected here. You may not know exactly how much you'll need yet,
                    but try to get as close as you can with what you know right now.
                  </div>
                </Collapse>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default Assumptions;