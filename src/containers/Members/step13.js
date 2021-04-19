import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemForm from "./ItemForm";
import * as Yup from "yup";
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup";
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../store/actions/index";
import { useHistory, Redirect } from "react-router-dom";
const Risks = ({ setForm, formData, navigation,id }) => {
        const dispatch = useDispatch();
        const history  = useHistory();
        const { register, errors, handleSubmit, reset} = useForm();
        const { risks } = formData;    
        const [risksOpen, setRisksOpen] = useState(true);
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
              "impact":formData.impact,
              "stakeholder":formData.stakeholder,
              "risks":risks,
              "step":id
           }       
          dispatch(actions.createcharter(formData));  
          
       }; 
      function finalstep(){

             axios({
              "method": "GET",
              "url": "http://localhost:8000/v1/fetchcharter/"+formData.name,
              "headers": {
                 'Authorization': `Bearer ${localStorage.getItem('token')}`,
                 'Content-Type': 'application/json', 
              }
            })
            .then((response) => {
                  history.push({
                    pathname: "/finalStep", 
                    state: { detail: response.data }
                });              
            })
            .catch((error) => {
              console.log(error)
            })
          
       };
  

  return (<>
  <Container fluid style={{background: "#3d4a5c"}}>
        <Row>
          <div className="container member-hello my-4">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>        
        </Row>       
      </Container>    
    <Container>
    <Row className="my-3">
      <Col xs={1} md={5} className="project_details m-2">
        <p> Risks </p>
         <Form   onSubmit={handleSubmit(onSubmit)} noValidate>              
        <ItemForm label="What are some of the things that
could derail this project?" name="risks"  type="textarea" value={risks} onChange={setForm} />  
        <Link className="d-block text-right my-3"
          style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}} >
          ADD RISK + 
          </Link>            
          <Button variant="light" type="submit" className="p-3" onClick={previous}>
            BACK
          </Button>
          <Button type="submit" className="ml-4 p-3" 
          style={{background: "#5aa380", border: "none"}} onClick={finalstep}  >
            SAVE AND CONTINUE
          </Button>              
          <Button variant="link" type="submit" className="d-block mt-4"
            style={{color: "#5aa380", textDecoration: "none"}}  >
            Skip this step for now
          </Button>
        </Form>
      </Col>

      <Col xs={1} md={6} className="faq-section border p-4">
        <div>
          <p>Frequently Asked Questions</p>

          <div 
            onClick={() => setRisksOpen(!risksOpen)}
            aria-controls="example-collapse-text"
            aria-expanded={risksOpen} 
            className="faq-col mt-4" >
              <p> What exactly is a risk? </p>

            <Collapse in={risksOpen}>
              <div id="example-collapse-text">
              Risks are things that could derail your
                    efforts. What about that critical team that
                    may or may not be available? Are you
                    concerned about conflicting projects?
                    What about the time you have to
                    complete the project before a negative
                    impact? You'll have to manage these
                    things as you go. Don't worry, you don't
                    have to name everything right now, but if
                    you can identify some major potential
                    obstacles, list them here. 
              </div>
            </Collapse>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  </>);
};

export default Risks;

