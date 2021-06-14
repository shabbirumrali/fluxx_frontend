import React from "react";
import { Button, Form, FormGroup, Label, Container } from "reactstrap";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { withRouter,useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link, Router, useHistory, Redirect } from "react-router-dom";
import * as actions from "../../../store/actions/index";
import { createBrowserHistory } from "history";

const Resetpassword = (props) => {
  const history = useHistory();
  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if(token != ''){       
        history.push({
         pathname:  "/members",        
        });
    }
  };
  const validationSchema = Yup.object().shape({    
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

    const history = createBrowserHistory();
    const splitdata = history.location.pathname.split("/")


    
    dispatch(actions.resetpassword(data,splitdata[2]));
    reset();
  };

 
  return (
    <Container>
      <h3>Create Your account.</h3>
      <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>        
        <FormGroup>
          <Label>Password</Label>
          <input type="password" ref={register} name="password" />
          {errors.password && (
            <span className="errorMessage">{errors.password.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Confirm Password</Label>
          <input type="password" ref={register} name="confirmPassword" />
          {errors.confirmPassword && (
            <span className="errorMessage">
              {errors.confirmPassword.message}
            </span>
          )}
        </FormGroup>
        <Button type="submit">Create My Account</Button>
        
      </Form>
      <p>
        All information that you provide is kept completely confidential and
        will not be released to any other companies. Please view our Privacy
        Policy, Terms and Conditions, and Email Policy for further information.
      </p>
    </Container>
  );
};

export default withRouter(Resetpassword);
