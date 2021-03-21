import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";

import ItemForm from "./ItemForm";
const Address = ({ setForm, formData, navigation }) => {
  const { project_manager, project_sponsor } = formData;
  const [pmasOpen, setPmasOpen] = useState(true);
  const [pmasOpen2, setPmasOpen2] = useState(false);
  

  const { previous, next } = navigation;

  return (    
    <Container>
    <Row className="my-3">
      <Col xs={1} md={5} className="project_details m-2">
        <p>Project Manager & Sponsor</p>            
        <ItemForm
        label="Who will be the Project Manager?"
        name="project_sponsor"
        value={project_manager}
        onChange={setForm}
      />
      <ItemForm label="Who is the Project Sponsor?" name="project_sponsor" value={project_sponsor} onChange={setForm} /> 

          <Button variant="light" type="submit" className="p-3" onClick={previous}>
            BACK
          </Button>
          <Button type="submit" className="ml-4 p-3" 
          style={{background: "#5aa380", border: "none"}} onClick={next}>
            SAVE AND CONTINUE
          </Button>
          
          <Button variant="link" type="submit"
            style={{color: "#5aa380", textDecoration: "none"}} onClick={next} >
            Skip this step for now
          </Button>

       
      </Col>

      <Col xs={1} md={6} className="faq-section border p-4">
        <div>
          <h5>Frequently Asked Questions</h5>

          <div 
            onClick={() => setPmasOpen(!pmasOpen)}
            aria-controls="example-collapse-text"
            aria-expanded={pmasOpen}
            className="faq-col mt-4" >
            <p> Whose name should I list as project manager ? </p>

            <Collapse in={pmasOpen}>
              <div id="example-collapse-text">
                This is the person responsible for the day-to-day management of the project.
              </div>
            </Collapse>
          </div>
          <div 
            onClick={() => setPmasOpen2(!pmasOpen2)}
            aria-controls="example-collapse-text"
            aria-expanded={pmasOpen2} 
            className="faq-col mt-4" >
            <p> What is a project sponsor? </p>

            <Collapse in={pmasOpen2}>
              <div id="example-collapse-text">
                The sponsor is the person who is advocating for the project. This person usually appoints the project manager,
                verifies that the project is aligned with the business strategy, approves financial
                resources for the project; all while providing oversight and high-level support throughout the lifecycle of the
                effort.
              </div>
            </Collapse>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  );
};

export default Address;
