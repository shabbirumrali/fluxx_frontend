import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import ItemForm from "./ItemForm";

const InScope = ({ setForm, formData, navigation }) => {
  const { InScope } = formData;
  const [inScopeOpen, setInScopeOpen] = useState(true);
  const { previous, next } = navigation;

  return (<>
  <Container fluid style={{background: "#3d4a5c"}}>
        <Row>
          <div className="container member-hello my-4">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: "42%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>        
        </Row>       
      </Container>   
    <Container>
    <Row className="my-3">
      <Col xs={1} md={5} className="project_details m-2">
        <p> In Scope </p>
          <ItemForm label="What is included in the work
                  you’ll be doing for the project?" name="InScope" value={InScope} onChange={setForm} />         
          <Link className="d-block text-right my-3"
          style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}} >
           ADD IN SCOPE ITEM +
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
            onClick={() => setInScopeOpen(!inScopeOpen)}
            aria-controls="example-collapse-text"
            aria-expanded={inScopeOpen} 
            className="faq-col mt-4" >
            <p> What exactly does “In Scope” include? </p>

            <Collapse in={inScopeOpen}>
              <div id="example-collapse-text">
               "Scope creep" is one of the dangers of any
                project, which is why this part is
                important.
                Using our home-building example, things
                like landscaping, sidewalks, and furniture
                may be out of scope. Outline the things
                you <b>won't</b> be addressing as “Out of
                Scope”.

              </div>
            </Collapse>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  </>);
};

export default InScope;
