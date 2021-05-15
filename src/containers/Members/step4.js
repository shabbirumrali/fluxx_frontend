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
import TitleList from  "./titleList";

const Goal = ({ setForm, formData, navigation,id }) => {
    const dispatch = useDispatch();
    const history  = useHistory();
    const { register, errors, handleSubmit, reset} = useForm();
    const { goal }  = formData;
    const [goalOpen, setGoalOpen] = useState(true);
    const { previous, next } = navigation;
    const onSubmit = async (data) => {      
        let dataobject = {
          "goal":goal,
          "project_manager":formData.project_manager,
          "project_sponsor":formData.project_sponsor,
          "project_need":formData.project_need,
          "name":formData.name,
          "step":id
         }       
        dispatch(actions.createcharter(dataobject));  
        next();  
     };
  
return (
  <>
    <Container fluid style={{background: "#3d4a5c"}}>
      <Row>
        <TitleList activeCls="step4" />
        <div className="container member-hello my-4">
          <div class="progress">
            <div class="progress-bar" role="progressbar" style={{width: "28%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>        
      </Row>       
    </Container>   

    <Container>
      <Row className="my-3">
        <Col xs={1} md={5} className="project_details m-2">
          <p>Goals</p> 
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>  
              <ItemForm 
                label="What do you hope to accomplish with this project? What do you hope to gain or retain with this effort?" 
                name="goal" 
                value={goal} 
                type="textarea" 
                onChange={setForm} 
                className="project_info"
              />
              <Link className="d-block text-right my-3"
                style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}} >
                ADD GOAL +
              </Link>
              <Button variant="light" type="submit" className="p-3" onClick={previous}>
                BACK
              </Button>
              <Button type="submit" className="ml-4 p-3" 
                style={{background: "#5aa380", border: "none"}} >
                SAVE AND CONTINUE
              </Button>              
              <Button 
                variant="link" 
                type="submit" 
                className="d-block"
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
              onClick={() => setGoalOpen(!goalOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={goalOpen} 
              className="faq-col mt-4" 
            >
              <p> What are some examples of what a goal should look like? </p>
              <Collapse in={goalOpen}>
                <div id="example-collapse-text">
                  <ul>
                    <li>Find a technical solution to solve a logistical problem.</li>
                    <li>Migrate from an outdated, unsupported software to a cloud-based alternative</li>
                    <li>Review current processes and revise methods to improve product quality</li>
                  </ul>
                </div>
              </Collapse>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);
};

export default Goal;
