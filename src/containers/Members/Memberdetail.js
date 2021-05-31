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
  const [responseData, setResponseDatadetail] = useState(true); 
  const [categoryData,setcategoryData]  = useState(true);
  const [singleCharterData, setCharterData] = useState(true); 
  const [pageOfItems,setpageOfItems] = useState(true);  
  // const onSubmit = async (data) => {
  //   if(data.foldername != undefined){
  //     dispatch(actions.createfolder(data));
  //     handleCloseFolder();

  //   }
  //   if(data.newchartername != undefined){
  //      dispatch(actions.renamecharter(data,selectedcharterid.id));
  //   }
  //   if(Object.keys(data).length == 0){
  //     dispatch(actions.deleteCharter(data,selectedcharterid.id));
  //   }
  //   if(data.selectCat != undefined){
  //     console.log(data.selectCat);
  //      dispatch(actions.moveCharter(data,selectedcharterid.id));
  //      handleClose2();
  //   }
  //    reset();
  // };
  console.log(props);


  useEffect(() => {       
     dispatch(actions.fetchcategoryProjects(props.match.params.memberid));
     fetchcategory()
  },[setResponseDatadetail, responseData]);
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
        setShow(true);
        setShow2(false);
        setShow3(false);
        setpopover(false);
  } 
  const handleShow2 = () =>{
        setShow2(true);
        setShow(false);
        setShow3(false);
        setpopover(false);
  } 
  const handleShow3 = () =>{
        setShow3(true);
        setShow(false);
        setShow2(false);
        setpopover(false);
  } 

  console.log(props);

  
 
  console.log(setCharterData);
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
  const PER_PAGE = 1;  
  const count = Math.ceil(props.setResponseDatadetail ? props.setResponseDatadetail.categoryList[0].CategoryProjects.length/ PER_PAGE:0);
  const _DATA = usePagination(props.setResponseDatadetail.categoryList[0] ? props.setResponseDatadetail.categoryList[0].CategoryProjects :[] , PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  


  return (
    <Container className="members_container mt-4">
      <h2>{props.setResponseDatadetail.categoryList[0] ? props.setResponseDatadetail.categoryList[0].categoryname:""}  Project List</h2>
       { 
        props.setResponseDatadetail.categoryList ?  props.setResponseDatadetail.categoryList[0].CategoryProjects.length >0 ?
          _DATA.currentData().map((list,index) => {
            return (<Row key={index}>
            <Col className="py-4">
              <div className="shadow charters" style={{background: "white"}}>
                <div style={{background: "#f9f9f9"}}>
                  <Image src={Document} width={36} className="m-3" alt="Folder image" />
                </div>              
                <p className="pl-3 my-auto font-weight-bold" style={{color: "#5aa380", cursor: "pointer"}}>{list.projectname}</p>
              
                <div className="d-flex ml-auto option_section">
                  <p className="my-auto">Last Modified: {moment(list.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>                  

                  <OverlayTrigger trigger="click" placement="left" overlay={popover} rootClose>
                    <Image src={More} width={20} height={20} className="my-auto mr-3 ml-5" alt="Folder image"  />
                  </OverlayTrigger>
                </div>
              </div>              
            </Col>  
        </Row>
        )
      }) :null  :null 
 
    }
    { 
       props.setResponseDatadetail.categoryList ?  props.setResponseDatadetail.categoryList[0].CategoryProjects.length >0 ?
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

    </Container>
  )
};
const mapStateToProps = (state) => {
  return {
    setResponseDatadetail: state.charter.data,     
  };
};
export default connect(mapStateToProps)(Members);