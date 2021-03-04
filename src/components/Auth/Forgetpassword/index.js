import React from "react";
import { Button, Form, FormGroup, Label, Container } from "reactstrap";
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

  const dispatch = useDispatch();
  
  const { register, errors, handleSubmit, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    dispatch(actions.forgetpassword(data));
    reset();
  };


  return (
    <Container>
      <h3>Forget Password.</h3>
      <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormGroup>
          <Label>Email</Label>
          <input type="email" ref={register} name="email" />
          {errors.email && (
            <span className="errorMessage">{errors.email.message}</span>
          )}
        </FormGroup>
        <Button type="submit">Submit</Button>
        </Form>
      <p>
        All information that you provide is kept completely confidential and
        will not be released to any other companies. Please view our Privacy
        Policy, Terms and Conditions, and Email Policy for further information.
      </p>
    </Container>
  );
};

export default withRouter(Forgetpassword);
