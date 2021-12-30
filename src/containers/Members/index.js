import React, { useState, useEffect, useCallback } from "react";
import { FormGroup, Label } from "reactstrap";
import { Container, Row, Col, Button, Image, OverlayTrigger, Popover, Modal, Form } from "react-bootstrap";
import Folder from '../../assets/img/folder.png';
import More from '../../more.svg';
import Document from '../../assets/img/file-empty-icon.png';
import folderDoc from '../../assets/img/iconfolder.svg';
import { Link, Router, useHistory, Redirect } from "react-router-dom";
import axios from 'axios';
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../store/actions/index";
import moment from 'moment';
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";
import { default as data } from "./MOCK_DATA.json";
import appConfig from "./../../config";
import SetAuthToken from "../../setAuthToken";

const Members = (props) => {

  console.log(props);
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated =  SetAuthToken();
  if(isAuthenticated == false){
    history.push("/");
  }


  const { register, errors, handleSubmit, renameSubmit, reset } = useForm();
  const { className, toggle, modal } = props;
  const [responseData, setResponseData] = useState(true);
  const [categoryData, setcategoryData] = useState(true);
  const [singleCharterData, setCharterData] = useState(true);
  const [pageOfItems, setpageOfItems] = useState(true);
  const onSubmit = async (data) => {
    if (data.foldername != undefined) {
      dispatch(actions.createfolder(data));
      handleCloseFolder();
    }
    if (data.newchartername != undefined) {
      dispatch(actions.renamecharter(data, selectedcharterid.id));
      handleClose();
    }
    if (Object.keys(data).length == 0) {
      dispatch(actions.deleteCharter(data, selectedcharterid.id));
      handleClose3();
    }
    if (data.selectCat != undefined) {
      dispatch(actions.moveCharter(data, selectedcharterid));
      handleClose2();
    }
    if (data.deletefolder != undefined) {
        dispatch(actions.deleteFolder(data, selectedfolderid.id));
        handleClose4();
        dispatch(actions.categoryList());
    }
    if (data.newfoldername != undefined) {
        dispatch(actions.renameFolder(data, selectedfolderid.id));
        handleClose5();
        dispatch(actions.categoryList());
    }
    reset();
  };

  useEffect(() => {
  
    dispatch(actions.charterlist());
    dispatch(actions.categoryList());
  }, []);

  const [folder, setFolder] = useState(false)
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [showpopover, setpopover] = useState(true)
  const [showpopover1, setpopover1] = useState(true)
  const handleCloseFolder = () => setFolder(false)
  const handleClose = () => setShow(false)
  const handleClose2 = () => setShow2(false)
  const handleClose3 = () => setShow3(false)
  const handleClose4 = () => setShow4(false)
  const handleClose5 = () => setShow5(false)
  const handleShowFolder = () => setFolder(true)
  const handleShow = () => {
    setShow(true)
    setShow2(false);
    setShow3(false);
    setpopover(false)
    setShow4(false)
    setShow5(false)
  }
  const handleShow2 = () => {
    setShow2(true)
    setShow(false)
    setShow3(false)
    setpopover(false)
    setShow4(false)
    setShow5(false)
  }
  const handleShow3 = () => {
    setShow3(true)
    setShow(false)
    setShow2(false)
    setpopover(false)
    setShow4(false)
    setShow5(false)
  }
  const handleShow4 = () => {
    setpopover(false)
    setShow5(false)
    setShow4(true)
    setShow3(false);
    setShow2(false);
    setShow(false)
  }
  const handleShow5 = () => {
    setpopover(false)
    setShow5(true)
    setShow4(false)
    setShow3(false);
    setShow2(false);
    setShow(false)
  }

  const [selectedcharterid, chartedId] = useState(true);
  const [selectedfolderid, folderId] = useState(true);
  const fetchcharter = value => () => {
    fetchDetail(value)
  }
  const fetchcategoryProjects = value => () => {
    history.push({
      pathname: "/members/" + value,
      state: { catlist: categoryData }
    });
  }
  const fetchDetail = useCallback((value) => {
    axios({
      "method": "GET",
      "url": appConfig.config().baseUrl + "/fetchcharter/" + value,
      "headers": {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response.data);
        history.push({
          pathname: "/cmain",
          state: { detail: response.data.charterlist }
        });
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // refresh the page if folder delete
  const popover1 = (
    <Popover isOpen={showpopover1} className="pop_over" >
      <Popover.Content className="demo-pop">
        <div className="options" onClick={handleShow5}>
          <i className="fa fa-i-cursor" aria-hidden="true"></i>
          <p>Rename</p>
        </div>
        <div className="options" onClick={handleShow4}>
          <i className="fa fa-times" aria-hidden="true"></i>
          <p>Delete</p>
        </div>
      </Popover.Content>
    </Popover>
  );
  const popover = (          
      <Popover isOpen={showpopover} >
        <Popover.Content className="demo-pop">
          <div className="options" onClick={handleShow}>
            <i className="fa fa-i-cursor" aria-hidden="true"></i>
            <p>Rename</p>
          </div>
          <div className="options" onClick={handleShow2}>
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            <p>Move To</p>
          </div>
          <div className="options" onClick={handleShow3}>
            <i className="fa fa-times" aria-hidden="true"></i>
            <p>Delete</p>
          </div>
        </Popover.Content>
      </Popover>    
  );

  return (
    <Container className="members_container">
      <h2>My Project Charters</h2>
      <Row className="project_charter">
        <Col sm={6} xs={12} md={6} lg={6} className="myproject_charter">
          <div className="charter_leftsection">
            <h6>My Project Charters</h6>
            <Image width={34} height={34} className=""
              src={Folder} alt="Create new folder" onClick={handleShowFolder}
              style={{ cursor: "pointer" }}
            />
          </div>
        </Col>
        {/* Button */}
        <Col sm={6} xs={12} md={6} lg={6} className="create_charter_btn_container">
          <div className="create_charter_right_btn">
            <Link to="/clanding" className="create_charter_btn">
              Create New Charter
            </Link>
          </div>
        </Col>
      </Row>
      {
        props.setcategoryData ?
          props.setcategoryData.categoryList.map((list, index) => {
            return (
              <Row key={index}>
                <Col className="personal_charters">
                  <div className="personal_charters_subparts">
                    <div className="personal_charter_imgsection">
                      <Image src={folderDoc} width={36} alt="folder" />
                    </div>
                    <p className="personal_charter_name" style={{ color: "#5aa380", cursor: "pointer" }} onClick={fetchcategoryProjects(list.id)} >{list.categoryname}</p>
                    <div className="last_modified_unit">
                      <p>Last Modified: {moment(list.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
                      <OverlayTrigger trigger="click" placement="left" overlay={popover1} rootClose>                      
                        <i className="fa fa-ellipsis-v ellipsis" aria-hidden="true" onClick={() => folderId(list)}></i>
                        {/* <Image src={More} width={20} height={20} className="my-auto mr-3 ml-5" alt="Folder image" onClick={() => folderId(list)} /> */}
                      </OverlayTrigger>
                    </div>
                  </div>
                </Col>
              </Row>
            )
          }) : null}
      {
        props.setResponseData ? props.setResponseData.charterlist.length > 0 ?
         props.setResponseData.charterlist.map((list, index) => {
            if (list.assignCat == 0) {
              return (
                <Row key={index}>
                  <Col className="personal_charters">
                    <div className="personal_charters_subparts">
                      <div className="personal_charter_imgsection">
                        <Image src={Document} width={36} alt="document" />
                      </div>
                      <p className="personal_charter_name" style={{ color: "#5aa380", cursor: "pointer" }} onClick={fetchcharter(list.name)} >{list.name}</p>

                      <div className="last_modified_unit">
                        <p>Last Modified: {moment(list.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>                        
                        <OverlayTrigger trigger="click" placement="left" overlay={popover} rootClose>
                          <i className="fa fa-ellipsis-v" aria-hidden="true" onClick={() => chartedId(list)}></i>
                        </OverlayTrigger>

                      </div>
                    </div>
                  </Col>
                </Row>
              )
            }
          }) : null : null
        }
      {/* ---------------------------MODEL-------------------------------- */}

      {/* Modals for create folder */}
      <Modal show={folder} onHide={handleCloseFolder} centered>
        <Modal.Header className="modal_header_section" closeButton>
          <Modal.Title className="modal_title_section">Create folder</Modal.Title>
        </Modal.Header>
        <Modal.Body clasName="modal_body_section">
          <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormGroup className="modal_form_content">
              <Label htmlFor>Folder Name</Label>
              <input type="text" ref={register({ required: true })} name="foldername" />
              {errors.foldername && (
                <span className="errorMessage"> Please enter a foldername </span>
              )}
            </FormGroup>
            <div className="modal_btn_section_create_folder">
              <Button className="modal_trigger_btn" type="submit"> Create Folder </Button>
              <Button onClick={handleCloseFolder} className="modal_cancel_btn" variant="light" type="submit" > Cancel </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modals for rename */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="modal_header_section" closeButton>
          <Modal.Title className="modal_title_section">
            Rename {selectedcharterid.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body clasName="modal_body_section">
          <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormGroup className="modal_form_content">
              <Label htmlFor>New File Name</Label>
              <input type="text" ref={register({ required: true })} name="newchartername" />
              {errors.newchartername && (
                <span className="errorMessage"> Please enter a Document name </span>
              )}
            </FormGroup>
            <div className="modal_btn_section">
              <Button className="modal_trigger_btn" type="submit">Rename</Button>
              <Button className="modal_cancel_btn" onClick={handleClose} variant="light" >Cancel</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modals for move to */}
      <Modal show={show2} onHide={handleClose2} centered>
        <Modal.Header className="modal_header_section" closeButton>
          <Modal.Title className="modal_title_section">Move Item</Modal.Title>
        </Modal.Header>
        <Modal.Body clasName="modal_body_section">
          <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormGroup className="modal_form_content">
              <Label htmlFor>Where would you like to move <span>"{selectedcharterid.name}"</span> ?</Label>
              <select className="form-control" name="selectCat" ref={register({ required: true })}>
                {props.setcategoryData ? props.setcategoryData.categoryList.map((list, index) => {
                  return (
                    <option key={index} value={list.id}>{list.categoryname}</option>)
                }) : null}
              </select>
            </FormGroup>
            <div className="modal_btn_section">
              <Button className="modal_trigger_btn" type="submit">Submit </Button>
              <Button className="modal_cancel_btn" onClick={handleClose2} variant="light" >CANCEL</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modals for Delete */}
      <Modal show={show3} onHide={handleClose3} centered>
        <Modal.Header className="modal_header_section" closeButton>
          <Modal.Title className="modal_title_section">Delete {selectedcharterid.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body clasName="modal_body_section">
          <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* form tag if needed */}
            <div className="modal_delete_msg">
              <p>Are you sure you want to delete <span>"{selectedcharterid.name}" ?</span></p>
            </div>
            <div className="modal_btn_section">
              <Button className="modal_trigger_btn" type="submit">Delete</Button>
              <Button className="modal_cancel_btn" onClick={handleClose3} variant="light">Cancel</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modals for rename folder */}
      <Modal show={show5} onHide={handleClose5} centered>
        <Modal.Header className="modal_header_section" closeButton>
          <Modal.Title className="modal_title_section">
            Rename Folder
          </Modal.Title>
        </Modal.Header>
        <Modal.Body clasName="modal_body_section">
          <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormGroup className="modal_form_content">
              <Label htmlFor>New Folder Name</Label>
              <input type="text" ref={register({ required: true })} name="newfoldername" />
              {errors.newchartername && (
                <span className="errorMessage"> Please enter a Document name </span>
              )}
            </FormGroup>
            <input type="hidden" ref={register({ required: true })}  name="folderId" value={selectedfolderid.id} />
            <div className="modal_btn_section">
              <Button className="modal_trigger_btn" type="submit">Rename</Button>
              <Button className="modal_cancel_btn" onClick={handleClose5} variant="light" >Cancel</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modals for Delete folder */}
      <Modal show={show4} onHide={handleClose4} centered>
        <Modal.Header className="modal_header_section" closeButton>
          <Modal.Title className="modal_title_section">Delete  {selectedfolderid.categoryname} ?</Modal.Title>
        </Modal.Header>
        <Modal.Body clasName="modal_body_section">
          <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <input type="hidden" ref={register({ required: true })} name="deletefolder" value={selectedfolderid.id} />
            <div className="modal_btn_section">
              <Button className="modal_trigger_btn" type="submit"> Delete </Button>
              <Button className="modal_cancel_btn" onClick={handleClose4} variant="light" > Cancel </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

    </Container>
  )
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    setResponseData: state.auth.data,
    setcategoryData: state.auth.newdata,
    setfolderData: state.auth.folderdata,
    setrenameData: state.auth.renamedata
  };
};
export default connect(mapStateToProps, null)(Members);