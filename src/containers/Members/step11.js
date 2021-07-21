
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

const Stakeholders = ({ setForm, formData, navigation,id }) => {
  const dispatch = useDispatch();
        const history  = useHistory();
        const { register, errors, handleSubmit, reset} = useForm();
        const { stakeholder } = formData;    
        const [stakeholdersOpen, setStakeholdersOpen] = useState(true);
        const { previous, next } = navigation;   
        const [goalOpen, setGoalOpen] = useState([{ goallist: ""}]);
       
       
        // handle input change
        useEffect(() => {
          if(formData.stakeholder != '' && formData.stakeholder != null){
            setGoalOpen(formData.stakeholder)        
          }
        },[]);
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
              "stakeholder":goalOpen,
              "step":id
           }       
          dispatch(actions.createcharter(dataobject));  
          next();  
       };

        
return (
  <>
    <Container fluid style={{background: "#3d4a5c"}} className="py-4" >      
        <TitleList activeCls="step11" width={90} />
    </Container>   
    <Container>
      <Row className="my-3">
        <Col xs={1} md={5} className="project_details m-2">
          <p> Stakeholders </p> 
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>             
             {goalOpen.map((x, i) => {  
              return (<><ItemForm 
                      label="Who will be affected by this project?" 
                      name="stakeholder" 
                      value={x.stakeholder} 
                      type="textarea" 
                       onChange={e => handleInputChange(e, i)}
                      className="project_info"
                    />
                     {goalOpen.length !== 1 && <button
                      className="mr10"
                      onClick={() => handleRemoveClick(i)}>Remove</button>}
                     {goalOpen.length - 1 === i && <button onClick={handleAddClick} className="d-block text-right my-3" style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}}>ADD STAKEHOLDER +</button>}
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
              onClick={() => setStakeholdersOpen(!stakeholdersOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={stakeholdersOpen} 
              className="faq-col mt-4" >
              <p> What exactly is an impact? </p>

              <Collapse in={stakeholdersOpen}>
                <div id="example-collapse-text">
                  Stakeholders include anyone affected by the project. If you look at the impacts
                  listed previously, which groups are responsible for those areas? Place those
                  groups here. Are there people who need to be kept informed of your progress? Will
                  you need to consult with anyone else on decisions? Understanding who needs to know, what they need to know, and when
                  they need to know will be critical to making your project a success.
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

export default Stakeholders;
