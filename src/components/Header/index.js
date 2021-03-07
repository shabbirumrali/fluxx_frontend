import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import FloatingLabel from "react-bootstrap-floating-label";
import Auth from "../Auth";
import Register from "../Auth/Register";

const Header = (props) => {
  const { toggle, className, modal } = props;
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      {/* -----------------------SBR-------------------------------- */}  
      {/* <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="px-4">        
        <Navbar.Brand href="/"><h4>fluxx</h4></Navbar.Brand>                
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/" className="px-4">why fLuxx?</Nav.Link>
                <Nav.Link href="/" className="px-4">Blog</Nav.Link>
                <Nav.Link href="/" className="px-4">Contact</Nav.Link>
            </Nav>
            <Nav>                        
                <Nav.Link eventKey={2} href="#memes">
                  <Button variant="black" onClick={handleShow}>
                    Sign In
                  </Button>                          
                </Nav.Link>                      
            </Nav>                                    
        </Navbar.Collapse>                                
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>fluxx.</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <Container fluid="md" className="signin_color mx-0">
            <Row className="py-3">
              <Col className="sign_in_fluxx py-1"><p className="m-0"> Sign in to Fluxx. </p></Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className="py-1">
                <Form>
                  <FloatingLabel type="email" label="Email: " className="my-3" />
                  <FloatingLabel type="password" label="Password: " className="my-3" />
                  <p className="text-right"><a href="" style={{color: "#5aa380", textDecoration: "none"}}>I forgot my password.</a></p>
                  <Button className="form_btn py-3 mb-3" size="lg" block style={{background:"#5aa380", color: "#efefef", border: "none"}} type="submit">
                    SIGN IN
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>

        </Modal.Body>
        <Modal.Footer className="justify-content-center model_footer">
          <p className="py-2">Don’t have an account? <a href="">Create a free account</a></p>
        </Modal.Footer>
      </Modal> */}

      {/* -----------------------SBR-------------------------------- */}

      <nav className="navbar navbar-expand-lg navbar-light bg-white p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            FLUXX
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-3 align-self-center">
                <a
                  className="nav-link active h6 m-0"
                  aria-current="page"
                  href="index.html"
                >
                  Why Fluxx ?
                </a>
              </li>
              <li className="nav-item px-3">              
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
              <li className="nav-item px-3">               
                  <Link to="/contactus" className="nav-link">Contact</Link>
              </li>
              {
              localStorage.getItem('email') !== '' ?
                <li className="nav-item px-3">               
                    <Link to="/members" className="nav-link">Members</Link>
                </li>
              :null
            }  
             {
              localStorage.getItem('email') !== '' ?
                <li className="nav-item px-3">               
                    <Link to="#" className="nav-link" onClick={() => {
                          localStorage.setItem('token','');
                          localStorage.setItem('email','');
                          window.location.href = "/";
                        }}>Logout</Link>
                </li>
               :null
              }   
              
            </ul>
            {
              localStorage.getItem('email') !== '' ?
                <div class="dropdown align-right ml-auto">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {localStorage.getItem('email')}
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="#" class="dropdown-item" href="#">Logout</Link>                 
                  </div>
                </div>
              :
              <button type="button" className="btn ml-auto" onClick={toggle}>
                Sign In
              </button>

            }
            

            
            <Auth toggle={toggle} className={className} modal={modal} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
