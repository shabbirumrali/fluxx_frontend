import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import ItemForm from "./ItemForm";

const Stakeholders = ({ setForm, formData, navigation }) => {
  const { stakeholder } = formData;
    
  const [stakeholdersOpen, setStakeholdersOpen] = useState(true);
  const { previous, next } = navigation;

  return (<>
  <Container fluid style={{background: "#3d4a5c"}}>
        <Row>
          <div className="container member-hello my-4">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>        
        </Row>       
      </Container>   
    <Container>
    <Row className="my-3">
      <Col xs={1} md={5} className="project_details m-2">
        <p> Stakeholders </p>            
        <ItemForm label="Who will be affected by this project?" name="stakeholder" value={stakeholder} onChange={setForm} />  
        <Link className="d-block text-right my-3"
          style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}} >
          ADD STAKEHOLDER +
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
            onClick={() => setStakeholdersOpen(!stakeholdersOpen)}
            aria-controls="example-collapse-text"
            aria-expanded={stakeholdersOpen} 
            className="faq-col mt-4" >
            <p> What exactly is an impact? </p>

            <Collapse in={stakeholdersOpen}>
              <div id="example-collapse-text">
              Stakeholders include anyone affected by
the project. If you look at the impacts
listed previously, which groups are
responsible for those areas? Place those
groups here. Are there people who need
to be kept informed of your progress? Will
you need to consult with anyone else on
decisions? Understanding who needs to
know, what they need to know, and when
they need to know will be critical to
making your project a success.
              </div>
            </Collapse>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  </>);
};

export default Stakeholders;
