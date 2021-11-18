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

const Blog = (props) => {
   const dispatch = useDispatch();
   const history = useHistory();
   const [data, setData] = useState(props.setpostData);

   useEffect(() => {
    dispatch(actions.fetchPosts())
    
    dispatch(actions.fetchcategoryposts('deal'))
    dispatch(actions.fetchothercategoryposts('most-searched'))
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
    console.log(props.setpostData); 
  return (
     <><Container fluid>
        <Row>
          <Col className='main-col-section'>
            <div className='blog-inside-section1 font-dec'>
            
               <div className='divider-blog'>
                   <Image src={BlogImage} /> 
               </div>
            </div>

            <div className='blog-inside-section2 font-dec'>
              <div className='divider-blog'>
                    {
                      props.setpostData ?
                      props.setpostData.length > 0 ?  
                      props.setpostData.slice(0,2).map((post,index) => {
                        
                              return (<><a href="#" onClick={fetchpostdetail(post)}><Image src={post._embedded['wp:featuredmedia']['0'].source_url} />
                                  <div className='big-blog-contain'>
                                    <h6 className='my-3'>{post.title.rendered}</h6>
                                    <h3>{removeHTML(post.content.rendered).substr(0,250)}</h3>
                                    <h5>Auther Name</h5>
                                  </div></a>
                                  </>);
                         
                      })
                      :null:null
                    }
              </div>              
            </div>

            <div className='blog-inside-section3 font-dec'>
             <div className='divider-blog'>
                     {
                      props.setpostData ?
                      props.setpostData.length > 0 ?  
                      props.setpostData.slice(0,2).map((post,index) => {
                    return (<><a href="#" onClick={fetchpostdetail(post)}><Image src={post._embedded['wp:featuredmedia']['0'].source_url} />
                            <div className='big-blog-contain'>
                              <h6 className='my-3'>{post.title.rendered}</h6>
                              <h3>{removeHTML(post.content.rendered).substr(0,250)}</h3>
                              <h5>Auther Name</h5>
                            </div></a>
                            </>);
                    })
                      :null:null
                    } 
              </div> 

              
            </div>
          </Col>
        </Row>

       

        <Row>
          <Col className="my-3">
            {/*section - Deal of the day */}   
            <div className="deal-day d-flex justify-content-between border-bottom border-dark align-items-center">
              <header>
                <h2>Deal of the Day</h2>
              </header>
              <a href="" className="text-uppercase text-decoration-none">View All</a>
            </div>
            {/* blog Content section */}
          </Col>          
        </Row>

        <Row>
          <Col className='blog-content-section my-3'>
            {
              props.setcategoryData ?
              props.setcategoryData.length > 0 ? 
              props.setcategoryData.slice(0,3).map((catpost,index) =>{
                    return (<><a href="#" onClick={fetchpostdetail(catpost)}><div className='blog1 d-flex font-dec'>
                      <Image src={BlogImage} />
                      <div className='big-blog-contain divider-blog'>                
                        <h3>{catpost.title.rendered}</h3>
                        <p>{removeHTML(catpost.content.rendered).substr(0,100)} </p>
                      </div>
                    </div></a></>)
              })                        
              :null :null  
             }
            
          </Col>
        </Row>

        <Row>
          <Col className="my-3">
            {/*section - Deal of the day */}   
            <div className="deal-day d-flex justify-content-between border-bottom border-dark align-items-center">
              <header>
                <h2>Most Searched</h2>
              </header>
              <a href="" className="text-uppercase text-decoration-none">View All</a>
            </div>
            {/* blog Content section */}
          </Col>          
        </Row>
        <Row>
          <Col>
            <div className="blog-inside-section4">
              {
              props.setothercategoryData ?
              props.setothercategoryData.length > 0 ? 
              props.setothercategoryData.slice(0,3).map((catpost,index) =>{
                  return(<><a href="#" onClick={fetchpostdetail(catpost)}><div className="vertical-blog-1">
                    <Card className="card-detail border-0 font-dec">
                      <Card.Img variant="top" src={BlogImage} />
                      <Card.Body>
                        <div className='big-blog-contain divider-blog'>
                          <h6 className='mb-3'>{catpost.title.rendered}</h6>
                          <h3>{removeHTML(catpost.content.rendered).substr(0,100)}</h3>
                          <h5>Auther Name</h5>
                        </div>
                      </Card.Body>
                    </Card>
                  </div></a></>)
              })                        
              :null :null  
             }
            </div>
          </Col>
        </Row>
      </Container></>
  );
};
const mapStateToProps = (state) => {
   return {
      setpostData:state.auth.postdata,
      setcategoryData:state.auth.categorypostdetail,
      setothercategoryData:state.auth.categoryotherpostDetail
   };
};
export default connect(mapStateToProps,null)(Blog);
