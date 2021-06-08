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

const Impact = ({ setForm, formData, navigation,id }) => {
        const dispatch = useDispatch();
        const history  = useHistory();
        const { register, errors, handleSubmit, reset} = useForm();
        const { impact } = formData;    
        const [impactOpen, setImpactOpen] = useState(true);
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
              "impact":goalOpen,
              "step":id
           }       
          dispatch(actions.createcharter(dataobject));  
          next();  
       }; 
  

return (
  <>
    <Container fluid style={{background: "#3d4a5c"}} className="py-4" >      
        <TitleList activeCls="step11" width={80} />
    </Container>
    <Container>
      <Row className="my-3">
        <Col xs={1} md={5} className="project_details m-2">
          <p> Impact </p> 
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>             
            {goalOpen.map((x, i) => {  
              return (<><ItemForm 
                      label="What will be impacted by this project?" 
                      name="impact" 
                      value={x.impact} 
                      type="textarea" 
                       onChange={e => handleInputChange(e, i)}
                      className="project_info"
                    />
                     {goalOpen.length !== 1 && <button
                      className="mr10"
                      onClick={() => handleRemoveClick(i)}>Remove</button>}
                     {goalOpen.length - 1 === i && <button onClick={handleAddClick} className="d-block text-right my-3" style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}}>ADD IMPACT +</button>}
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
            onClick={() => setImpactOpen(!impactOpen)}
            aria-controls="example-collapse-text"
            aria-expanded={impactOpen} 
            className="faq-col mt-4" >
            <p> What exactly is an impact? </p>

            <Collapse in={impactOpen}>
              <div id="example-collapse-text">
                Take some time to think about all the
                areas affected by this project. For instance, if you're developing a new
                product, will marketing need to change the way they advertise? Will any operational policies and procedures need
                to change as a result? Identifying these items early will be beneficial to you and the project team.
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

export default Impact;
