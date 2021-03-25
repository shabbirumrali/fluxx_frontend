import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";


import ItemForm from "./ItemForm";

const Contact = ({ setForm, formData, navigation }) => {
  const { project_need } = formData;
  const [background, setBackground] = useState(false);
  const { previous, next } = navigation;

  return (   
    <Container>
        <Row className="my-3">
          <Col xs={1} md={5} className="project_details m-2">
            <p>Background</p>            
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="form-labels">Why is this project needed?</Form.Label>
                <Form.Control as="textarea" rows={4} name="project_need" value={project_need} onChange={setForm} />
              </Form.Group>
              <Button variant="light" type="submit" className="p-3" onClick={previous} >
                BACK
              </Button>
              <Button type="submit" className="ml-4 p-3" onClick={next}
              style={{background: "#5aa380", border: "none"}}>
                SAVE AND CONTINUE
              </Button>              
              <Button variant="link" type="submit" onClick={next}
                style={{color: "#5aa380", textDecoration: "none"}} >
                Skip this step for now
              </Button>

            </Form>
          </Col>

          <Col xs={1} md={6} className="faq-section border p-4">
            <div>
              <p>Frequently Asked Questions</p>

              <div 
                onClick={() => setBackground(!background)}
                aria-controls="example-collapse-text"
                aria-expanded={background} 
                className="faq-col mt-4" >
                <p> What type of details should I include in the background? </p>

                <Collapse in={background}>
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



  //   <Container>
  //   <Row className="my-3">
  //     <Col xs={1} md={5} className="project_details m-2">
  //       <p>Background</p>            
       
  //       <ItemForm label="Why is this project needed?" name="project_need" value={project_need} onChange={setForm} />
  //         <Button variant="light" type="submit" className="p-3" onClick={previous}>
  //           BACK
  //         </Button>
  //         <Button type="submit" className="ml-4 p-3" 
  //         style={{background: "#5aa380", border: "none"}} onClick={next}> 
  //           SAVE AND CONTINUE
  //         </Button>              
  //         <Button variant="link" type="submit"
  //           style={{color: "#5aa380", textDecoration: "none"}} onClick={next} >
  //           Skip this step for now
  //         </Button>
  //     </Col>
  //     <Col xs={1} md={6} className="faq-section border p-4">
  //       <div>
  //         <p>Frequently Asked Questions</p>

  //         <div 
  //           onClick={() => setBackground(!background)}
  //           aria-controls="example-collapse-text"
  //           aria-expanded={background} 
  //           className="faq-col mt-4" >
  //           <p> What type of details should I include in the background? </p>

  //           <Collapse in={background}>
  //             <div id="example-collapse-text">
  //             Why is the project necessary? Does it address a problem? Does it offer an
  //             improvement over what you're doing currently? It may help if you imagine that
  //             you’re explaining things to someone who doesn’t know anything about your project.
  //             </div>
  //           </Collapse>
  //         </div>
  //       </div>
  //     </Col>
  //   </Row>
  // </Container>
  );
};

export default Contact;
