import React, { useState,useEffect } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemForm from "./ItemForm";
import * as Yup from "yup";
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup";
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../store/actions/index";
import { useHistory, Redirect } from "react-router-dom";
import TitleList from  "./titleList";
import appConfig from "./../../config";
const Risks = ({ setForm, formData, navigation,id }) => {
        const dispatch = useDispatch();
        const history  = useHistory();
        const { register, errors, handleSubmit, reset} = useForm();
        const { risks } = formData;    
        const [risksOpen, setRisksOpen] = useState(true);
        const { previous, next } = navigation; 
        const [goalOpen, setGoalOpen] = useState([{ goallist: ""}]);
       
       
        // handle input change
        useEffect(() => {
            //setGoalOpen(JSON.parse(formData.goal))        
        });
        const handleInputChange = (e, index) => { 
        console.log(e);        
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
 
        const onSubmit = async (data) => { 
        
          let dataobject = {             
              "project_manager":formData.project_manager,
              "project_sponsor":formData.project_sponsor,
              "project_need":formData.project_need,              
              "name":formData.name,
              "InScope":formData.InScope,
              "outScope":formData.outScope,
              "startDate":formData.startDate,
              "finishDate":formData.finishDate,
              "budget":formData.budget,
              "assumptionTime":formData.assumptionTime,                           
              "risks":goalOpen,
              "step":id
           }       
          dispatch(actions.createcharter(formData));  
          
       }; 
      function finalstep(){

             axios({
              "method": "GET",
              "url": appConfig.config().baseUrl+"/fetchcharter/"+formData.name,
              "headers": {
                 'Authorization': `Bearer ${localStorage.getItem('token')}`,
                 'Content-Type': 'application/json', 
              }
            })
            .then((response) => {
                  history.push({
                    pathname: "/finalStep", 
                    state: { detail: response.data }
                });              
            })
            .catch((error) => {
              console.log(error)
            })
          
       };
  

return (
  <>
    <Container fluid style={{background: "#3d4a5c"}} className="py-4">      
        <TitleList activeCls="step12" width={100} />                   
    </Container>    
    <Container>
      <Row className="my-3">
        <Col xs={1} md={5} className="project_details m-2">
          <p> Risks </p>
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>              
             {goalOpen.map((x, i) => {  
              return (<><ItemForm 
                      label="What are some of the things that could derail this project?" 
                      name="risks" 
                      value={x.risks} 
                      type="textarea" 
                       onChange={e => handleInputChange(e, i)}
                      className="project_info"
                    />
                     {goalOpen.length !== 1 && <button
                      className="mr10"
                      onClick={() => handleRemoveClick(i)}>Remove</button>}
                     {goalOpen.length - 1 === i && <button onClick={handleAddClick} className="d-block text-right my-3" style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}}>ADD RISK +</button>}
                   </>)
              }
                 
                 )
            } 



            <Button variant="light" type="submit" className="p-3" onClick={previous}>
              BACK
            </Button>
            <Button type="submit" className="ml-4 p-3" onClick={finalstep}
              style={{background: "#5aa380", border: "none"}} >
              SAVE AND CONTINUE
            </Button>              
            <Button variant="link" type="submit" className="d-block"
              style={{color: "#5aa380", textDecoration: "none"}}  >
              Skip this step for now
            </Button>
          </Form>
        </Col>

        <Col xs={1} md={6} className="faq-section border p-4">
          <div>
            <p>Frequently Asked Questions</p>
            <div 
              onClick={() => setRisksOpen(!risksOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={risksOpen} 
              className="faq-col mt-4" 
            >
                <p> What exactly is a risk? </p>

              <Collapse in={risksOpen}>
                <div id="example-collapse-text">
                  Risks are things that could derail your efforts. What about that critical team that
                  may or may not be available? Are you concerned about conflicting projects?
                  What about the time you have to complete the project before a negative
                  impact? You'll have to manage these things as you go. Don't worry, you don't
                  have to name everything right now, but if you can identify some major potential
                  obstacles, list them here.
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

export default Risks;

