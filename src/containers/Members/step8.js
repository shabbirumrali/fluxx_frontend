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

const Schedule = ({ setForm, formData, navigation,id }) => {
      const dispatch = useDispatch();
      const history  = useHistory();
      const { register, errors, handleSubmit, reset} = useForm();
      const { startDate,finishDate } = formData;
      const [scheduledopen, setscheduledopen] = useState(true);
      const { previous, next } = navigation;
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
 

return (
  <>
    <Container fluid style={{background: "#3d4a5c"}} className="py-4" >      
        <TitleList activeCls="step8" width={56} />
    </Container>

    <Container>
      <Row className="my-3">
        <Col xs={1} md={5} className="project_details m-2">
          <p> Schedule </p>
          <Form onSubmit={handleSubmit(onSubmit)} noValidate >
              <label>When do you think the project will start?</label>
              <ItemForm                   
                name="startDate"
                type="date"
                value={startDate}
                onChange={setForm} 
                className="date_info"
              />
              <br />
              <label>When do you think the project will finish?</label>                
              <ItemForm                   
                name="finishDate"
                type="date"
                value={finishDate}
                onChange={setForm}
                className="date_info"
              />    
            <Link className="d-block text-right my-3"
              style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}} >
            ADD IN SCOPE ITEM +
            </Link>             
            <Button variant="light" type="submit" className="p-3" onClick={previous}>
              BACK
            </Button>
            <Button type="submit" className="ml-4 p-3" 
            style={{background: "#5aa380", border: "none"}} >
              SAVE AND CONTINUE
            </Button>              
            <Button variant="link" type="submit" className="d-block"
              style={{color: "#5aa380", textDecoration: "none"}} onClick={next} >
              Skip this step for now
            </Button> 
          </Form>          
        </Col>

        <Col xs={1} md={6} className="faq-section border p-4">
          <div>
            <p>Frequently Asked Questions</p>

            <div 
              onClick={() => setscheduledopen(!scheduledopen)}
              aria-controls="example-collapse-text"
              aria-expanded={scheduledopen} 
              className="faq-col mt-4" >
              <p> What exactly does “In Scope” include? </p>

              <Collapse in={scheduledopen}>
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
  </>
  );
};

export default Schedule;
