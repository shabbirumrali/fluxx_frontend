import React, { useEffect } from "react";
import { FormGroup, Label } from "reactstrap";
import { Container, Row, Col, Form, Button, NavLink } from 'react-bootstrap';
import { Link, Router, useHistory, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../../store/actions/index";

const Forgetpassword = (props) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (token != '') {
      history.push({
        pathname: "/members",
      });
    }
  };

  const { register, errors, handleSubmit, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    dispatch(actions.forgetpassword(data));
    reset();
  };
  useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <Container>
      <Row className="forgot_password_row">
        <Col sm={12} lg={6} md={12} xs={12} className="forgot_pass_container">
          <h3>Forgot Password</h3>

          <div className="forgot_pass_email">
            <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <FormGroup className="form_details">
                <Label>email</Label>
                <Form.Control type="email" ref={register} name="email" />
                {errors.email && (<span className="errorMessage">{errors.email.message}</span>)}
              </FormGroup>
              <Button type="submit">SEND PASSWORD RESET EMAIL</Button>
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

export default withRouter(Forgetpassword);