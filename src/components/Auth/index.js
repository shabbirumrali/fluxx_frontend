import React, { useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label
} from "reactstrap";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, Router, useHistory, Redirect } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../store/actions/index";
const Auth = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit, reset } = useForm();
  const { className, toggle, modal,forcesign} = props;
  
  const onSubmit = async (data) => {
    dispatch(actions.auth(data));
    reset();
  };
  const forgetpassword = () => {
    toggle(!toggle);
    history.push("/forgetpassword");
  }

  let authRedirect = null;

  console.log(props.isAuthenticated);

  useEffect(() => {

    if (props.isAuthenticated == true) {
      toggle(!toggle);
      history.push("/members");
    }
  }, [props.isAuthenticated]);

  const redirect = () => {
    history.push("/register");
    console.log(toggle);
    toggle(!toggle);
  };

  return (
    <Modal isOpen={modal} toggle={toggle} className={className} centered>
      <ModalHeader className="modal_logo" closeButton>
        <h5>fluxx.</h5>
      </ModalHeader>
      <ModalBody className="p-0">
        <div className="signin_modal_header">
          <p className="m-0"> Sign in to Fluxx. </p>
        </div>
        <div className="modal_form_body">
          <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormGroup >
              <Label htmlFor>email</Label>
              <input type="email" name="email"
                ref={register({
                  required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
              {errors.email && (<span className="errorMessage"> Please enter a valid email address </span>)}
            </FormGroup>
            <FormGroup>
              <Label htmlFor>password</Label>
              <input type="password" name="password"
                ref={register({
                  required: true, pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                })}
              />
              {errors.password && (<span className="errorMessage"> Please enter a valid password </span>)}
            </FormGroup>
            <div className="forget_pass">
              <p className="m-0">
                <Link to="#" rel="noreferrer" onClick={forgetpassword} style={{ color: "#5aa380", textDecoration: "none" }}>
                  I forgot my password.
                </Link>
              </p>
            </div>
            <Button type="submit" className="sign_in_button" style={{ border: "none" }}>
              SIGN IN
            </Button>
          </Form>
        </div>
      </ModalBody>
      <ModalFooter className="model_footer">
        <p>Don’t have an account? <a href="#" onClick={redirect} >Create a free account</a></p>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetAuthRedirectPath: () =>
      dispatch(actions.setAuthRedirectPath("/members")),
    onError: () => dispatch(actions.authFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
