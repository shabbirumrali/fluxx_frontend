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
      <ModalBody>
        <div className="col bg-light py-4">
          <h3 className="text-center">Sign in to fluxx</h3>
        </div>

        <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormGroup>
            <Label>Email</Label>
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
              <Link to="#" rel="noreferrer" onClick={forgetpassword}>
                I forget my password.
              </Link>
            </p>
          </div>
          {

          }
          <Button type="submit" className="btn sign_in_button">
            Sign In
          </Button>
        </Form>
       
      </ModalBody>

      <ModalFooter>
        <div className="create_acc">
          <p className="m-0">
             Don't have an account?
            <Button onClick={redirect}>create a free account</Button>
          </p>
        </div>
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
