import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {Nav, Navbar, Button, NavDropdown} from 'react-bootstrap'
import Auth from "../Auth";

const Header = (props) => {
  const { toggle, className, modal } = props;
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const location = useLocation();
console.log(location.pathname);

  return (
    <>
      {/* -----------------------SBR-------------------------------- */}
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="px-4 shadow-sm">
        <Navbar.Brand href="/" className="logo"><h4>fluxx.</h4></Navbar.Brand>                
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto landing_page">
              <Link to="/" className={location.pathname === '/' ?
                                             "nav-link active": 
                                             "nav-link"
                                           } >why fluxx?</Link>
              <Link to="/blog" className={location.pathname === '/blog'? "nav-link active" : "nav-link"}>blog</Link>
              <Link to="/contactus" className={location.pathname === '/contactus'? "nav-link active" : "nav-link"}>contact</Link>
              {
              localStorage.getItem('email') !== '' ?
              <Link to="/members" className={location.pathname === '/members'? "nav-link active" : "nav-link"}>members</Link>
              :null
              }
            </Nav>

            {
              localStorage.getItem('email') === '' ?
            <Nav>
                <Nav.Link eventKey={2} href="#">
                  <Button variant="black" onClick={toggle}>
                    sign in
                  </Button>
                </Nav.Link>
            </Nav>
              :null}
            {
              localStorage.getItem('email') !== '' ? 
            <Nav>
              <NavDropdown title={localStorage.getItem('email')} id="basic-nav-dropdown">
                <NavDropdown.Item className="dropdown_items">
                  <Link to="/members">
                    My Project Charters 
                  </Link>  
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdown_items">
                  <Link to="/setting">
                    My Account
                  </Link>
                  </NavDropdown.Item>                  
                <NavDropdown.Divider />
                  <NavDropdown.Item  className="dropdown_items" onClick={() => {
                          localStorage.setItem('token','');
                          localStorage.setItem('email','');
                          window.location.href = "/";
                        }}>Sign Out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
             : null
             }                                   
        </Navbar.Collapse>
      </Navbar>
      <Auth toggle={toggle} className={className} modal={modal} />
    </>
  );
};

export default Header;