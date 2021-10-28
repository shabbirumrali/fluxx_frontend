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
import appConfig from "./../../config";
const AdminPage = (props) => {

  

  const dispatch = useDispatch();
  const history = useHistory();

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (token == '') {
      history.push({
        pathname: "/",
      });
    }
  };

  useEffect(() => {
    checkAuthToken();
    dispatch(actions.fetchuserlist());    
  }, []);

  
  return (
    <Container>
      <Row>
        <Col>
          <div className="adminpannel_container">
            <div className="download_csv_btn_container">
              <Button variant="primary" className="download_csv">Download csv</Button>
            </div>
            <div className="adminpannel_table_container">
              <table>
                <tr className="table_header_section">                                 
                  <th>Email</th>
                  <th>On Mailing List (Y/N)</th>
                  <th>Account creation Date</th>
                  <th>Last Login Timestamp (Date/Time)</th>
                  <th>Account Deletion Date</th>
                  <th>Print/Download (at least 1x) (Y/N)</th>
                </tr>
             {

            props.setuserListData ?
            props.setuserListData.userList.length >0 ? 
                props.setuserListData.userList.map((userlst,index) =>{
                  return (<tr className="per_row" key={index}>
                  <td>{userlst.email}</td>
                  <td>{userlst.subscribeUser}</td>
                  <td>{userlst.createdAt}</td>                 
                  <td>{userlst.createdAt}</td>
                  <td>{userlst.createdAt}</td>
                  <td>N</td>
                </tr>)
                })
            :null
            :null
        }

               
                
              </table>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
};

const mapStateToProps = (state) => {
   
    return {      
      setuserListData: state.auth.userlistdata
    };
  };
export default connect(mapStateToProps, null)(AdminPage);


