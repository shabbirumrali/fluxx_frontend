import React, {useEffect} from "react";
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
    if(token != ''){       
        history.push({
         pathname:  "/members",        
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
      
  },[]); 


  return (
    <Container>
      <Row>
        <Col className="forgot_pass_container">
         <h3 className="text-center py-3">Forgot Password</h3>
        
          <div className="set_password_form py-4 px-5">
            <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <FormGroup className="form_details">
                <Label>Email</Label>
                <Form.Control type="email" ref={register} name="email" />
                {errors.email && (
                  <span className="errorMessage">{errors.email.message}</span>
                )}
              </FormGroup>            
              <Button type="submit" className="mt-3">SET PASSWORD</Button>
            </Form>
          </div>
            <div className="forgot_privacy_info">
              <p className="mt-3"> All information that you provide is kept completely confidential and
                will not be released to any other companies. Please view our <Link to="/privacypolicy"> Privacy Policy</Link>
               , <Link to="/terms">Terms and Conditions</Link>, and <a href="">Email Policy</a> for further information.</p>
            </div>           
        </Col>                 
      </Row>      
    </Container>    
  );
};

export default withRouter(Forgetpassword);
