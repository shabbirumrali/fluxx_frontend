import React, { useState } from "react";
import { Col, Container, Row, Collapse, Button,Form } from "react-bootstrap";
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

  return (<>
    <Container fluid style={{background: "#3d4a5c"}} className="py-4">        
      <TitleList activeCls="step1" width={7} sendDataToParent={sendDataToParent}/>      
    </Container>
    <Container className="mb-5">
      <Row className="my-5">
        <Col sm={8} lg={6} className="project_details">
          <p>Project Name</p> 
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <ItemForm
                label="What is the title of your project?"
                name="name"
                type="textarea"
                value={name}
                onChange={setForm}
                className="project_info mb-4"
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
        <Col sm={4} lg={5} className="faq-section border p-4 m-1">
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
