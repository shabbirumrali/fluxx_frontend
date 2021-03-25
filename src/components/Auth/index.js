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
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../store/actions/index";
import { useHistory, Redirect } from "react-router-dom";

const Auth = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit, reset} = useForm();
  const { className, toggle, modal } = props;

  const onSubmit = async (data) => {
    dispatch(actions.auth(data));
    reset();
  };
  const forgetpassword = () => {
    toggle(!toggle);
    history.push("/forgetpassword");
  }

  let authRedirect = null;
  if (props.isAuthenticated) {
    console.log(props.authRedirectPath);
    console.log(props);
    window.location.href = props.authRedirectPath;
    authRedirect = <Redirect to={props.authRedirectPath} />;
  }

  const redirect = () => {
    history.push("/register");
    console.log(toggle);
    toggle(!toggle);

  };

  return (
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader closeButton>Fluxx</ModalHeader>
      <ModalBody className="p-0">        
        <Container fluid="md" className="signin_color mx-0">
            <Row className="py-3">
              <Col className="sign_in_fluxx py-1"><p className="m-0"> Sign in to Fluxx. </p></Col>
            </Row>
        </Container>
         <Container>
            <Row>
              <Col className="py-1">
        <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormGroup >
            <Label htmlFor>Email</Label>
            <input
              type="email"
              ref={register({
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              name="email"
            />
            {errors.email && (
              <span className="errorMessage">
                Please enter a valid email address
              </span>
            )}
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <input
              type="password"
              ref={register({
                required: true,
                pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
              })}
              name="password"
            />
            {errors.password && (
              <span className="errorMessage">
                Please enter a valid password
              </span>
            )}
          </FormGroup>
            <div className="col forget_pass">
            <p className="py-3 m-0">
              <Link to="#" rel="noreferrer" onClick={forgetpassword} style={{color: "#5aa380", textDecoration: "none"}}>
                I forget my password.
              </Link>
            </p>
          </div>
          {

          }
          <Button type="submit" className="btn sign_in_button" block style={{background:"#5aa380", color: "#efefef", border: "none"}}>
            Sign In
          </Button>
        </Form>
         </Col>
            </Row>
          </Container>
      </ModalBody>      
      <ModalFooter className="justify-content-center model_footer">
          <p className="py-2">Don’t have an account? <a href="#" onClick={redirect} >Create a free account</a></p>
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
