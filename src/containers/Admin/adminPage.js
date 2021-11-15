import React, { useState, useEffect, useCallback } from "react";
import { FormGroup, Label } from "reactstrap";
import { Container, Row, Col, Button, Image, OverlayTrigger, Popover, Modal, Form } from "react-bootstrap";
import Folder from '../../assets/img/folder.png';
import More from '../../more.svg';
import Document from '../../assets/img/file-empty-icon.png';
import folderDoc from '../../assets/img/iconfolder.svg';
import { Link, Router, useHistory, Redirect } from "react-router-dom";
import axios from 'axios';
import { connect, useDispatch,useSelector  } from "react-redux";
import ReactPaginate from 'react-paginate';
import { useForm } from "react-hook-form";
import * as actions from "../../store/actions/index";
import moment from 'moment';
import appConfig from "./../../config";
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";
import { CSVLink, CSVDownload } from "react-csv";
const AdminPage = (props) => {

  

  const dispatch = useDispatch();
  
  const history = useHistory();

 

  useEffect(() => {
 
    dispatch(actions.fetchuserlist());    
  }, []);
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const eventsInfo = useSelector(state => state.auth.userlistdata);
  const count = Math.ceil(eventsInfo ? eventsInfo.userList.length / PER_PAGE:0);
  const data = usePagination(eventsInfo ? eventsInfo.userList:[], PER_PAGE);
  console.log(data.currentData());
  const handleChange = (e, p) => {
     setPage(p);
     data.jump(p);
  };
  const csvData = [];
  const Labels = ["Email","On Mailing List (Y/N)","Account creation Date","Last Login Timestamp","Account Deletion Date","Print/Download (at least 1x) (Y/N)"];
  if(eventsInfo!= undefined){
    csvData.push(Labels);
    eventsInfo.userList.map((user) =>{
       const usedata = [user.email,user.subscribeUser,moment(user.createdAt).format('YYYY-MM-DD HH:mm:ss'),
       moment(user.last_login).format('YYYY-MM-DD HH:mm:ss'),
       moment(user.account_delete_date).format('YYYY-MM-DD HH:mm:ss'),"N"]
       csvData.push(usedata);
    });
  }
  return (
    <Container>
      <Row>
        <Col>
          <div className="adminpannel_container">
            <div className="download_csv_btn_container">
              
              <CSVLink variant="primary" data={csvData} className="download_csv">Download csv</CSVLink>
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

            
              data.currentData().map(v => {
                  
                  return (<tr className="per_row" key={v.id}>
                  <td>{v.email}</td>
                  <td>{v.subscribeUser == true ? "True":"False"}</td>
                  <td>{moment(v.createdAt).format('YYYY-MM-DD HH:mm:ss')}</td>                 
                  <td>{moment(v.last_login).format('YYYY-MM-DD HH:mm:ss') }</td>
                  <td>{moment(v.account_delete_date).format('YYYY-MM-DD HH:mm:ss')}</td>
                  <td>N</td>
                </tr>)
                 })

          
        }

               
                
              </table>
            </div>

            <Pagination
                count={count}
                size="large"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
          </div>
        </Col>
      </Row>
    </Container>
  )
};
export default AdminPage;



