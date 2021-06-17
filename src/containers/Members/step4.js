import React, { useState,useEffect } from "react";
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

const Goal = ({ setForm, formData, navigation,id }) => {
    //console.log(setForm);
    const dispatch = useDispatch();
    const history  = useHistory();
    const { register, errors, handleSubmit, reset} = useForm();
    const { goal }  = formData;    
    const { previous, next } = navigation;

    const [goalOpen, setGoalOpen] = useState([{ goallist: ""}]);
    //   console.log(JSON.parse(formData.goal).length);
    // //  console.log(formData.goal.length);
    //  console.log(JSON.parse(formData.goal));
    // handle input change
    useEffect(() => { 
        //setGoalOpen(JSON.parse(formData.goal))        
    });
   
    const handleInputChange = (e, index) => { 
    //console.log(e);        
      const { name, value } = e.target;
      const list = [...goalOpen];
      list[index][name] = value;
      setGoalOpen(list);
      
    };
   
    // handle click event of the Remove button
    const handleRemoveClick = index => {
      const list = [...goalOpen];
      list.splice(index, 1);
      setGoalOpen(list);
    };
 
    // handle click event of the Add button
    const handleAddClick = () => {
      console.log('sdfsdfs');
      setGoalOpen([...goalOpen, {goallist: ""}]);
    };
   // console.log(JSON.parse(formData));

    const onSubmit = async (data) => {  
        let dataobject = {
          "goal":goalOpen,
          "project_manager":formData.project_manager,
          "project_sponsor":formData.project_sponsor,
          "project_need":formData.project_need,
          "name":formData.name,
          "step":id
         }       
        dispatch(actions.createcharter(dataobject));  
        next();  
     };

  
return (
  <>
    <Container fluid style={{background: "#3d4a5c"}} className="py-4" >      
        <TitleList activeCls="step4" width={28} />        
    </Container>   

    <Container>
      <Row className="my-3">
        <Col xs={1} md={5} className="project_details m-2">
          <p>Goals</p> 
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>  
            {goalOpen.map((x, i) => {  
              return (<><ItemForm  key={x}
                      label="What do you hope to accomplish with this project? What do you hope to gain or retain with this effort?" 
                      name="goal" 
                      value={x.goal} 
                      type="textarea" 
                       onChange={e => handleInputChange(e, i)}
                      className="project_info"
                    />
                     {goalOpen.length !== 1 && <button
                      className="mr10"
                      onClick={() => handleRemoveClick(i)}>Remove</button>}
                     {goalOpen.length - 1 === i && <button onClick={handleAddClick} className="d-block text-right my-3" style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}}>ADD GOAL+</button>}
                   </>)
              }
                 
                 )
          } 

              



              <Button variant="light" type="submit" className="p-3" onClick={previous}>
                BACK
              </Button>
              <Button type="submit" className="ml-4 p-3" 
                style={{background: "#5aa380", border: "none"}} >
                SAVE AND CONTINUE
              </Button>              
              <Button 
                variant="link" 
                type="submit" 
                className="d-block"
                style={{color: "#5aa380", textDecoration: "none"}} 
                onClick={next}
              >
                Skip this step for now
              </Button> 
          </Form>
                         
        </Col>

        <Col xs={1} md={6} className="faq-section border p-4">
          <div>
            <p>Frequently Asked Questions</p>
            <div 
              onClick={() => setGoalOpen(!goalOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={goalOpen} 
              className="faq-col mt-4" 
            >
              <p> What are some examples of what a goal should look like? </p>
              <Collapse in={goalOpen}>
                <div id="example-collapse-text">
                  <ul>
                    <li>Find a technical solution to solve a logistical problem.</li>
                    <li>Migrate from an outdated, unsupported software to a cloud-based alternative</li>
                    <li>Review current processes and revise methods to improve product quality</li>
                  </ul>
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

export default Goal;
