import React, { useState } from "react";
import { Col, Container, Row, Collapse, Button, Form, Accordion } from "react-bootstrap";
import ItemForm from "./ItemForm";
import TitleList from  "./titleList";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../store/actions/index";
import { useHistory, Redirect } from "react-router-dom";

const Names = ({ setForm, formData, navigation,id }) => {
  console.log(formData);
 
  const dispatch = useDispatch();
  const history = useHistory();
    const [projectOpen, setProjectOpen] = useState(true);
    const { register, errors, handleSubmit, reset} = useForm();
  const { name } = formData;
  const { next,go } = navigation;
  const onSubmit = async (data) => {
    console.log(name);
    if(name!= ''){
      let dataobject = {
        "name":name,
        "step":id
       }
      dispatch(actions.createcharter(dataobject));  
      next(name)
    }
    
  };
  const sendDataToParent = (index) => { // the callback. Use a better name
    console.log(index);
    go(index);

  };

return (
  <>
    <Container fluid style={{background: "#3d4a5c"}} className="py-4">
      <TitleList activeCls="step1" width={7} sendDataToParent={sendDataToParent}  projectna={name}/>
    </Container>

    <Container className="charter_steps_container">
      <p>project name</p>
      <Row className="charter_steps">
        <Col sm={12} lg={6} className="project_details">
            <Form onSubmit={ handleSubmit(onSubmit) } noValidate>
              <div className="project_charter_textarea_div">
                <ItemForm label="What is the title of your project?"
                  name="name" type="textarea" value={name}
                  onChange={setForm} className="project_info"
                />
              </div>
              <div className="charter_btn">
                <Button type="submit" className="saveancontinue_btn"
                  style={{background: '#5aa380', border: 'none'}} >
                  SAVE AND CONTINUE
                </Button>

                <Button variant="link" type="submit" className="skipstep_btn"
                  style={{textDecoration: "none"}} onClick={next} >
                  Skip this step for now
                </Button>
              </div>
            </Form>
        </Col>

        {/* Faq Step 1 */}
        <Col sm={4} lg={5} className="faq-section p-2">
          <div>
            <p>Frequently Asked Questions</p>
            <div
              onClick={() => setProjectOpen(!projectOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={projectOpen}
              className="faq-col">
              <p> What should I name my project? </p>
            </div>
              <Collapse in={projectOpen}>
                <div className="faq-content" id="example-collapse-text">
                  <p>Your project name should be something clear and concise. We suggest avoiding acronyms unless you spell them out. For example, instead of "BPE", use "Best Project Ever (BPE)".</p>
                </div>
              </Collapse>
          </div>
        </Col>
      </Row>
    </Container>
</>);
};

export default Names;
