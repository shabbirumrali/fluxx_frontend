import React, {useState,useEffect,useCallback} from "react";
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

const Members = (props) => {
    
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit,renameSubmit, reset} = useForm();
  const { className, toggle, modal } = props;
  const [responseData, setResponseData] = useState(true); 
  const [categoryData,setcategoryData]  = useState(true);
  const [singleCharterData, setCharterData] = useState(true); 
  const [pageOfItems,setpageOfItems] = useState(true);  
  const onSubmit = async (data) => {
    if(data.foldername != undefined){
      dispatch(actions.createfolder(data));
      handleCloseFolder();
    }
    if(data.newchartername != undefined){
       dispatch(actions.renamecharter(data,selectedcharterid.id));
    }
    if(Object.keys(data).length == 0){
      dispatch(actions.deleteCharter(data,selectedcharterid.id));
    }
    if(data.selectCat != undefined){
       dispatch(actions.moveCharter(data,selectedcharterid));
       handleClose2();
    }
     reset();
  };
  
  useEffect(() => { 
      dispatch(actions.charterlist());         
      fetchcategory()     
  },[setResponseData, responseData]);
  console.log(props);
  const fetchcategory = useCallback(() => {
    axios({
      "method": "GET",
      "url": "http://localhost:8000/v1/fetchcategory",
      "headers": {
         'Authorization': `Bearer ${localStorage.getItem('token')}`,
         'Content-Type': 'application/json', 
      }
    })
    .then((response) => {
      console.log(response.data);
      setcategoryData(response.data.categoryList);
      
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])   
  const [folder, setFolder] = useState(false)
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [showpopover,setpopover] =useState(true)

  const handleCloseFolder = () => setFolder(false)
  const handleClose = () => setShow(false)
  const handleClose2 = () => setShow2(false)
  const handleClose3 = () => setShow3(false)

  const handleShowFolder = () => setFolder(true)
  const handleShow = () => {
    setShow(true)
    setShow2(false);
    setShow3(false);
    setpopover(false)

  } 
  const handleShow2 = () =>{
        setShow2(true)
        setShow(false)
        setShow3(false)
        setpopover(false)
  } 
  const handleShow3 = () =>{
    setShow3(true)
    setShow(false)
    setShow2(false)
    setpopover(false)
  } 

  const [selectedcharterid, chartedId] = useState(true);
  const fetchcharter = value  => () => {   
        fetchDetail(value)
  }
  const fetchcategoryProjects = value  => () => { 
        history.push({
          pathname: "/members/"+value, 
          state: { catlist: categoryData}
        });
  }
  const fetchDetail = useCallback((value) => {   
    axios({
      "method": "GET",
      "url": "http://localhost:8000/v1/fetchcharter/"+value,
      "headers": {
         'Authorization': `Bearer ${localStorage.getItem('token')}`,
         'Content-Type': 'application/json', 
      }
    })
    .then((response) => {
      //console.log(response.data);
      history.push({
          pathname: "/cmain", 
          state: { detail: response.data.charterlist}
        });

    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
 
  
  const popover = (
    <Popover isOpen = {showpopover} >
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
  let [page, setPage] = useState(1);
  const PER_PAGE = 2;  
  
  const count = Math.ceil(props.setResponseData ? props.setResponseData.charterlist.length/ PER_PAGE:0);
  const _DATA = usePagination(props.setResponseData ? props.setResponseData.charterlist :[] , PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  


  return (
    <Container className="members_container mt-4">
      <h2>My Project Charters</h2>
        <Row className="mt-5 pb-4 border-bottom">
          <Col xs lg="6">
            <div className="d-flex">
              <h6>My Project Charters</h6>
              <Image width={34} height={34} className="ml-4"
                src={Folder} alt="Folder image" onClick={handleShowFolder}
                style={{cursor: "pointer"}}
              />
            </div>
          </Col>
          {/* Button */}
          <Col className="create-charter-div mx-3">
            <Link to="/clanding" className="py-3 create-charter-btn">
              Create New Charter
            </Link>              
          </Col>
        </Row>
    { 
        categoryData ?
          categoryData.length>0?
             categoryData.map((list,index) => {
                 return (<Row key={index}>
                          <Col className="py-4">
                            <div className="shadow charters" style={{background: "white"}}>
                              <div style={{background: "#f9f9f9"}}>
                                <Image src={folderDoc} width={36} className="m-3" alt="Folder image" />
                              </div>              
                              <p className="pl-3 my-auto font-weight-bold" style={{color: "#5aa380", cursor: "pointer"}}  onClick={fetchcategoryProjects(list.id)} >{list. categoryname}</p>
                            
                              <div className="d-flex ml-auto option_section">
                                <p className="my-auto">Last Modified: {moment(list.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>                  

                                <OverlayTrigger trigger="click" placement="left" overlay={popover} rootClose>
                                  <Image src={More} width={20} height={20} className="my-auto mr-3 ml-5" alt="Folder image" onClick={() => chartedId(list)} />
                                </OverlayTrigger>
                              </div>
                            </div>              
                          </Col>  
                      </Row>
                     )
          }) :null  :null
    }   
        { 
        props.setResponseData ?  props.setResponseData.charterlist.length >0 ?
          _DATA.currentData().map((list,index) => {
            return (<Row key={index}>
            <Col className="py-4">
              <div className="shadow charters" style={{background: "white"}}>
                <div style={{background: "#f9f9f9"}}>
                  <Image src={Document} width={36} className="m-3" alt="Folder image" />
                </div>              
                <p className="pl-3 my-auto font-weight-bold" style={{color: "#5aa380", cursor: "pointer"}}  onClick={fetchcharter(list.name)} >{list.name}</p>
              
                <div className="d-flex ml-auto option_section">
                  <p className="my-auto">Last Modified: {moment(list.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>                  

                  <OverlayTrigger trigger="click" placement="left" overlay={popover} rootClose>
                    <Image src={More} width={20} height={20} className="my-auto mr-3 ml-5" alt="Folder image" onClick={() => chartedId(list)} />
                  </OverlayTrigger>
                </div>
              </div>              
            </Col>  
        </Row>
        )
      }) :null  :null 
 
    } 
     { 
        props.setResponseData ?  props.setResponseData.charterlist.length ?
        <Pagination
            className="pagination_section"
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
       :null
       :null
     }


    {/* ---------------------------MODEL-------------------------------- */}

    {/* Modals for create folder */}
      <Modal show={folder} onHide={handleCloseFolder} centered>
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
              </Col>
            </Row>
          </Container>
        </Modal.Body>        
      </Modal>

      {/* Modals for rename */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Rename your Document {selectedcharterid.name}</Modal.Title>
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
      <Modal show={show2} onHide={handleClose2} centered>
        <Modal.Header closeButton>
          <Modal.Title>Move Item {selectedcharterid.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">          
          <Container>
            <Row>
              <Col className="py-1">
                <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <FormGroup >
                  <Label htmlFor>Choose Folder</Label>
                <select className="form-control" name="selectCat" ref={register({
                    required: true})}>
                 {


                  categoryData ?
                  categoryData.length>0?
                  categoryData.map((list,index) => {
                    return (<option key={index} value={list.id}>{list.categoryname}</option>)
                  })
                  :null
                  :null

                 }
                 </select>
              </FormGroup >


                    <Button 
                      className="py-2 mr-2 mb-3" 
                      style={{ background: "#5aa380", color: "#efefef", border: "none" }} 
                      type="submit"
                      >
                        Submit
                      </Button>
                      <Button 
                      onClick={handleClose2} 
                      className="py-2 mx-2 mb-3" 
                      variant="light" 
                      style={{background:"", color: "", border: "none"}} 
                      type="button"
                    >
                      CANCEL
                    </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      {/* Modals for Delete */}
      <Modal show={show3} onHide={handleClose3} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item {selectedcharterid.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">          
          <Container>
            <Row>
              <Col className="py-1">
                <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>    
                  {/* form tag if needed */}
                  <p>Very First Charter Last Modified: December 17, 2020 08:57 PM ET My Very First Charter” ?</p>
                  <Button className="py-2 mr-2 mb-3" style={{background:"#5aa380", color: "#efefef", border: "none"}} type="submit">
                    Delete
                  </Button>
                  <Button className="py-2 mx-2 mb-3" onClick={handleClose3} variant="light" style={{background:"", color: "", border: "none"}} type="button">
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
const mapStateToProps = (state) => {

  return {
    setResponseData: state.auth.data   
  };
};
const mapDispatchToProps = (dispatch) => {
  
  return {};
};

export default connect(mapStateToProps,mapDispatchToProps)(Members);