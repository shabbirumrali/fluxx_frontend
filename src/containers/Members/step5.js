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

const Benefits = ({ setForm, formData, navigation,id }) => {
    const dispatch = useDispatch();
    const history  = useHistory();
    const { register, errors, handleSubmit, reset} = useForm();
    const { benefits } = formData;
    const [benefitOpen, setBenefitOpen] = useState(true)    
    const [benefitOpen1, setBenefitOpen1] = useState(false)    
    const { previous, next } = navigation;
    const onSubmit = async (data) => {      
        let dataobject = {
            "goal":formData.goal,
            "project_manager":formData.project_manager,
            "project_sponsor":formData.project_sponsor,
            "project_need":formData.project_need,
            "benefits":benefits,
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
        <TitleList activeCls="step5" />
        <div className="container member-hello my-4">
          <div class="progress">
            <div class="progress-bar" role="progressbar" style={{width: "35%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>        
      </Row>       
    </Container>

    <Container>
      <Row className="my-3">
        <Col xs={1} md={5} className="project_details m-2">
          <p>Benefits</p>
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <ItemForm 
              label="What are the benefits of each goal?" 
              name="benefits" 
              type="textarea" 
              value={benefits} 
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
              style={{background: "#5aa380", border: "none"}} onClick={next}>
                SAVE AND CONTINUE
              </Button>              
              <Button 
                variant="link" 
                type="submit" 
                className="d-block"
                style={{color: "#5aa380", textDecoration: "none"}}  onClick={next}>
                Skip this step for now
              </Button>
              </Form>        
        </Col>

        <Col xs={1} md={6} className="faq-section border p-4">
          <div>
            <p>Frequently Asked Questions</p>
            <div 
              onClick={() => setBenefitOpen(!benefitOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={benefitOpen} 
              className="faq-col mt-4" 
            >
              <p> What exactly is a benefit & how is it different from a goal? </p>

              <Collapse in={benefitOpen}>
                <div id="example-collapse-text">
                  Goals state what you want to achieve and benefits are precise, measurable ways explaining how to achieve that goal. 
                  <br/>
                  For instance, if your goal was to increase profitability of a certain product line, your benefits may include things such as:
                  <ul>
                    <li> Reduce waste during </li>
                    <li> manufacturing by 75% </li>
                    <li> Increase annual sales by $50,000 </li>
                  </ul>
                </div>
              </Collapse>
            </div>
            <div 
              onClick={() => setBenefitOpen1(!benefitOpen1)}
              aria-controls="example-collapse-text"
              aria-expanded={benefitOpen1} 
              className="faq-col mt-4" >
              <p> What are some more examples of benefits?</p>
              <Collapse in={benefitOpen1}>
                <div id="example-collapse-text">
                  Ex.: Reduce travel expenses by $3,000 per trip <br/>
                  Ex.: Increase production output by 30% <br/>
                  Ex.: Gain an estimated 20% increase in new customers
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

export default Benefits;
