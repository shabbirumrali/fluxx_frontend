import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemForm from "./ItemForm";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../store/actions/index";
import { useHistory, Redirect } from "react-router-dom";

const Impact = ({ setForm, formData, navigation,id }) => {
        const dispatch = useDispatch();
        const history  = useHistory();
        const { register, errors, handleSubmit, reset} = useForm();
        const { impact } = formData;    
        const [impactOpen, setImpactOpen] = useState(true);
        const { previous, next } = navigation;   
        const onSubmit = async (data) => { 
        
          let dataobject = {
              "goal":formData.goal,
              "project_manager":formData.project_manager,
              "project_sponsor":formData.project_sponsor,
              "project_need":formData.project_need,
              "benefits":formData.benefits,
              "name":formData.name,
              "InScope":formData.InScope,
              "outScope":formData.outScope,
              "startDate":formData.startDate,
              "finishDate":formData.finishDate,
              "budget":formData.budget,
              "assumptionTime":formData.assumptionTime,
              "impact":impact,
              "step":id
           }       
          dispatch(actions.createcharter(dataobject));  
          next();  
       }; 
  

  return (<>
  <Container fluid style={{background: "#3d4a5c"}}>
        <Row>
          <div className="container member-hello my-4">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>        
        </Row>       
      </Container>    
    <Container>
    <Row className="my-3">
      <Col xs={1} md={5} className="project_details m-2">
        <p> Impact </p> 
         <Form   onSubmit={handleSubmit(onSubmit)} noValidate>             
        <ItemForm label="What will be impacted by this project?" name="impact" type="textarea" value={impact} onChange={setForm} />  
        <Link className="d-block text-right my-3"
          style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}} >
           ADD IMPACT +
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
  </>);
};

export default Impact;
