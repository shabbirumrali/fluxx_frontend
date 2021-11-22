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
      
      useEffect(() => { 
            dispatch(actions.fetchPosts());
            dispatch(actions.fetchsinglepost(window.location.pathname.split("/").pop()));            
      },[]);

    const removeHTML = (str) => { 
      var tmp = document.createElement("DIV");
      tmp.innerHTML = str;
      return tmp.textContent || tmp.innerText || "";
    }
    const refreshPage = () => {
     let timeout  =setTimeout(() => {
           window.location.reload(false);
      }, 1000);
      return () => {
         clearTimeout(timeout);
      };
    }
    
    return (
      <Container fluid>
        <Row className="blogpost-header-container">
          <Col className="blogpost-header">
            <div>
              <h1>{props.setpostDetail ? props.setpostDetail.title.rendered :"" }</h1>
              {/* <p>{props.setpostDetail ? props.setpostDetail.title.rendered :"" }</p> */}
            </div>
          </Col>
        </Row>

        <Row className="blogContainer">
          <Col sm={8} className="blog-divesion-section1">
            <div className="blogpost-owener">
              <div className="blogpost-owner-profile">
                <Image src={props.setpostDetail ? props.setpostDetail._embedded['wp:featuredmedia']['0'].source_url : BlogImage} roundedCircle />
              </div>
              <div className="blogpost-owener-share">
                <p>Lindsey Ellefson</p>
                <span>Monday 12:00PM</span>
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
                <h6>You May Also Like</h6>
                {
                props.setpostData ?
                props.setpostData.length > 0 ?  
                props.setpostData.map((post,index) => {
                return (
                    <>
                    <Link to={`/blog/${post.id}`} onClick={refreshPage}>
                        <div className="sidebox-readon">
                        <div className="readon-tag">
                            <p>read on</p><span>sdfsdf</span>
                        </div>
                            <h6>{post.title.rendered.substr(0,50)} </h6>
                            <p>Lenovo's Chromebook Flex is on Amazon. Lenovo's Chromebook Flex is $170 right now on Amazon.</p>
                        </div>
                    </Link>
                    </>
                    );
                }) : null : null }            
            </div>
            </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => { 
     return {
        setpostData:state.auth.postdata,
        setpostDetail:state.auth.postdetail
     };
};
export default connect(mapStateToProps,null)(BlogContent);
