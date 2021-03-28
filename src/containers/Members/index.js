import React, {useState,useEffect,useCallback} from "react";
import {  
  FormGroup,
  Label
} from "reactstrap";
import { Container, Row, Col, Button, Image, OverlayTrigger, Popover, Modal, Form } from "react-bootstrap"
import FloatingLabel from "react-bootstrap-floating-label"
import Folder from '../../folder.svg'
import More from '../../more.svg'
import Document from '../../document.svg'
import { Link, Router } from "react-router-dom";
// import InMember from "./InMember";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../store/actions/index";
import { useHistory, Redirect } from "react-router-dom";
import moment from 'moment';
const Members = (props) => {    
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit,renameSubmit, reset} = useForm();
  const { className, toggle, modal } = props;
  const [responseData, setResponseData] = useState(true);  
  const onSubmit = async (data) => {

    if(data.foldername != undefined){
      dispatch(actions.createfolder(data));
    }else{
      dispatch(actions.renamecharter(data,selectedcharterid));
      //dispatch(actions.charterlist());
     // handleCloseFolder();


    }
     reset();
  };

  useEffect(() => {
    // Update the document title using the browser API
      dispatch(actions.charterlist());
  },[setResponseData, responseData]);
  
  
  const fetchData = useCallback(() => {
    axios({
      "method": "GET",
      "url": "http://localhost:8000/v1/charterlist",
      "headers": {
         'Authorization': `Bearer ${localStorage.getItem('token')}`,
         'Content-Type': 'application/json', 
      }
    })
    .then((response) => {
      console.log(response.data);
      setResponseData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  useEffect(() => {
    fetchData()
  }, [fetchData])

  const [folder, setFolder] = useState(false)
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)

  const handleCloseFolder = () => setFolder(false)
  const handleClose = () => setShow(false)
  const handleClose2 = () => setShow2(false)
  const handleClose3 = () => setShow3(false)

  const handleShowFolder = () => setFolder(true)
  const handleShow = () => setShow(true)
  const handleShow2 = () => setShow2(true)
  const handleShow3 = () => setShow3(true)
  const [selectedcharterid, chartedId] = useState(true);
  
  const popover = (
    <Popover>
      <Popover.Content className="demo-pop p-0"> 
          <div className="rename_option py-2 px-3" onClick={handleShow}>
            <p className="mb-0">Rename</p>
          </div>
          <div className="moveto_option py-2 px-3" onClick={handleShow2}>
            <p className="mb-0">Move To</p>
          </div>
          <div className="delete_option py-2 px-3" onClick={handleShow3}>
            <p className="mb-0">Delete</p>            
          </div>
      </Popover.Content>
    </Popover>
  );
  console.log("---------->"+selectedcharterid);

  return (
    <Container>
      <h2>My Project Charters</h2>
          <Row className="my-3">
            <Col xs lg="6">
              <div className="d-flex">
                <h6>My Project Charters</h6>
                <Image width={34} height={34} className="ml-4" 
                src={Folder} alt="Folder image" onClick={handleShowFolder} 
                style={{cursor: "pointer"}} />
              </div>
            </Col>
{/* Button */}
            <Col>                                      
                <Link to="/clanding" className="nav-link">
                  <Button 
                    name="create a new Charter"
                    className="border-0 px-5 py-3 create-charter-btn" 
                    style={{ background: "#69b791" }}
                    >
                      Create New Charter
                  </Button>
                </Link>                 
              
            </Col>
          </Row>  
          {   responseData.charterlist ?
            responseData.charterlist.map((list,index) => {
              return (<Row className="border-top">
              <Col className="py-3 mt-3">
                <div className="shadow charters" style={{background: "white"}}>
                  <div style={{background: "#f9f9f9"}}>
                    <Image src={Document} width={36} className="m-3" alt="Folder image" />
                  </div>              
                  <p className="pl-3 my-auto font-weight-bold" style={{color: "#5aa380"}}>{list.name}</p>                
                
                  <div className="d-flex ml-auto option_section">
                    <p className="my-auto">Last Modified: {moment(list.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>                  
                    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                      <Image src={More} width={20} height={20} className="my-auto mr-3 ml-5" alt="Folder image" onClick={() => chartedId(list.id)} />
                    </OverlayTrigger>
                  </div>
                </div>              
              </Col>  
          </Row>)

          })
:null
        }
          

      {/* ---------------------------MODEL-------------------------------- */}

      {/* Modals for create folder */}
      <Modal show={folder} onHide={handleCloseFolder}>
        <Modal.Header closeButton>
          <Modal.Title>Create folder</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">          
          <Container>
            <Row>
              <Col className="py-1">
                <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormGroup >
                <Label htmlFor>Folder Name</Label>
                <input
                  type="text"
                  ref={register({
                    required: true})}
                  name="foldername"
                  />
                  {errors.foldername && (
                    <span className="errorMessage">
                      Please enter a foldername
                    </span>
                  )}
              </FormGroup>
             {/* <FloatingLabel type="text" label="foldername" ref={register} name="foldername" className="my-3" />
              {errors.foldername && (
                  <span className="errorMessage">{errors.foldername.message}</span>
                )} */}
              <Button className="py-2 mr-2 mb-3" style={{ background:"#5aa380", color: "#efefef", border: "none" }} type="submit">
                    CREATE FOLDER
                  </Button>
                  <Button 
                  onClick={handleCloseFolder} 
                  className="py-2 mx-2 mb-3" 
                  variant="light" 
                  style={{background:"", color: "", border: "none"}} 
                  type="submit"
                  >
                    CANCEL
                  </Button>
              </Form>
                { /*<Form  >
                  <FloatingLabel type="email" label="New file Name" className="my-3"/>

                  <Button className="py-2 mr-2 mb-3" style={{ background:"#5aa380", color: "#efefef", border: "none" }} type="submit">
                    CREATE FOLDER
                  </Button>
                  <Button 
                  onClick={handleCloseFolder} 
                  className="py-2 mx-2 mb-3" 
                  variant="light" 
                  style={{background:"", color: "", border: "none"}} 
                  type="submit"
                  >
                    CANCEL
                  </Button>
                </Form> */}
              </Col>
            </Row>
          </Container>
        </Modal.Body>        
      </Modal>

      {/* Modals for rename */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rename your Document</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">          
          <Container>
            <Row>
              <Col className="py-1">
                <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <FormGroup >
                <Label htmlFor>New Name</Label>
                <input
                  type="text"
                  ref={register({
                    required: true})}
                  name="newchartername"
                  />
                  {errors.newchartername && (
                    <span className="errorMessage">
                      Please enter a Document name
                    </span>
                  )}
              </FormGroup>

                  <Button 
                  className="py-2 mr-2 mb-3" 
                  style={{ background: "#5aa380", color: "#efefef", border: "none" }} 
                  type="submit"
                  >
                    RENAME
                  </Button>
                  <Button 
                  onClick={handleClose} 
                  className="py-2 mx-2 mb-3" 
                  variant="light" 
                  style={{background:"", color: "", border: "none"}} 
                  type="submit"
                  >
                    CANCEL
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      {/* Modals for move to */}
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>move Item</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">          
          <Container>
            <Row>
              <p>where would you like to move <strong>"My Very First Charter" ?</strong></p>
              <Col className="py-1">
                <p>Create New folder</p>
              </Col>              
                <p>My Project Charter</p>
              <div>
                <p>My Very First Charter</p>
              </div>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      {/* Modals for Delete */}
      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>MOVE HERE</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">          
          <Container>
            <Row>
              <Col className="py-1">
                <Form>    
                  {/* form tag if needed */}
                  <p>Very First Charter Last Modified: December 17, 2020 08:57 PM ET My Very First Charter” ?</p>
                  <Button className="py-2 mr-2 mb-3" style={{background:"#5aa380", color: "#efefef", border: "none"}} type="submit">
                    Delete
                  </Button>
                  <Button className="py-2 mx-2 mb-3" onClick={handleClose3} variant="light" style={{background:"", color: "", border: "none"}} type="submit">
                    CANCEL
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>        
      </Modal>
    </Container>
  )
};

export default Members;