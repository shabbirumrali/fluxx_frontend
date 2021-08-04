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
       const { previous, next,go } = navigation;      
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
       const sendDataToParent = (index) => { // the callback. Use a better name
    console.log(index);
    go(index);

  };

return (
  <>
    <Container fluid style={{background: "#3d4a5c"}} className="py-4" >
      <TitleList activeCls="step8" width={63} sendDataToParent={sendDataToParent} />
    </Container>

    <Container className="charter_steps_container">
      <p> Budget </p>
      <Row className="charter_steps">
        <Col xs={12} sm={8} lg={6} className="project_details">
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="project_charter_textarea_div">
              <ItemForm label="What is the estimated total cost of your project?"
                type="textarea" name="budget" value={budget}
                onChange={setForm} className="project_info" />
            </div>
            <div className="nextstep_charter_btn">
              <Button variant="light" type="submit" className="back_btn" onClick={previous}>
                BACK
              </Button>
              <div className="charter_btn">
                <Button type="submit" className="saveancontinue_btn" onClick={next}
                  style={{background: "#5aa380", border: "none"}} >
                    SAVE AND CONTINUE
                </Button>              
                <Button variant="link" type="submit"  className="skipstep_btn" onClick={next}
                  style={{color: "#5aa380", textDecoration: "none"}} >
                  Skip this step for now
                </Button>
              </div>
            </div>
          </Form>
        </Col>

        <Col xs={12} sm={4} lg={5} className="faq-section p-2">
          <div>
            <p>Frequently Asked Questions</p>

            <div onClick={() => setBudgetOpen(!budgetOpen)}
              aria-controls="example-collapse-text" aria-expanded={budgetOpen} 
              className="faq-col" >
              <p>What goes into the estimated budget?</p>
            </div>
              <Collapse in={budgetOpen}>
                <div className="faq-content" id="example-collapse-text">
                  <p>How much will all of this cost? Are you going to need new equipment? Will you
                  need to hire outside assistance? The estimated total of all of those items
                  should be reflected here. You may not know exactly how much you'll need yet,
                  but try to get as close as you can with what you know right now.</p>
                </div>
              </Collapse>            
          </div>
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default Budget;