import React, { useState, useEffect } from "react";
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
import TitleList from "./titleList";
import appConfig from "./../../config";
const Risks = ({ setForm, formData, navigation, id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit, reset } = useForm();
  const { risks } = formData;
  const [risksOpen, setRisksOpen] = useState(true);
  const { previous, next, go } = navigation;
  const [goalOpen, setGoalOpen] = useState([{ goallist: "" }]);
  // console.log(formData);
  // handle input change
  useEffect(() => {
    if (formData.risks != '' && formData.risks != null) {
      setGoalOpen(formData.risks)
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
    formData.risks = goalOpen;
    let dataobject = {
      "project_manager": formData.project_manager,
      "project_sponsor": formData.project_sponsor,
      "project_need": formData.project_need,
      "name": formData.name,
      "InScope": formData.InScope,
      "outScope": formData.outScope,
      "startDate": formData.startDate,
      "finishDate": formData.finishDate,
      "budget": formData.budget,
      "assumptionTime": formData.assumptionTime,
      "risks": goalOpen,
      "step": id
    }
    dispatch(actions.createcharter(dataobject));
    setTimeout(() => {     
       finalstep();
    }, 2000);
    
  };
  function finalstep() {
    axios({
      "method": "GET",
      "url": appConfig.config().baseUrl + "/fetchcharter/" + formData.name,
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
  const sendDataToParent = (index) => {
    // the callback. Use a better name
    console.log(index);
    go(index);
  };

  return (
    <>
      <Container fluid style={{ background: "#3d4a5c" }} className="py-4">
        <TitleList activeCls="step12" width={100} sendDataToParent={sendDataToParent} projectna={formData.name} />
      </Container>
      <Container className="charter_steps_container">
        <p> Risks </p>
        <Row className="charter_steps">
          <Col xs={12} sm={8} lg={6} className="project_details">
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <label htmlFor="">What are some of the things that could derail this project?</label>
              {goalOpen.map((x, i) => {
                return (
                  <div className="project_charter_textarea_div" key={i}>
                    <ItemForm
                      name="risks" value={x.risks} type="textarea" className="project_info"
                      onChange={e => handleInputChange(e, i)} />
                    <div className="add_remove_btn_unit">
                      {goalOpen.length !== 1 && <Button variant="link" style={{ color: '#212529', border: 'none' }} className="remove_btn" onClick={() => handleRemoveClick(i)}>Remove</Button>}
                      {goalOpen.length - 1 === i && <Button variant="link" onClick={handleAddClick} className="add_goal" style={{ textDecoration: "none" }}>ADD RISK <i class="fa fa-plus" aria-hidden="true"></i></Button>}
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
                    style={{ color: "#5aa380", textDecoration: "none" }} >
                    Skip this step for now
                  </Button>
                </div>
              </div>
            </Form>
          </Col>

          <Col xs={12} sm={4} lg={5}>
            <div className="faq-section p-2">
              <p>Frequently Asked Questions</p>
              <div onClick={() => setRisksOpen(!risksOpen)}
                aria-controls="example-collapse-text" aria-expanded={risksOpen}
                className="faq-col">
                <p> What exactly is a risk? </p>
              </div>
              <Collapse in={risksOpen}>
                <div className="faq-content" id="example-collapse-text">
                  <p>Risks are things that could derail your efforts. What about that critical team that
                    may or may not be available? Are you concerned about conflicting projects?
                    What about the time you have to complete the project before a negative
                    impact? You'll have to manage these things as you go. Don't worry, you don't
                    have to name everything right now, but if you can identify some major potential
                    obstacles, list them here.</p>
                </div>
              </Collapse>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Risks;

