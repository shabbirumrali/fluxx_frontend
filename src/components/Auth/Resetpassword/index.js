import React from "react";
import { Button, Form, FormGroup, Label, Container, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { withRouter, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link, Router, useHistory, Redirect } from "react-router-dom";
import * as actions from "../../../store/actions/index";
import { createBrowserHistory } from "history";

const Resetpassword = (props) => {
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
    password: Yup.string()
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
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

    const history = createBrowserHistory();
    const splitdata = history.location.pathname.split("/")

    dispatch(actions.resetpassword(data, splitdata[2]));
    reset();
  };


  return (
    <Container>
      <Row className="forgot_password_row">
        <Col sm={12} lg={6} md={12} xs={12} className="forgot_pass_container">
          <h3>Update  Password.</h3>
          <div className="forgot_pass_email">
            <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <FormGroup className="form_details">
                <Label>Password</Label>
                <Form.Control type="password" ref={register} name="password" />
                  { errors.password && ( <span className="errorMessage">{errors.password.message}</span>) }
              </FormGroup>
              <FormGroup className="form_details">
                <Label>Confirm Password</Label>
                <Form.Control type="password" ref={register} name="confirmPassword" />
                  { errors.confirmPassword && ( <span className="errorMessage"> {errors.confirmPassword.message}</span>) }
              </FormGroup>
              <Button type="submit">submit</Button>
            </Form>
          </div>

          <div className="forgot_privacy_info">
            <p> All information that you provide is kept completely confidential and
              will not be released to any other companies. Please view our <Link to="/privacypolicy"> Privacy Policy</Link>
              , <Link to="/terms">Terms and Conditions</Link> for further information.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Resetpassword);
