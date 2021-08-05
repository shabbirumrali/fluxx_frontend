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

const Assumptions = ({ setForm, formData, navigation,id }) => {
       const dispatch = useDispatch();
       const history  = useHistory();
       const { register, errors, handleSubmit, reset} = useForm();
       const { assumptionTime } = formData;    
       const [assumptionsOpen, setAssumptionsOpen] = useState(true);
       const { previous, next,go } = navigation;
       console.log(next);     
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
              "assumptionTime":assumptionTime,
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
    <Container fluid style={{background: "#3d4a5c"}}  className="py-4" >
      <TitleList activeCls="step9" width={70} sendDataToParent={sendDataToParent} />        
    </Container>

    <Container className="charter_steps_container">
      <p> Assumptions </p>
      <Row className="charter_steps">
        <Col xs={12} sm={8} lg={6} className="project_details">
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="project_charter_textarea_div">
              <ItemForm label="What are the assumptions at this time?"
                name="assumptionTime" type="textarea" className="project_info"
                value={assumptionTime} onChange={setForm} />
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
                style={{color: "#5aa380", textDecoration: "none"}}  onClick={next}>
                Skip this step for now
              </Button>
            </div>
            </div>
          </Form>
        </Col>

        <Col xs={12} sm={4} lg={5} className="faq-section p-2">
          <div>
            <p>Frequently Asked Questions</p>
            <div 
              onClick={() => setAssumptionsOpen(!assumptionsOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={assumptionsOpen}
              className="faq-col" >
              <p> What exactly is an assumption? </p>
            </div>
              <Collapse in={assumptionsOpen}>
                <div className="faq-content" id="example-collapse-text">
                  <p>Project assumptions are things you believe to be true at this point in time.
                    Ultimately, you may find that these assumptions are incorrect, but their
                    potential overall impact on the delivery of your project is important. For example,
                    you may assume a critical team is available to work on your project, but that will need to be verified.</p>
                </div>
              </Collapse>            
          </div>
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default Assumptions;
