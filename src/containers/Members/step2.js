import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import ItemForm from "./ItemForm";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../store/actions/index";
import { useHistory, Redirect } from "react-router-dom";
import TitleList from "./titleList";

const Address = ({ setForm, formData, navigation, id }) => {
  //console.log(setForm);
  console.log(formData);

  const dispatch = useDispatch();
  const history = useHistory();
  const [pmasOpen, setPmasOpen] = useState(true);
  const [pmasOpen2, setPmasOpen2] = useState(true);
  const { register, errors, handleSubmit, reset } = useForm();
  const { project_manager, project_sponsor } = formData;
  const { previous, next, go } = navigation;

  console.log(navigation);
  const onSubmit = async (data) => {
    console.log(project_manager);
    console.log(project_sponsor);
    let dataobject = {
      "project_manager": project_manager,
      "project_sponsor": project_sponsor,
      "name": formData.name,
      "step": id
    }
    // console.log(dataobject);
    // return false;
    dispatch(actions.createcharter(dataobject));
    next();

  };

  const sendDataToParent = (index) => { // the callback. Use a better name
    console.log(index);
    go(index);

  };

  return (
    <>
      <Container fluid style={{ background: "#3d4a5c" }} className="py-4">
        <TitleList activeCls="step2" width={14} sendDataToParent={sendDataToParent} />
      </Container>

      <Container className="charter_steps_container">
        <p>Project Manager & Sponsor</p>
        <Row className="charter_steps">
          <Col xs={12} sm={8} lg={6} className="project_details">
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="project_charter_textarea_div">
                <ItemForm label="Who will be the Project Manager?"
                  name="project_manager" type="textarea"
                  value={project_manager} onChange={setForm}
                  className="project_info" />
              </div>

              <div className="project_charter_textarea_div">
                <ItemForm label="Who is the Project Sponsor?"
                  name="project_sponsor" type="textarea"
                  value={project_sponsor} onChange={setForm}
                  className="project_info"
                />
              </div>
              <div className="nextstep_charter_btn">
                <Button variant="light" type="submit" className="back_btn" onClick={previous}>
                  BACK
                </Button>
                <div className="charter_btn">
                  <Button type="submit" className="saveancontinue_btn"
                    style={{ background: "#5aa380", border: "none" }}>
                    SAVE AND CONTINUE
                  </Button>
                  <Button variant="link" type="submit" className="skipstep_btn"
                    style={{ color: "#5aa380", textDecoration: "none" }} onClick={next} >
                    Skip this step for now
                  </Button>
                </div>
              </div>
            </Form>
          </Col>

          {/* Faq Step 2 */}
          <Col xs={12} sm={4} lg={5} className="faq-section p-2">
            <div>
              <p>Frequently Asked Questions</p>
              <div
                onClick={() => setPmasOpen(!pmasOpen)}
                aria-controls="example-collapse-text"
                aria-expanded={pmasOpen}
                className="faq-col" >
                <p>Whose name should I list as project manager? </p>
              </div>
              <Collapse in={pmasOpen}>
                <div className="faq-content" id="example-collapse-text">
                  <p>This is the person responsible for the day-to-day management of the project.</p>
                </div>
              </Collapse>
              <br />
              <div
                onClick={() => setPmasOpen2(!pmasOpen2)}
                aria-controls="example-collapse-text"
                aria-expanded={pmasOpen2}
                className="faq-col" >
                <p> What is a project sponsor? </p>
              </div>
              <Collapse in={pmasOpen2}>
                <div className="faq-content" id="example-collapse-text">
                  <p>The sponsor is the person who is advocating for the project. This person usually appoints the project manager,
                    verifies that the project is aligned with the business strategy, approves financial
                    resources for the project; all while providing oversight and high-level support throughout the lifecycle of the
                    effort. </p>
                </div>
              </Collapse>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Address;
