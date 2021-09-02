import React, { useEffect } from "react";
import { FormGroup, Label, Container } from "reactstrap";
import { Col, Row, Form, Image, Button } from 'react-bootstrap'
import FloatingLabel from "react-bootstrap-floating-label";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Link, Router, useHistory, Redirect } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import Document from '../../../assets/img/document.png'
import Lock from '../../../assets/img/lock.png'
import Lifesaver from '../../../assets/img/lifesaver.png'
import * as actions from "../../../store/actions/index";

const Register = (props) => {
  console.log(props);
  const history = useHistory();
  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (token != '') {
      history.push({
        pathname: "/members",
      });
    }
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
        "Password must contain one capital letter, one number, one special character and at least eight characters."
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const dispatch = useDispatch();
  const { className, toggle, modal } = props;
  const { register, errors, handleSubmit, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    dispatch(actions.createForm(data));
    reset();
  };

  console.log(toggle);
  useEffect(() => {
    checkAuthToken();

  }, []);

  return (<>
    <Container className="signup_container">
      <Row className="signup_row">
        <Col lg={7} sm={7} xs={12} md={12} className="create_your_account">
          <div className="account_form">
            <h2>Create your account.</h2>
            <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="account_form_handle">
                <FormGroup>
                  <Label>email</Label>
                  <input type="email" ref={register} name="email" />
                  {errors.email && (<span className="errorMessage">{errors.email.message}</span>)}
                </FormGroup>
                <FormGroup>
                  <Label>password</Label>
                  <input type="password" ref={register} name="password" />
                  {errors.password && (<span className="errorMessage">{errors.password.message}</span>)}
                </FormGroup>
                <FormGroup>
                  <Label>retype password</Label>
                  <input type="password" ref={register} name="confirmPassword" />
                  {errors.confirmPassword && (<span className="errorMessage"> {errors.confirmPassword.message} </span>)}
                </FormGroup>
                <div className="create_account_btn">
                  <Button type="submit" className="form_btn">Create my Account</Button>
                  <div className="signup_image">
                    <img src={Lock} alt="Lock Image" />
                  </div>
                </div>
                <div className="account_footer">
                  <p className="text-center">Already have an account? <a href="" onClick={toggle}> Sign In</a></p>
                </div>
              </div>
            </Form>
            <div className="create_account_footer">
              <p>All information that you provide is kept completely confidential
                and will not be released to any other companies. Please view our <Link to="/privacypolicy">Privacy Policy</Link>, <Link to="/terms">Terms and Conditions</Link> for
                further information.</p>
            </div>
          </div>

        </Col>

        <Col lg={5} sm={5} xs={12} md={7} className="message_create">
          <div className="message_creation_inside_box">
            <div className="unit_message_box">
              <Image src={Document} alt="Document" />
              <p>Create and save unlimited project charters</p>
            </div>
            <div className="unit_message_box">
              <Image src={Lock} alt="Lock" />
              <p>Never lose your work</p>
            </div>
            <div className="unit_message_box">
              <Image src={Lifesaver} alt="Lifesaver" />
              <p>Free email support</p>
            </div>

            <div className="password_validation">
              <p>Password :</p>
              <ul>
                <li>Must include at least one capital letter</li>
                <li>Must include at least one number</li>
                <li>Must include at least one special character</li>
                <li>Must be at least eight characters</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </>);
};

export default withRouter(Register);