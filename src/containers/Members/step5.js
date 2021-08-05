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

const Benefits = ({ setForm, formData, navigation, id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit, reset } = useForm();
  const { benefits } = formData;
  const [benefitOpen, setBenefitOpen] = useState(true)
  const [benefitOpen1, setBenefitOpen1] = useState(true)
  const { previous, next, go } = navigation;
  const [goalOpen, setGoalOpen] = useState([{ goallist: "" }]);
  // console.log(JSON.parse(formData.goal).length);
  // console.log(formData);
  // handle input change
  useEffect(() => {
    if (formData.benefits != '' && formData.benefits != null) {
      setGoalOpen(formData.benefits)
    }
  }, []);

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
    setGoalOpen([...goalOpen, { goallist: "" }]);
  };
  const onSubmit = async (data) => {
    let dataobject = {
      "project_manager": formData.project_manager,
      "project_sponsor": formData.project_sponsor,
      "project_need": formData.project_need,
      "benefits": goalOpen,
      "name": formData.name,
      "step": id
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
      <Container fluid style={{ background: "#3d4a5c" }} className="py-4" >
        <TitleList activeCls="step5" width={35} sendDataToParent={sendDataToParent} />
      </Container>

      <Container className="charter_steps_container">
        <p>Benefits</p>
        <Row className="charter_steps">
          <Col xs={12} sm={8} lg={6} className="project_details">
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <label htmlFor="">What are the benefits of each goal?</label>
              {goalOpen.map((x, i) => {
                return (
                  <div className="project_charter_textarea_div">
                    <ItemForm
                      name="benefits" type="textarea" value={x.benefits}
                      onChange={e => handleInputChange(e, i)}
                      className="project_info" />

                    <div className="add_remove_btn_unit">
                      {goalOpen.length !== 1 && <Button variant="link" style={{ color: '#212529', border: 'none' }} className="remove_btn" onClick={() => handleRemoveClick(i)}>Remove</Button>}
                      {goalOpen.length - 1 === i && <Button onClick={handleAddClick} variant="link" className="add_goal" style={{ textDecoration: "none" }}>ADD Benefits <i class="fa fa-plus" aria-hidden="true"></i></Button>}
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
                  <Button variant="link" type="submit"
                    className="skipstep_btn" style={{ color: "#5aa380", textDecoration: "none" }}
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
              <div onClick={() => setBenefitOpen(!benefitOpen)}
                aria-controls="example-collapse-text"
                aria-expanded={benefitOpen}
                className="faq-col">
                <p>What exactly is a benefit & how is it different from a goal? </p>
              </div>
              <Collapse in={benefitOpen}>
                <div className="faq-content" id="example-collapse-text">
                  <p>Goals state what you want to achieve and benefits are precise, measurable ways explaining how to achieve that goal. </p>
                  <p>For instance, if your goal was to increase profitability of a certain product line, your benefits may include things such as:</p>
                  <ul>
                    <li>Reduce waste during</li>
                    <li>manufacturing by 75%</li>
                    <li>Increase annual sales by $50,000</li>
                  </ul>
                </div>
              </Collapse>
              <br />
              <div onClick={() => setBenefitOpen1(!benefitOpen1)}
                aria-controls="example-collapse-text" aria-expanded={benefitOpen1}
                className="faq-col" >
                <p> What are some more examples of benefits?</p>
              </div>
              <Collapse in={benefitOpen1}>
                <div className="faq-content" id="example-collapse-text">
                  <p>Ex.: Reduce travel expenses by $3,000 per trip </p>
                  <p>Ex.: Increase production output by 30% </p>
                  <p>Ex.: Gain an estimated 20% increase in new customers</p>
                </div>
              </Collapse>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Benefits;
