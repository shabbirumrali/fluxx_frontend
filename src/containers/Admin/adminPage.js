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

  console.log(props);
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

  
  return (
    <Container className="members_container">
      <h2>My AdminPage</h2>
      
    </Container>
  )
};

const mapStateToProps = (state) => {
    console.log(state);
    return {      
      setuserListData: state.auth.userListData
    };
  };
export default connect(mapStateToProps, null)(AdminPage);


