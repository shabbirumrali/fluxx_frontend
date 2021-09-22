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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TitleList from  "./titleList";

import moment from 'moment';
const Schedule = ({ setForm, formData, navigation,id }) => {
  console.log(formData);
      const dispatch = useDispatch();
      const history  = useHistory();
      const { register, errors, handleSubmit, reset} = useForm();
      let { startDate,finishDate } = formData;
      const [scheduledopen, setscheduledopen] = useState(true);
      const [scheduledClose, setScheduledClose] = useState(true);
      const { previous, next,go } = navigation;
      const [startdate, setStartDate] = useState(new Date());
      const onSubmit = async (data) => { 
      console.log(data) ;    
        let dataobject = {
            "goal":formData.goal,
            "project_manager":formData.project_manager,
            "project_sponsor":formData.project_sponsor,
            "project_need":formData.project_need,
            "benefits":formData.benefits,
            "name":formData.name,
            "InScope":formData.InScope,
            "outScope":formData.outScope,
            "startDate":startDate,
            "finishDate":finishDate,
            "step":id
         }       
        dispatch(actions.createcharter(dataobject));  
        next();  
     };
    const sendDataToParent = (index) => {
    // the callback. Use a better name
    console.log(index);
    go(index);
    };

return (
  <>
    <Container fluid style={{background: "#3d4a5c"}} className="py-4" >
        <TitleList activeCls="step7" width={56} sendDataToParent={sendDataToParent} projectna={formData.name} />
    </Container>

    <Container className="charter_steps_container">
      <p> Schedule </p>
      <Row className="charter_steps">
        <Col xs={12} sm={8} lg={6} className="project_details">
          <Form onSubmit={handleSubmit(onSubmit)} noValidate >
          <div className="project_charter_textarea_div">
            <label>When do you think the project will start?</label>
            <ItemForm name="startDate" type="date" value={startDate} 
              onChange={setForm} className="date_info" />
          </div>
          <div className="project_charter_textarea_div">
            <label>When do you think the project will finish?</label>                
            <ItemForm name="finishDate" type="date" value={finishDate} 
              onChange={setForm} className="date_info" />    
          </div>
          <div className="nextstep_charter_btn">
            <Button variant="light" type="submit" className="back_btn" onClick={previous}>
              BACK
            </Button>
            <div className="charter_btn">
              <Button type="submit" className="saveancontinue_btn"
              style={{background: "#5aa380", border: "none"}} >
                SAVE AND CONTINUE
              </Button>              
              <Button variant="link" type="submit" className="skipstep_btn"
                style={{color: "#5aa380", textDecoration: "none"}} onClick={next} >
                Skip this step for now
              </Button>
            </div>
          </div>
          </Form>          
        </Col>

        <Col xs={12} sm={4} lg={5} className="faq-section p-2">
          <div>
            <p>Frequently Asked Questions</p>
            <div onClick={() => setscheduledopen(!scheduledopen)}
              aria-controls="example-collapse-text" aria-expanded={scheduledopen} 
              className="faq-col" >
              <p> What is an estimated start date? </p>
            </div>
              <Collapse in={scheduledopen}>
                <div className="faq-content" id="example-collapse-text">
                  <p>Every project has a defined beginning and end. The estimated start date is the date you expect this project to begin</p>
                </div>
              </Collapse>
          </div>
          <br />      
          <div onClick={() => setScheduledClose(!scheduledClose)}
            aria-controls="example-collapse-text" aria-expanded={scheduledopen}
            className="faq-col">
            <p>What is an estimated completion date? </p>
          </div>
          <Collapse in={scheduledClose}>
            <div className="faq-content" id="example-collapse-text">
              <p>The estimated completion date is the date you believe the project will end. This
                  date does not need to be exact - you will know more about the timelines later as
                  you get into the details. If your project MUST be completed by a certain date, put
                  that date here. </p>
            </div>
          </Collapse>
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default Schedule;