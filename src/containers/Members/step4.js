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

const Goal = ({ setForm, formData, navigation, id }) => {
  console.log(formData);
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit, reset } = useForm();
  const { goal } = formData;
  const { previous, next, go } = navigation;
  const [faqGoalOpen, setfaqGoalOpen] = useState(true);

  const [goalOpen, setGoalOpen] = useState([{ goallist: "" }]);
 
  // handle input change
  console.log(formData.goal);
  useEffect(() => {
    if (formData.goal != '' && formData.goal != null) {
      setGoalOpen(formData.goal)
    }
  }, []);
  console.log(goalOpen);
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
    setGoalOpen([...goalOpen, { goallist: "" }]);
  };
 console.log(goalOpen);

  const onSubmit = async (data) => {
    console.log(formData.goal);
    console.log(goalOpen);
    formData.goal = goalOpen;
    let dataobject = {
      "goal": goalOpen,
      "project_manager": formData.project_manager,
      "project_sponsor": formData.project_sponsor,
      "project_need": formData.project_need,
      "name": formData.name,
      "step": id
    }
    dispatch(actions.createcharter(dataobject));    
    next();
  };
  const sendDataToParent = (index) => {
    // the callback. Use a better name
    console.log(index);
    go(index);
  };

  return (
    <>
      <Container fluid style={{ background: "#3d4a5c" }} className="py-4" >
        <TitleList activeCls="step4" width={28} sendDataToParent={sendDataToParent} />
      </Container>

      <Container className="charter_steps_container">
        <p>Goals</p>
        <Row className="charter_steps">
          <Col xs={12} sm={8} lg={6} className="project_details">
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <label htmlFor="">What do you hope to accomplish with this project? What do you hope to gain or retain with this effort?</label>
              {goalOpen.map((x, i) => {
                return (
                  <div className="project_charter_textarea_div" key={i}>
                    <ItemForm key={x} name="goal" value={x.goal} className="project_info"
                      type="textarea" onChange={e => handleInputChange(e, i)}
                    />
                    <div className="add_remove_btn_unit">
                      {goalOpen.length !== 1 && <Button variant="link" style={{ color: '#212529', border: 'none' }} className="remove_btn" onClick={() => handleRemoveClick(i)}>Remove</Button>}
                      {goalOpen.length - 1 === i && <Button variant="link" onClick={handleAddClick} className="add_goal" style={{ textDecoration: "none" }}>ADD ITEMS <i class="fa fa-plus" aria-hidden="true"></i></Button>}
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
                    style={{ color: "#5aa380", textDecoration: "none" }}
                    onClick={next} >
                    Skip this step for now
                  </Button>
                </div>
              </div>
            </Form>
          </Col>

          <Col xs={12} sm={4} lg={5} className="faq-section p-2">
            <div>
              <p>Frequently Asked Questions</p>
              <div
                onClick={() => setfaqGoalOpen(!faqGoalOpen)}
                aria-controls="example-collapse-text"
                aria-expanded={faqGoalOpen}
                className="faq-col"
              >
                <p> What are some examples of what a goal should look like? </p>
              </div>
              <Collapse in={faqGoalOpen}>
                <div className="faq-content" id="example-collapse-text">
                  <ul>
                    <li>Find a technical solution to solve a logistical problem.</li>
                    <li>Migrate from an outdated, unsupported software to a cloud-based alternative</li>
                    <li>Review current processes and revise methods to improve product quality</li>
                  </ul>
                </div>
              </Collapse>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Goal;