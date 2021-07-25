import React, {useState,useEffect,useCallback, useLayoutEffect} from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Link, Router, useHistory, Redirect } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import { yupResolver } from "@hookform/resolvers/yup";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions/index";
import { connect, useDispatch } from "react-redux";
import BlogImage from '../../assets/img/blogImg/image1.jpg';
const BlogContent = (props) => {
      const dispatch = useDispatch();
      const history = useHistory();
      const [blogDetail,setblogDetail] = useState(true);

      console.log(props);

      useEffect(() => { 
      
            dispatch(actions.fetchsinglepost(window.location.pathname.split("/").pop()));
        

    },[]);
    const removeHTML = (str) => { 
      var tmp = document.createElement("DIV");
      tmp.innerHTML = str;
      return tmp.textContent || tmp.innerText || "";
    }

    return (
        <Container fluid>
      <Row className="blogpost-header-container">
        <Col className="blogpost-header">
          <div>
            <h1>{props.setpostDetail ? props.setpostDetail.title.rendered :"" }</h1>
            <p>{props.setpostDetail ? props.setpostDetail.title.rendered :"" }</p>          
          </div>
        </Col>
      </Row>

      <Row className="blogContainer">
        <Col sm={8} className="blog-divesion-section1">

            <div className="blogpost-owener d-flex">
              <div className="blogpost-owner-profile">
                <Image src={props.setpostDetail ? props.setpostDetail._embedded['wp:featuredmedia']['0'].source_url : BlogImage} roundedCircle />
              </div>
              <div className="blogpost-owener-share">
                <p>Lindsey Ellefson</p>
                <p>Monday 12:00PM</p>
              </div>

              <div className="blogpost-share ml-auto">
                <p>Lindsey Ellefson</p>
              </div>
            </div>

            <div className="blogpost-content">
                <Image src={props.setpostDetail ? props.setpostDetail._embedded['wp:featuredmedia']['0'].source_url : BlogImage} />
              <span>Photo: Brandon Crawford (Shutterstock)</span>

              <div className="blogpost-postcontent">
                <p>{props.setpostDetail ? removeHTML(props.setpostDetail.content.rendered) :"" }</p>
              </div>

              

            </div>
        </Col>
        <Col sm={4} className="blog-divesion-section2">
          <div>
            <h6>MORE FROM G/O MEDIA</h6>

            <div className="sidebox-readon">
              <div className="readon-tag d-flex">
                <p>read on</p><span>sdfsdf</span>
              </div>
                <h6> Terminator 2's Famous Kitchen Scene Was More Complicated Than You Thought </h6>
            </div>

            <div className="sidebox-readon">
              <div className="readon-tag d-flex">
                <p>read on</p><span>sdfsdf</span>
              </div>
                <h6> Terminator 2's Famous Kitchen Scene Was More Complicated Than You Thought </h6>
            </div>

            <div className="sidebox-readon">
              <div className="readon-tag d-flex">
                <p>read on</p><span>sdfsdf</span>
              </div>
                <h6> Terminator 2's Famous Kitchen Scene Was More Complicated Than You Thought </h6>
            </div>

            <div className="sidebox-readon">
              <div className="readon-tag d-flex">
                <p>read on</p><span>sdfsdf</span>
              </div>
                <h6> Terminator 2's Famous Kitchen Scene Was More Complicated Than You Thought </h6>
            </div>
            <hr />
          </div>
        </Col>
      </Row>
    </Container>
    )
}

const mapStateToProps = (state) => { 
     return {
        setpostDetail:state.auth.postdetail
     };
};
export default connect(mapStateToProps,null)(BlogContent);