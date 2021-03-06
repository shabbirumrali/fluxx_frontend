import React from "react";
 import { Button, Form, FormGroup, Label, Container } from "reactstrap";
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
 import Col from 'react-bootstrap/Col'
 import Row from 'react-bootstrap/Row'
// import Form from 'react-bootstrap/Form'
import FloatingLabel from "react-bootstrap-floating-label";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import Lock from '../../../lock.svg'
import * as actions from "../../../store/actions/index";

const Register = (props) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Password must contain one capital letter, one number, one special character and atleast eight characters."
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const dispatch = useDispatch();
  const { toggle, test } = props;
  const { register, errors, handleSubmit, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    dispatch(actions.createForm(data));
    reset();
  };

  console.log(toggle, test);
  

  return (
    <Container className="my-5">
      <h1 className="pb-4">Create Your account.</h1>
      <Row>        
        <Col xs={2} md={4} lg={6}>        
          <Container className="border">              
            <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>

              {/* <FloatingLabel type="email" label="email" ref={register} name="email" className="my-3" />
              {errors.email && (
                  <span className="errorMessage">{errors.email.message}</span>
                )} */}
              <FormGroup>
                <Label>Email</Label>
                <input type="email" ref={register} name="email" />
                {errors.email && (
                  <span className="errorMessage">{errors.email.message}</span>
                )}
              </FormGroup>

              {/* <FloatingLabel type="password" label="password" ref={register} name="password" className="my-3" />
              {errors.password && (
                  <span className="errorMessage">{errors.password.message}</span>
                )} */}
              <FormGroup>
                <Label>Password</Label>
                <input type="password" ref={register} name="password" />
                {errors.password && (
                  <span className="errorMessage">{errors.password.message}</span>
                )}
              </FormGroup>

              {/* <FloatingLabel type="password" label="retype password" ref={register} name="confirmPassword" className="my-3" />
              {errors.confirmPassword && (
                  <span className="errorMessage">
                    {errors.confirmPassword.message}
                  </span>
                )} */}
              <FormGroup>
                <Label>Confirm Password</Label>
                <input type="password" ref={register} name="confirmPassword" />
                {errors.confirmPassword && (
                  <span className="errorMessage">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </FormGroup>
              <div className="d-flex">
                <Button type="submit" size="lg" className="form_btn py-3 mb-3">CREATE MY ACCOUNT</Button>
                <div className="mx-auto">
                  <img src={Lock} alt=""/>
                </div>
              </div>

              <div className="account_footer py-3">
                <p className="text-center">Already have an account ? <a href className=""> Sign In</a></p>
              </div>
              {/* <p>
                Already have an Account?{" "}
                <Button type="button" onClick={toggle}>
                  Sign in
                </Button>
              </p> */}
            </Form>
          </Container>
          <Row className="account-footer-part mt-3 px-3 py-2">
            <p>All information that you provide is kept completely confidential
            and will not be released to any other companies. Please view our
            <a href=""> Privacy Policy</a>, <a href="">Terms and Conditions</a>, and <a href="">Email Policy </a>for
            further information.</p>
          </Row>
        </Col>
        <Col xs={2} md={6} lg={6} className="border py-3">
          <div>
            <div className="d-flex">
              <img className="px-3 py-3" src={Lock} alt=""/>
              <p className="py-3">Create and save unlimited project charters</p>
            </div>
            <div className="d-flex">
              <img className="px-3 py-3" src={Lock} alt=""/>
              <p className="py-3">Never lose your work</p>
            </div>
            <div className="d-flex">
              <img className="px-3 py-3" src={Lock} alt=""/>
              <p className="py-3">Free email support</p>
            </div>
          </div>
          <div className="password-validation">
            <p className="mt-5 mb-0">Password :</p>
            <ul>
              <li>Must include at least one capital letter</li>
              <li>Must include at least one number</li>
              <li>Must include at least one special character</li>
              <li>Must be at least eight characters</li>
            </ul>
          </div>
        </Col>
      </Row>      
    </Container>
  );
};

export default withRouter(Register);
