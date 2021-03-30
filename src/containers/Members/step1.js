import React, { useState } from "react";
import { Col, Container, Row, Collapse, Button,Form } from "react-bootstrap";
import ItemForm from "./ItemForm";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../store/actions/index";
import { useHistory, Redirect } from "react-router-dom";
const Names = ({ setForm, formData, navigation,id }) => {
 
  const dispatch = useDispatch();
  const history = useHistory();
    const [projectOpen, setProjectOpen] = useState(true);
    const { register, errors, handleSubmit, reset} = useForm();
  const { name } = formData;
  const { next } = navigation;
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

  return (<>
    <Container fluid style={{background: "#3d4a5c"}}>
        <Row>
          <div className="container member-hello my-4">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: "7%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>        
        </Row>       
      </Container>
    <Container>
    <Row className="my-3">
      <Col xs={1} md={5} className="project_details m-2">
        <p>Project Name</p> 
          <Form   onSubmit={handleSubmit(onSubmit)} noValidate>
            <ItemForm
            label="What is the title of your project?"
            name="name"
            value={name}
            onChange={setForm}
        />           
        <Button 
          type="submit" 
          className="p-btns p-3 d-block"
          style={{background: "#5aa380", border: "none"}} 
          >
            SAVE AND CONTINUE
          </Button>
          
          <Button variant="link" type="submit"
          style={{color: "#5aa380", textDecoration: "none"}} onClick={next}
          >
            Skip this step for now
          </Button>
          </Form>
      </Col>
      <Col xs={1} md={6} className="faq-section border p-4">
        <div>
          <p>Frequently Asked Questions</p>

          <div 
            onClick={() => setProjectOpen(!projectOpen)}
            aria-controls="example-collapse-text"
            aria-expanded={projectOpen} 
            className="faq-col mt-4" >
            <p> What should I name my project? </p>

            <Collapse in={projectOpen}>
              <div id="example-collapse-text">
                Your project name should be something clear and concise. We suggest avoiding acronyms unless you spell them out. For example, instead of "BPE", use "Best Project Ever (BPE)".
              </div>
            </Collapse>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</>);
};

export default Names;
