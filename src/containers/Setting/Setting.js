import React, { useState } from 'react'
import { Col, Container, Row, Button, Form, FormGroup, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Setting = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [deleteAcc, setDeleteAcc] = useState(false);

  const handleDeleteAccClose = () => setDeleteAcc(false);
  const handleDeleteAccShow = () => setDeleteAcc(true);
  
  return (
    <>
    <Container fluid>
      <Row>
        <Col>
          <div className="my_account_top_section mt-5">
            <div className="d-flex">
              <h3>My Account</h3>
              <p>username@gmail.com</p>
            </div>
            <div className="acc_setting mt-5 p-3">
              <h4>ACCOUNT SETTINGS</h4>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{background: "#efefef"}}>
        <Col>
          <div className="setting_block">
            <div className="email_section my-4 p-3">
              <h6>Email</h6>
              <div className="change_setting d-flex my-4">
                <p>username@gmail.com</p>
                <Link onClick={handleShow}>Change Email</Link>
              </div>
              {/*  */}
              <div>
              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Email me special offers and news" />
              </Form.Group>
              </div>
            </div>

            <div className="email_section my-4 p-3">
              <h6>Password</h6>
              <div className="change_setting mt-4">
                <Link className="p-0">Reset my Fluxx Password</Link>
              </div>              
            </div>
          
            <div className="delete_account my-5">
              <Link onClick={handleDeleteAccShow} className="p-4" >DELETE ACCOUNT</Link>
            </div>

          </div>          
        </Col>
      </Row>
    </Container>

{/* Change email modal */}    
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header className="model_title py-3" closeButton>
            <h4 className="m-0">Change Your Email</h4>
        </Modal.Header>
        <Modal.Body className="email_change">
          <Form id="contact-form" noValidate>
            <FormGroup>
              <label htmlFor style={{color: "#a4d3e7"}}>email</label>
              <input type="email" name="email" />
            </FormGroup>
            <FormGroup>
              <label htmlFor style={{color: "#a4d3e7"}}>password</label>
              <input type="password" name="password" />
            </FormGroup>
            <Button onClick={handleClose} className="email_change_btn py-2 my-2">
              CHANGE EMAIL
            </Button>
            <Button onClick={handleClose} className="cancel_btn py-2 m-2">
              CANCEL
            </Button>
          </Form>
        </Modal.Body>        
      </Modal>

      {/* Delete Account Modal */}
      <Modal show={deleteAcc} onHide={handleDeleteAccClose}  aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header className="model_title py-3" closeButton>
          <h4 className="m-0">Delete Your Account</h4>
        </Modal.Header>
        <Modal.Body>          
          <p>Are you sure you want to delete your account ?</p>

          <p>If you delete your account you will permananently lose access to all of the documents you have created</p>
          <Form id="contact-form" noValidate>
            <FormGroup>
              <label htmlFor style={{color: "#a4d3e7"}}>Password</label>
              <input type="password" name="password" />
            </FormGroup>
            <Button variant="secondary" onClick={handleDeleteAccClose} className="email_change_btn py-2 my-2">
              DELETE YOUR ACCOUNT
            </Button>
            <Button variant="primary" onClick={handleDeleteAccClose} className="cancel_btn py-2 m-2">
              CANCEL
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

  </>
  )
}

export default Setting
