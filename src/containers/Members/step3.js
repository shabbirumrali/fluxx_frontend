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
        <TitleList activeCls="step3" width={21} sendDataToParent={sendDataToParent}  />
    </Container>

    <Container>
      <Row className="my-3">
        <Col xs={1} md={5} className="project_details m-2">
          <p>Background</p>            
          <Form   onSubmit={handleSubmit(onSubmit)} noValidate>
            <ItemForm 
              label="Why is this project needed?" 
              name="project_need" 
              type="textarea" 
              value={project_need} 
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
              <Button variant="link" type="submit"
                style={{color: "#5aa380", textDecoration: "none"}} onClick={next} >
                Skip this step for now
              </Button>
          </Form>   
        </Col>
        <Col xs={1} md={6} className="faq-section border p-4">
          <div>
            <p>Frequently Asked Questions</p>

            <div 
              onClick={() => setBackground(!background)}
              aria-controls="example-collapse-text"
              aria-expanded={background} 
              className="faq-col mt-4" >
              <p> What type of details should I include in the background? </p>

              <Collapse in={background}>
                <div id="example-collapse-text">
                  Why is the project necessary? Does it address a problem? Does it offer an
                  improvement over what you're doing currently? It may help if you imagine that
                  you’re explaining things to someone who doesn’t know anything about your project.
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

export default Contact;
