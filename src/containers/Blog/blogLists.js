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
import moment from 'moment';
import * as actions from "../../store/actions/index";
import { connect, useDispatch } from "react-redux";
import BlogImage from '../../assets/img/blogImg/image1.jpg';

const BlogLists = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {   
        dispatch(actions.fetchPosts());      
       dispatch(actions.fetchcategoryposts(props.match.params.id));        
    },[]);
    const removeHTML = (str) => { 
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
      }
      const fetchpostdetail = value  => () => { 
        console.log(value)
          history.push({
            pathname: "/blog/"+value.id, 
            state: { blogdetail: value}
          });
      }

    console.log(props.match.params.id);
    console.log(props.location.state);
    return (
        <Container fluid>
            <Row className="blogpost-header-container">
                <Col className="blogpost-header">
                    <div className="blog_list_header">
                        <h1>{props.location.state ?props.location.state[0].categoryname:""}</h1>
                        <p>{props.location.state ?props.location.state[0].categorydata.category_description:""}</p>
                    </div>
                    
                </Col>
            </Row>

        <Row className="blogContainer">
            <Col sm={8} className="blog-divesion-section1">
                
            {
                props.location.state?
                props.location.state.map((post,index) =>{
                return (
                    <>

                <div className="blog-list-figure blog-list-viewall" key={index}>
                <Image src={post.data.image[0]} />
                    <div className="blog-list-content">
                        <span>{post.categoryname}</span>
                        <h2>{post.data.postdata.post_title.substr(0,50)} </h2>
                        <p>{removeHTML(post.data.postdata.post_content).substr(0,250)}</p>
                        <div className="blog-list-auther-name">
                            <p>{post.data.postdata.post_author} |</p>
                            <span>| {moment(post.data.postdata.post_date).fromNow()}</span>
                        </div>
                    </div>
                </div>
                </>)
                })
                :null
                }
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
                    <Link to={`/blog/${post.id}`} >
                        <div className="sidebox-readon">
                        <div className="readon-tag d-flex">
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
};

const mapStateToProps = (state) => {
    return {
         setpostData:state.auth.postdata,
         setcategoryData:state.auth.categorypostdetail,    
    };
 };
 export default connect(mapStateToProps,null)(BlogLists);
