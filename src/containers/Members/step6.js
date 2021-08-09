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
import TitleList from "./titleList";

const InScope = ({ setForm, formData, navigation, id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit, reset } = useForm();
  const { InScope, outScope } = formData;
  const [inScopeOpen, setInScopeOpen] = useState(true);
  const [outScopeOpen, setOutScopeOpen] = useState(true);
  const { previous, next, go } = navigation;
  const onSubmit = async (data) => {
    let dataobject = {
      "goal": formData.goal,
      "project_manager": formData.project_manager,
      "project_sponsor": formData.project_sponsor,
      "project_need": formData.project_need,
      "name": formData.name,
      "InScope": InScope,
      "outScope": outScope,
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

  return (
    <>
      <Container fluid style={{ background: "#3d4a5c" }} className="py-4" >
        <TitleList activeCls="step6" width={42} sendDataToParent={sendDataToParent} />
      </Container>

      <Container className="charter_steps_container">
        <p> In Scope </p>
        <Row className="charter_steps">
          <Col xs={12} sm={8} lg={6} className="project_details">
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="project_charter_textarea_div">
                <ItemForm label="What is included in the work you’ll be doing for the project?"
                  name="InScope" type="textarea" value={InScope}
                  onChange={setForm} className="project_info" />
              </div>
              <p> Out of Scope </p>
              <div className="project_charter_textarea_div">
                <ItemForm label="What is not included in the work you’ll be doing for the project?"
                  name="outScope" value={outScope} type="textarea"
                  onChange={setForm} className="project_info"
                />
              </div>
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
