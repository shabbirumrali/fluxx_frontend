import React, { useState, useEffect, useCallback } from "react";
import { FormGroup, Label } from "reactstrap";
import { Container, Row, Col, Button, Image, OverlayTrigger, Popover, Modal, Form } from "react-bootstrap";
import Folder from '../../assets/img/folder.png';
import More from '../../more.svg';
import Document from '../../assets/img/file-empty-icon.png';
import { Link, Router, useHistory, Redirect } from "react-router-dom";
import axios from 'axios';
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../store/actions/index";
import moment from 'moment';
import { toast } from "react-toastify";
const Setting = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [deleteAcc, setDeleteAcc] = useState(false);
  const [Resetpassword, setResetpassword] = useState(false);
  
  const handleDeleteAccClose = () => setDeleteAcc(false);
  const handleDeleteAccShow = () => setDeleteAcc(true);
  const handleresetShow = () => setResetpassword(true);
  const handleresetClose = () => setResetpassword(false);
  const { register, errors, handleSubmit, reset } = useForm();

  
  

  const onSubmit = async (data) => {
    if (data.emailfirst != undefined && data.passwordfirst != undefined) {
      dispatch(actions.changeemail(data));
    }
    if (data.password != undefined) {
      dispatch(actions.lockaccount(data));
    }
    if (data.oldpassword != undefined && data.newpassword != undefined) {
      dispatch(actions.updatepassword(data));
      handleresetClose();
    }
    reset();
  }
  if (props.responsesettingData != undefined && props.responsesettingData.success == false) {
    errors.wrongpassword = 'please enter correct password';

  }
  if (props.responsesettingData != undefined && props.responsesettingData.lockAccount == 'success') {
    toast.success(props.responsesettingData.message);
    localStorage.setItem('token', '');
    localStorage.setItem('email', '');
    window.location.href = "/";
    return false;
  }
  if (props.responsesettingData != undefined && props.responsesettingData.changeEmail == 'success') {
    toast.success(props.responsesettingData.message);
    localStorage.setItem('token', '');
    localStorage.setItem('email', '');
    window.location.href = "/";
    return false;
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6} xs={12} md={12} sm={6} className="my_account_top_section">
            <div className="account_setting_header">
              <h3>My Account</h3>
              <p>{localStorage.getItem('email')}</p>
            </div>
            <div className="acc_setting">
              <h5>Account Settings</h5>
            </div>
          </Col>
        </Row>
        <Row className="account_setting_row">
          <Col lg={6} xs={12} md={12} sm={6} className="my_account_top_section">
            <div className="setting_block">
              <div className="setting_section">
                <h5>Email</h5>
                <div className="change_setting">
                  <p>{localStorage.getItem('email')}</p>
                  <Link onClick={handleShow}>Change Email</Link>
                </div>

                <div className="setting_checkbox">
                  <Label className="switch">
                    <input type="checkbox" checked={localStorage.getItem('subscribeUser') === "true" ? "checked":""}/>
                    <span className="slider round"></span>
                  </Label>
                  <p>Email me special offers and news</p>
                </div>
              </div>

              <div className="setting_section_password">
                <h5>Password</h5>
                <div className="change_setting">
                  <Link onClick={handleresetShow}>Reset my Fluxx password</Link>
                </div>
              </div>
              <div className="delete_account">
                <Link onClick={handleDeleteAccShow} >Delete Account</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Change email modal */}
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="modal_header_section" closeButton>
          <Modal.Title className="modal_title_section">Change Your Email</Modal.Title>
        </Modal.Header>
        <Modal.Body clasName="modal_body_section">
          <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormGroup className="modal_form_content">
              <label>email</label>
              <input type="email" name="emailfirst" ref={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, })} />
              {errors.email && (<span className="errorMessage"> Please enter a valid email address </span>)}
            </FormGroup>
            <FormGroup className="modal_form_content">
              <label>password</label>
              <input type="password" ref={register({ required: true })} name="passwordfirst" />
              {errors.password && (<span className="errorMessage"> Please enter a password </span>)}
              {errors.wrongpassword ? <span className="errorMessage">Password is incorrect</span> : null}
            </FormGroup>
            <div className="modal_btn_section_create_folder">
              <Button type="submit" className="modal_trigger_btn"> Change Email </Button>
              <Button variant="light" type="submit" onClick={handleClose} className="modal_cancel_btn"> Cancel </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Delete Account Modal */}
      <Modal show={deleteAcc} onHide={handleDeleteAccClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="modal_header_section" closeButton>
          <Modal.Title className="modal_title_section">Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body clasName="modal_body_section">
          <p>Are you sure you want to delete your account ?</p>
          <p>If you delete your account you will permananently lose access to all of the documents you have created</p>
          <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormGroup className="modal_form_content">
              <Label>Password</Label>
              <input type="password" ref={register({ required: true })} name="password" />
              {errors.password && (<span className="errorMessage"> Please enter a password </span>)}
              {errors.wrongpassword ? <span className="errorMessage">Password is incorrect</span> : null}
            </FormGroup>
            <div className="modal_btn_section_create_folder">
              <Button type="submit" className="modal_trigger_btn"> Delete Account </Button>
              <Button className="modal_cancel_btn" variant="light" type="submit" onClick={handleDeleteAccClose}> CANCEL </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      {/* -------- set Password ---------- */}
      <Modal show={Resetpassword} onHide={handleresetClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="modal_header_section" closeButton>
          <Modal.Title className="modal_title_section">Set Password</Modal.Title>
        </Modal.Header>
        <Modal.Body clasName="modal_body_section">
          <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormGroup className="modal_form_content">
              <Label>old password</Label>
              <input type="password" ref={register({ required: true })} name="oldpassword" />
              {errors.password && (<span className="errorMessage"> Please enter a old password </span>)}
              {errors.wrongpassword ? <span className="errorMessage">Old Password is incorrect</span> : null}
            </FormGroup>
            <FormGroup className="modal_form_content">
              <Label>new password</Label>
              <input type="password" ref={register({ required: true })} name="newpassword" />
              {errors.password && (<span className="errorMessage"> Please enter a new password </span>)}
              {errors.wrongpassword ? <span className="errorMessage">New Password is incorrect</span> : null}
            </FormGroup>
            <div className="modal_btn_section_create_folder">
              <Button type="submit" className="modal_trigger_btn"> Change Password </Button>
              <Button onClick={handleresetClose} className="modal_cancel_btn" variant="light" type="submit"> Cancel </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    responsesettingData: state.auth.data
  };
};
export default connect(mapStateToProps)(Setting);