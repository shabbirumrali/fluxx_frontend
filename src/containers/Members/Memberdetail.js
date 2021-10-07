import React, { useState, useEffect, useCallback } from "react";
import { FormGroup, Label } from "reactstrap";
import { Container, Row, Col, Button, Image, OverlayTrigger, Popover, Modal, Form } from "react-bootstrap";
import Folder from '../../assets/img/folder.png';
import More from '../../more.svg';
import Document from '../../assets/img/file-empty-icon.png';
import folderDoc from '../../assets/img/iconfolder.svg';
import { Link, Router, useHistory, Redirect, useParams } from "react-router-dom";
import axios from 'axios';
import { connect, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as actions from "../../store/actions/index";

import moment from 'moment';
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";
import { default as data } from "./MOCK_DATA.json";

import appConfig from "./../../config";

const Members = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit, renameSubmit, reset } = useForm();
  const { className, toggle, modal } = props;
  const [responseData, setResponseDatadetail] = useState(true);
  const [categoryData, setcategoryData] = useState(true);
  const [singleCharterData, setCharterData] = useState(true);
  const [pageOfItems, setpageOfItems] = useState(true);
  const [selectedcharterid, chartedId] = useState(true);
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
      dispatch(actions.deleteCharter(data, selectedcharterid.projectId));
      setTimeout(function(){  dispatch(actions.fetchcategoryProjects(window.location.pathname.split("/").pop()));
      }, 2000);
      handleClose3();
    }
    if (data.selectCat == "uncategorized") {
      console.log(selectedcharterid);
      let currentCat = window.location.pathname.split("/").pop();
      data.currentCategory = currentCat;
      dispatch(actions.moveCharter(data, selectedcharterid));
      handleClose2();
    }
    if (Object.keys(data).length >0) {
      dispatch(actions.moveCharter(data, selectedcharterid));
      handleClose2();
    }
    reset();
  };
  console.log(selectedcharterid);
  const fetchcharterdetail = value => () => {
    console.log(value);
    fetchcDetail(value)
  }
  const fetchcDetail = useCallback((value) => {
    axios({
      "method": "GET",
      "url": appConfig.config().baseUrl + "/fetchcharter/" + value,
      "headers": {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        //console.log(response.data);
        history.push({
          pathname: "/cmain",
          state: { detail: response.data.charterlist }
        });
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    dispatch(actions.fetchcategoryProjects(window.location.pathname.split("/").pop()));
    dispatch(actions.categoryList());
    //setcategoryData(props.location.state.catlist);
  }, [])

  const [folder, setFolder] = useState(false)
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [showpopover, setpopover] = useState(true)
  const handleCloseFolder = () => setFolder(false)
  const handleClose = () => setShow(false)
  const handleClose2 = () => setShow2(false)
  const handleClose3 = () => setShow3(false)
  const handleShowFolder = () => setFolder(true)
  const handleShow = () => {
    setShow(true);
    setShow2(false);
    setShow3(false);
    setpopover(false);
  }
  const handleShow2 = () => {
    setShow2(true);
    setShow(false);
    setShow3(false);
    setpopover(false);
  }
  const handleShow3 = () => {
    setShow3(true);
    setShow(false);
    setShow2(false);
    setpopover(false);
  }
  console.log(props);
  console.log(setCharterData);
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
  console.log(props);
  let [page, setPage] = useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(props.setResponseDatadetail ? props.setResponseDatadetail.categoryList[0].CategoryProjects.length / PER_PAGE : 0);
  const _DATA = usePagination(props.setResponseDatadetail ? props.setResponseDatadetail.categoryList[0].CategoryProjects : [], PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      <Container className="members_folder_container">
        <h2>{props.setResponseDatadetail ? props.setResponseDatadetail.categoryList[0].categoryname : ""}</h2>
        
        

        {props.setResponseDatadetail ? props.setResponseDatadetail.categoryList[0].CategoryProjects.length > 0 ?
          _DATA.currentData().map((list, index) => {
            return (
              <Row key={index} className="my-5">
                <Col className="personal_charters">
                  <div className="personal_charters_subparts">
                    <div className="personal_charter_imgsection">
                      <Image src={Document} width={36} alt="document" />
                    </div>
                    <p className="personal_charter_name" onClick={fetchcharterdetail(list.projectname)}>{list.projectname}</p>

                    <div className="last_modified_unit">
                      <p className="my-auto">Last Modified: {moment(list.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
                      <OverlayTrigger trigger="click" placement="left" overlay={popover} rootClose>
                        <i className="fa fa-ellipsis-v" aria-hidden="true" onClick={() => chartedId(list)} id={list.projectId}></i>
                      </OverlayTrigger>
                    </div>
                  </div>
                </Col>
              </Row>
            )
          }) : <div className="members_empty_folder">
                <div className="members_empty_folder_inside">
                  <p>This folder is empty.</p>
                  <Link to="/members"><Button className="modal_cancel_btn" variant="light" type="submit"> Back </Button></Link>
                </div>
              </div> 

       : null}
        {
          props.setResponseDatadetail ? props.setResponseDatadetail.categoryList[0].CategoryProjects.length > 0 ?
            <Pagination className="pagination_section" count={count}
              size="large" page={page} variant="outlined" shape="rounded" onChange={handleChange}
            />
             : null

             : null

         }



        {/* ---------------------------MODEL-------------------------------- */}

        {/* Modals for rename */}
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className="modal_header_section" closeButton>
            <Modal.Title className="modal_title_section">Rename {selectedcharterid.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body clasName="modal_body_section">
            <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <FormGroup className="modal_form_content">
                <Label htmlFor>New File Name</Label>
                <input type="text" ref={register({ required: true })} name="newchartername" />
                {errors.newchartername && (<span className="errorMessage"> Please enter a Document name </span>)}
              </FormGroup>
              <div className="modal_btn_section">
                <Button className="modal_trigger_btn" type="submit" > Rename </Button>
                <Button onClick={handleClose} className="modal_cancel_btn" variant="light" > Cancel </Button>
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
                <Label htmlFor>Choose Folder</Label>
                <select className="form-control" name="selectCat" ref={register({ required: true })} >
                  <option value='uncategorized'>root</option>
                  {props.setcategoryData ? props.setcategoryData.categoryList.map((list, index) => {
                    return (
                      <option key={index} value={list.id}>{list.categoryname}</option>
                    )
                  }) : null}
                </select>
              </FormGroup>
              <div className="modal_btn_section">
                <Button className="modal_trigger_btn" type="submit"> Submit </Button>
                <Button onClick={handleClose2} className="modal_cancel_btn" variant="light"  >Cancel </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Modals for Delete */}
        <Modal show={show3} onHide={handleClose3} centered>
          <Modal.Header className="modal_header_section" closeButton>
            <Modal.Title className="modal_title_section">Delete document name</Modal.Title>
          </Modal.Header>
          <Modal.Body clasName="modal_body_section">
            <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="modal_delete_msg">
                <p>Are you sure you want to delete <span>{selectedcharterid.projectname} ?</span></p>
              </div>
              <div className="modal_btn_section">
                <Button className="modal_trigger_btn" type="submit"> Delete </Button>
                <Button onClick={handleClose3} className="modal_cancel_btn" variant="light" > Cancel </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </Container >
    </>)
};
const mapStateToProps = (state) => {
  return {
    setResponseDatadetail: state.charter.data,
    setcategoryData: state.auth.newdata,
  };
};

export default connect(mapStateToProps, null)(Members);