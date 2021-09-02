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

const Stakeholders = ({ setForm, formData, navigation, id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit, reset } = useForm();
  const { stakeholder } = formData;
  const [stakeholdersOpen, setStakeholdersOpen] = useState(true);
  const { previous, next, go } = navigation;
  const [goalOpen, setGoalOpen] = useState([{ goallist: "" }]);


  // handle input change
  useEffect(() => {
    if (formData.stakeholder != '' && formData.stakeholder != null) {
      setGoalOpen(formData.stakeholder)
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
      "name": formData.name,
      "InScope": formData.InScope,
      "outScope": formData.outScope,
      "startDate": formData.startDate,
      "finishDate": formData.finishDate,
      "budget": formData.budget,
      "assumptionTime": formData.assumptionTime,
      "stakeholder": goalOpen,
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
        <TitleList activeCls="step11" width={90} sendDataToParent={sendDataToParent} />
      </Container>

      <Container className="charter_steps_container">
        <p> Stakeholders </p>
        <Row className="charter_steps">
          <Col xs={12} sm={8} lg={6} className="project_details">
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <label htmlFor="">Who will be affected by this project?</label>
              {goalOpen.map((x, i) => {
                return (
                  <div className="project_charter_textarea_div">
                    <ItemForm
                      name="stakeholder" value={x.stakeholder} type="textarea"
                      className="project_info" onChange={e => handleInputChange(e, i)} />
                    <div className="add_remove_btn_unit">
                      {goalOpen.length !== 1 && <Button variant="link" style={{ color: '#212529', border: 'none' }} className="remove_btn" onClick={() => handleRemoveClick(i)}>Remove</Button>}
                      {goalOpen.length - 1 === i && <Button variant="link" onClick={handleAddClick} className="add_goal" style={{ textDecoration: "none" }}>ADD ITEMS +</Button>}
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
              <div onClick={() => setStakeholdersOpen(!stakeholdersOpen)}
                aria-controls="example-collapse-text" aria-expanded={stakeholdersOpen}
                className="faq-col" >
                <p> What are stakeholders? </p>
              </div>
              <Collapse in={stakeholdersOpen}>
                <div className="faq-content" id="example-collapse-text">
                  <p>Stakeholders include anyone affected by the project. If you look at the impacts
                    listed previously, which groups are responsible for those areas? Place those
                    groups here. Are there people who need to be kept informed of your progress? Will
                    you need to consult with anyone else on decisions? Understanding who needs to
                    know, what they need to know, and when they need to know will be critical to
                    making your project a success.</p>
                </div>
              </Collapse>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Stakeholders;
