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
import moment from 'moment';
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
    const fetchcategoryname = (id) =>{
          dispatch(actions.fetchcategoryname(id));


    }
    console.log(props.setcategoryName);
    
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
                <p>{props.setpostDetail ? props.setpostDetail._embedded.author[0].name:""}</p>
                <span>{moment(props.setpostDetail ? props.setpostDetail.date:"").format("dddd h:mm:ss a")}</span>
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
                    
                        <div className="sidebox-readon">
                        <div className="readon-tag">
                            <p>read on</p>{
                                          
                                          
                            }<span>{post.categoryName}</span>
                        </div>
                        <Link to={`/blog/${post.id}`} onClick={refreshPage}><h6>{post.title.substr(0,50)} </h6>
                            <p> {removeHTML(post.description).substr(0,250)}</p></Link>
                        </div>
                    
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
        setpostDetail:state.auth.postdetail,
        setcategoryName :state.auth.fetchcategoryname,
     };
};
export default connect(mapStateToProps,null)(BlogContent);
