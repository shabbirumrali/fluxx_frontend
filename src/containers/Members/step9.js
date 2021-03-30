import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import ItemForm from "./ItemForm";

const Budget = ({ setForm, formData, navigation }) => {
  const { budget } = formData;
    
  const [budgetOpen, setBudgetOpen] = useState(true);
  const { previous, next } = navigation;

  return (<>
  <Container fluid style={{background: "#3d4a5c"}}>
        <Row>
          <div className="container member-hello my-4">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: "63%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>        
        </Row>       
      </Container>     
    <Container>
        <Row className="my-3">
          <Col xs={1} md={5} className="project_details m-2">
            <p> Budget </p>            
               <ItemForm label="What is the estimated total cost
of your project?" name="budget" value={budget} onChange={setForm} />  
                    
              
              <Button variant="light" type="submit" className="p-3" onClick={previous}>
                BACK
              </Button>
              <Button type="submit" className="ml-4 p-3" 
              style={{background: "#5aa380", border: "none"}} onClick={next}>
                SAVE AND CONTINUE
              </Button>              
              <Button variant="link" type="submit" className="d-block mt-4"
                style={{color: "#5aa380", textDecoration: "none"}} onClick={next} >
                Skip this step for now
              </Button>           
          </Col>

          <Col xs={1} md={6} className="faq-section border p-4">
            <div>
              <p>Frequently Asked Questions</p>

              <div 
                onClick={() => setBudgetOpen(!budgetOpen)}
                aria-controls="example-collapse-text"
                aria-expanded={budgetOpen} 
                className="faq-col mt-4" >
                <p> What goes into the estimated budget? </p>

                <Collapse in={budgetOpen}>
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
  </>);
};

export default Budget;
