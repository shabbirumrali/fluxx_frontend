import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import ItemForm from "./ItemForm";

const Impact = ({ setForm, formData, navigation }) => {
  const { impact } = formData;
    
  const [impactOpen, setImpactOpen] = useState(true);
  const { previous, next } = navigation;

  return (   
    <Container>
        <Row className="my-3">
          <Col xs={1} md={5} className="project_details m-2">
            <p> Impact </p>            
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="form-labels">What will be impacted by this project? </Form.Label>
                <Form.Control as="textarea" rows={3} name="impact" value={impact} onChange={setForm} />
              </Form.Group>
              <a className="d-block text-right my-3"
              style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}} >
                ADD IMPACT +
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

          <Col xs={1} md={6} className="faq-section border p-4">
            <div>
              <p>Frequently Asked Questions</p>

              <div 
                onClick={() => setImpactOpen(!impactOpen)}
                aria-controls="example-collapse-text"
                aria-expanded={impactOpen} 
                className="faq-col mt-4" >
                <p> What exactly is an impact? </p>

                <Collapse in={impactOpen}>
                  <div id="example-collapse-text">
                    Take some time to think about all the
                    areas affected by this project. For instance, if you're developing a new
                    product, will marketing need to change the way they advertise? Will any operational policies and procedures need
                    to change as a result? Identifying these items early will be beneficial to you and the project team.
                  </div>
                </Collapse>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

  // <Container>
  //   <Row className="my-3">
  //     <Col xs={1} md={5} className="project_details m-2">
  //       <p> Impact </p>            
  //       <ItemForm label="What will be impacted by this project?" name="impact" value={impact} onChange={setForm} />  
  //       <Link className="d-block text-right my-3"
  //         style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}} >
  //          ADD IMPACT +
  //         </Link>            
  //         <Button variant="light" type="submit" className="p-3" onClick={previous}>
  //           BACK
  //         </Button>
  //         <Button type="submit" className="ml-4 p-3" 
  //         style={{background: "#5aa380", border: "none"}} onClick={next}>
  //           SAVE AND CONTINUE
  //         </Button>              
  //         <Button variant="link" type="submit" className="d-block mt-4"
  //           style={{color: "#5aa380", textDecoration: "none"}}  onClick={next}>
  //           Skip this step for now
  //         </Button>
        
  //     </Col>

  //     <Col xs={1} md={6} className="faq-section border p-4">
  //       <div>
  //         <p>Frequently Asked Questions</p>

  //         <div 
  //           onClick={() => setImpactOpen(!impactOpen)}
  //           aria-controls="example-collapse-text"
  //           aria-expanded={impactOpen} 
  //           className="faq-col mt-4" >
  //           <p> What exactly is an impact? </p>

  //           <Collapse in={impactOpen}>
  //             <div id="example-collapse-text">
  //               Take some time to think about all the
  //               areas affected by this project. For instance, if you're developing a new
  //               product, will marketing need to change the way they advertise? Will any operational policies and procedures need
  //               to change as a result? Identifying these items early will be beneficial to you and the project team.
  //             </div>
  //           </Collapse>
  //         </div>
  //       </div>
  //     </Col>
  //   </Row>
  // </Container>
  );
};

export default Impact;
