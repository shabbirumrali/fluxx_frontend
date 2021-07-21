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

const InScope = ({ setForm, formData, navigation,id }) => {
  
      const dispatch = useDispatch();
      const history  = useHistory();
      const { register, errors, handleSubmit, reset} = useForm();
      const { InScope,outScope } = formData;
      const [inScopeOpen, setInScopeOpen] = useState(true);
      const { previous, next,go } = navigation;
      const onSubmit = async (data) => {      
        let dataobject = {
            "goal":formData.goal,
            "project_manager":formData.project_manager,
            "project_sponsor":formData.project_sponsor,
            "project_need":formData.project_need,
            "name":formData.name,
            "InScope":InScope,
            "outScope":outScope,
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
        <TitleList activeCls="step6" width={42}  sendDataToParent={sendDataToParent}/>
    </Container>

    <Container>
      <Row className="my-3">
        <Col xs={1} md={5} className="project_details m-2">
          <p> In Scope </p>
              <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                <ItemForm 
                  label="What is included in the work you’ll be doing for the project?" 
                  name="InScope" 
                  type="textarea" 
                  value={InScope} 
                  onChange={setForm} 
                  className="project_info"
                /> 
             <p> Out Scope </p>   
                <ItemForm 
                label="What is not included in the work you’ll be doing for the project?" 
                name="outScope" 
                value={outScope}  
                type="textarea" 
                onChange={setForm} 
                className="project_info"
              />   
                <Button variant="light" type="submit" className="p-3" onClick={previous}>
                  BACK
                </Button>
                <Button type="submit" className="ml-4 p-3" 
                  style={{background: "#5aa380", border: "none"}} >
                  SAVE AND CONTINUE
                </Button>              
                <Button variant="link" type="submit" className="d-block"
                  style={{color: "#5aa380", textDecoration: "none"}}  onClick={next}>
                  Skip this step for now
                </Button>
              </Form>
        </Col>

        <Col xs={1} md={6} className="faq-section border p-4">
          <div>
            <p>Frequently Asked Questions</p>

            <div 
              onClick={() => setInScopeOpen(!inScopeOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={inScopeOpen} 
              className="faq-col mt-4" >
              <p> What exactly does “In Scope” include? </p>

              <Collapse in={inScopeOpen}>
                <div id="example-collapse-text">
                  Your scope includes all of the work you need to accomplish in order to deliver
                  your product, service, or result. For example, if you were building a house,
                  things like framing, electrical, and plumbing would be within your scope.
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

export default InScope;
