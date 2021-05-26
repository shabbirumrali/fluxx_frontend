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

const Budget = ({ setForm, formData, navigation,id }) => {
       const dispatch = useDispatch();
       const history  = useHistory();
       const { register, errors, handleSubmit, reset} = useForm();
       const { budget } = formData;    
       const [budgetOpen, setBudgetOpen] = useState(true);
       const { previous, next } = navigation;      
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
              "startDate":formData.startDate,
              "finishDate":formData.finishDate,
              "budget":budget,
              "step":id
           }       
          dispatch(actions.createcharter(dataobject));  
          next();  
       }; 

return (
  <>
    <Container fluid style={{background: "#3d4a5c"}} className="py-4" >
      <Row>
        <TitleList activeCls="step8" width={63} />
      </Row>       
    </Container>     
    <Container>
      <Row className="my-3">
        <Col xs={1} md={5} className="project_details m-2">
          <p> Budget </p>   
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>         
            <ItemForm
              label="What is the estimated total cost of your project?"
              type="textarea"
              name="budget"
              value={budget}
              onChange={setForm}
              className="project_info"
            />
            <Button variant="light" type="submit" className="p-3" onClick={previous}>
              BACK
            </Button>
            <Button type="submit" className="ml-4 p-3" onClick={next}
              style={{background: "#5aa380", border: "none"}} >
                SAVE AND CONTINUE
            </Button>              
            <Button variant="link" type="submit" className="d-block" onClick={next}
              style={{color: "#5aa380", textDecoration: "none"}} >
              Skip this step for now
            </Button>
          </Form>
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
  </>
  );
};

export default Budget;