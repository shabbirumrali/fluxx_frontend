import React, {useState,useEffect,useCallback} from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Link, Router, useHistory, Redirect } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { withRouter } from "react-router-dom";

import * as actions from "../../store/actions/index";
import { connect, useDispatch } from "react-redux";
const Blog = (props) => {
   const dispatch = useDispatch();
   const history = useHistory();

   console.log(props);
    
     useEffect(() => { 
        dispatch(actions.fetchPosts());
      },[]);

  return (
     <Container fluid>
        <Row className="center">
          <h2>
            {
              props.setpostData ?
                  props.setpostData.length > 0 ?
                   props.setpostData.map((posts,index) => {
                     return (<><p>{posts.title.rendered}</p></>);
                   })
               :null
               :null  
            }
          </h2>
        </Row>
      </Container>
  );
};
const mapStateToProps = (state) => {
   return {
      setpostData:state.auth.postdata
   };
};
export default connect(mapStateToProps,null)(Blog);
