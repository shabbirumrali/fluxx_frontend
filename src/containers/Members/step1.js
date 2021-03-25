import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import ItemForm from "./ItemForm";
const Names = ({ setForm, formData, navigation }) => {
    const [projectOpen, setProjectOpen] = useState(true);
  const { name } = formData;

  const { next } = navigation;

  return (
    <>
      <Container fluid className="form_section">
        <Container>
          <Row>
            <Col>
              <div className="pj_charter py-2">
                <h4>project charter</h4>
              </div>            
            </Col>
          </Row>
        </Container>
      </Container>

{/* ------------------------------------------------------- */}
        {/* Project Name HTML */}
      <Container>
        <Row className="my-3">
          <Col xs={1} md={5} className="project_details m-2">
            <p>Project Name</p>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="form-labels">What is the title of your project?</Form.Label>
                <Form.Control as="textarea" rows={3} 
                name="name"
                value={name}
                onChange={setForm}/>
              </Form.Group>
              <Button 
              type="submit" 
              className="p-btns p-3 d-block"
              style={{background: "#5aa380", border: "none"}}
              onClick={next}
              >
                SAVE AND CONTINUE
              </Button>
              
              <Button variant="link" type="submit"
              style={{color: "#5aa380", textDecoration: "none"}}
              onClick={next}
              >
                Skip this step for now
              </Button>

            </Form>
          </Col>

          <Col xs={1} md={6} className="faq-section border p-4">
            <div>
              <p>Frequently Asked Questions</p>

              <div 
                onClick={() => setProjectOpen(!projectOpen)}
                aria-controls="example-collapse-text"
                aria-expanded={projectOpen} 
                className="faq-col mt-4" >
                <p> What should I name my project? </p>

                <Collapse in={projectOpen}>
                  <div id="example-collapse-text">
                    Your project name should be something clear and concise. We suggest avoiding acronyms unless you spell them out. For example, instead of "BPE", use "Best Project Ever (BPE)".
                  </div>
                </Collapse>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    {/* <Container>
      <Row className="my-3">
        <Col xs={1} md={5} className="project_details m-2">
          <p>Project Name</p> 

              <ItemForm
              label="What is the title of your project?"
              name="name"
              value={name}
              onChange={setForm}
          />           
          <Button 
            type="submit" 
            className="p-btns p-3 d-block"
            style={{background: "#5aa380", border: "none"}} onClick={next}
            >
              SAVE AND CONTINUE
            </Button>
            
            <Button variant="link" type="submit"
            style={{color: "#5aa380", textDecoration: "none"}} onClick={next}
            >
              Skip this step for now
            </Button>
        </Col>
        <Col xs={1} md={6} className="faq-section border p-4">
          <div>
            <p>Frequently Asked Questions</p>

            <div 
              onClick={() => setProjectOpen(!projectOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={projectOpen} 
              className="faq-col mt-4" >
              <p> What should I name my project? </p>

              <Collapse in={projectOpen}>
                <div id="example-collapse-text">
                  Your project name should be something clear and concise. We suggest avoiding acronyms unless you spell them out. For example, instead of "BPE", use "Best Project Ever (BPE)".
                </div>
              </Collapse>
            </div>
          </div>
        </Col>
      </Row>
    </Container> */}
    </>
  );
};

export default Names;
