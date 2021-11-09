import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import ItemForm from "./ItemForm";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../store/actions/index";
import { useHistory, Redirect } from "react-router-dom";
import TitleList from  "./titleList";

const Contact = ({ setForm, formData, navigation,id }) => {
  const dispatch = useDispatch();
  const history  = useHistory();
  const { register, errors, handleSubmit, reset} = useForm();
  const { project_need } = formData;
  const [background, setBackground] = useState(true);
  const { previous, next ,go} = navigation;
  const onSubmit = async (data) => {      
      let dataobject = {
        "project_need":project_need,
        "project_manager":formData.project_manager,
        "project_sponsor":formData.project_sponsor,
        "name":formData.name,
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
        <TitleList activeCls="step3" width={21} sendDataToParent={sendDataToParent} projectna={formData.name} />
    </Container>

    <Container className="charter_steps_container">
      <p>Background</p>
      <Row className="charter_steps">
        <Col xs={12} sm={8} lg={6} className="project_details">
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="project_charter_textarea_div">
            <ItemForm label="Why is this project needed?" 
              type="textarea" name="project_need"
              value={project_need} onChange={setForm} 
              className="project_info" />
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
                <Button variant="link" type="submit"  className="skipstep_btn"
                  style={{color: "#5aa380", textDecoration: "none"}} onClick={next} >
                  Skip this step for now
                </Button>
              </div>
            </div>
          </Form>   
        </Col>

        <Col xs={12} sm={4} lg={5}>
          <div className="faq-section p-2">
            <p>Frequently Asked Questions</p>
            <div 
              onClick={() => setBackground(!background)}
              aria-controls="example-collapse-text"
              aria-expanded={background} 
              className="faq-col" >
              <p>What type of details should I include in the background? </p>
            </div>
              <Collapse in={background}>
                <div className="faq-content" id="example-collapse-text">
                  <p>Why is the project necessary? Does it address a problem? Does it offer an
                  improvement over what you're doing currently? It may help if you imagine that
                  you’re explaining things to someone who doesn’t know anything about your project.</p>
                </div>
              </Collapse>
          </div>
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default Contact;