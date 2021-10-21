import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemForm from "./ItemForm";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../store/actions/index";
import { useHistory, Redirect } from "react-router-dom";
import TitleList from "./titleList";

const InScope = ({ setForm, formData, navigation, id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit, reset } = useForm();
  const { InScope, outScope } = formData;
  const [inScopeOpen, setInScopeOpen] = useState(true);
  const [outScopeOpen, setOutScopeOpen] = useState(true);
  const { previous, next, go } = navigation;
  const [goalOpen, setGoalOpen] = useState([{ goallist: "" }]);
  const [goalOpen1, setGoalOpen1] = useState([{ goallist1: "" }]);
  useEffect(() => {
    if (formData.InScope != '' && formData.InScope != null) {
      setGoalOpen(formData.InScope)
    }
    if (formData.outScope != '' && formData.outScope != null) {
      setGoalOpen1(formData.outScope)
    }
  }, []);
  const onSubmit = async (data) => {
    formData.InScope = goalOpen;
    formData.outScope = goalOpen1;
    let dataobject = {
      "goal": formData.goal,
      "project_manager": formData.project_manager,
      "project_sponsor": formData.project_sponsor,
      "project_need": formData.project_need,
      "name": formData.name,
      "InScope": goalOpen,
      "outScope": goalOpen1,
      "step": id
    }
    dispatch(actions.createcharter(dataobject));
    next();
  };
  
  // the callback. Use a better name
  const sendDataToParent = (index) => {
    console.log(index);
    go(index);
  };
  const handleInputChange = (e, index) => {
    console.log(e);
    const { name, value } = e.target;
    const list = [...goalOpen];
    list[index][name] = value;
    setGoalOpen(list);
  };
  const handleInputChange1 = (e, index) => {
    console.log(e);
    const { name, value } = e.target;
    const list = [...goalOpen1];
    list[index][name] = value;
    setGoalOpen1(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...goalOpen];
    list.splice(index, 1);
    setGoalOpen(list);
  };
  const handleRemoveClick1 = index => {
    const list = [...goalOpen1];
    list.splice(index, 1);
    setGoalOpen1(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    console.log('sdfsdfs');
    setGoalOpen([...goalOpen, { goallist: "" }]);
  };
   const handleAddClick1 = () => {
    console.log('sdfsdfs');
    setGoalOpen1([...goalOpen1, { goallist1: "" }]);
  };

  return (
    <>
      <Container fluid style={{ background: "#3d4a5c" }} className="py-4" >
        <TitleList activeCls="step6" width={42} sendDataToParent={sendDataToParent} projectna={formData.name} />
      </Container>

      <Container className="charter_steps_container">
        <p> In Scope </p>
        <Row className="charter_steps">
          <Col xs={12} sm={8} lg={6} className="project_details">
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>  
              <label htmlFor="">What is included in the work you’ll be doing for the project?</label>
               {goalOpen.map((x, i) => {
                return (
                  <div className="project_charter_textarea_div" key={i}>
                    <ItemForm
                      name="InScope" type="textarea" value={x.InScope}
                      onChange={e => handleInputChange(e, i)}
                      className="project_info" />
                    <div className="add_remove_btn_unit">
                      {goalOpen.length !== 1 && <Button variant="link" style={{ color: '#212529', border: 'none' }} className="remove_btn" onClick={() => handleRemoveClick(i)}>Remove</Button>}
                      {goalOpen.length - 1 === i && <Button onClick={handleAddClick} variant="link" className="add_goal" style={{ textDecoration: "none" }}>ADD IN SCOPE ITEM <i class="fa fa-plus" aria-hidden="true"></i></Button>}
                    </div>
                  </div>
                )
              }
              )}             
              <p> Out of Scope </p>
              <label htmlFor="">What is <b>not</b> included in the work you’ll be doing for the project?</label>
                {goalOpen1.map((x, i) => {
                  return (
                    <div className="project_charter_textarea_div" key={i}>
                      <ItemForm
                        name="outScope" type="textarea" value={x.outScope}
                        onChange={e => handleInputChange1(e, i)}
                        className="project_info" />

                      <div className="add_remove_btn_unit">
                        {goalOpen1.length !== 1 && <Button variant="link" style={{ color: '#212529', border: 'none' }} className="remove_btn" onClick={() => handleRemoveClick1(i)}>Remove</Button>}
                        {goalOpen1.length - 1 === i && <Button onClick={handleAddClick1} variant="link" className="add_goal" style={{ textDecoration: "none" }}>ADD OUT OF SCOPE ITEM <i class="fa fa-plus" aria-hidden="true"></i></Button>}
                      </div>
                    </div>
                  )
                }
              )}              
              <div className="nextstep_charter_btn">
                <Button variant="light" type="submit" className="back_btn" onClick={previous}>
                  BACK
                </Button>
                <div className="charter_btn">
                  <Button type="submit" className="saveancontinue_btn"
                    style={{ background: "#5aa380", border: "none" }} >
                    SAVE AND CONTINUE
                  </Button>
                  <Button variant="link" type="submit" className="skipstep_btn"
                    style={{ color: "#5aa380", textDecoration: "none" }} onClick={next}>
                    Skip this step for now
                  </Button>
                </div>
              </div>
            </Form>
          </Col>

          <Col xs={12} sm={4} lg={5} className="faq-section p-2">
            <div>
              <p>Frequently Asked Questions</p>
              <div onClick={() => setInScopeOpen(!inScopeOpen)}
                aria-controls="example-collapse-text" aria-expanded={inScopeOpen}
                className="faq-col" >
                <p> What exactly does “In Scope” include? </p>
              </div>
              <Collapse in={inScopeOpen}>
                <div className="faq-content" id="example-collapse-text">
                  <p>Your scope includes all of the work you need to accomplish in order to deliver
                    your product, service, or result. For example, if you were building a house,
                    things like framing, electrical, and plumbing would be within your scope.</p>
                </div>
              </Collapse>
              <br />
              <div onClick={() => setOutScopeOpen(!outScopeOpen)}
                aria-controls="example-collapse-text" aria-expanded={outScopeOpen}
                className="faq-col" >
                <p> What exactly does “Out of Scope” include? </p>
              </div>
              <Collapse in={outScopeOpen}>
                <div className="faq-content" id="example-collapse-text">
                  <p>"Scope creep" is one of the dangers of any project, which is why this part is important.</p>
                  <p>Using our home-building example, things like landscaping, sidewalks, and furniture may be out of scope. Outline the things you <span>won't</span> be addressing as “Out of Scope”.</p>
                </div>
              </Collapse>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InScope;
