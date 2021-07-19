import React, {useState,useEffect,useCallback} from "react"
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

   console.log(props);
    
     useEffect(() => { 
        dispatch(actions.fetchPosts());
      },[]);

     

  return (
     <><Container fluid>
        <Row>
          <Col className='main-col-section'>
            <div className='blog-inside-section1 font-dec'>
              <div className='divider-blog'>
                <Image src={BlogImage} />
                <div className='big-blog-contain'>
                  <h6 className='my-3'>Health</h6>
                  <h3>This blog you realy want to know so read</h3>
                  <p>
                    Don't remove them with a burned-out match, and other saftey
                    tips you need, this is some stupid text just for fun! I want
                    to increase text to check weather the sections are working
                    correct or not if yes then its pritty awesome if not then we
                    have to thing for something different
                  </p>
                  <h5>Auther Name</h5>
                </div>
              </div>
            </div>

            <div className='blog-inside-section2 font-dec'>
              <div className='divider-blog'>
                <Image src={BlogImage} />
                <div className='big-blog-contain'>
                  <h6 className='my-3'>Health</h6>
                  <h3>This blog you realy want to know so read</h3>
                  <h5>Auther Name</h5>
                </div>
              </div>
              <div className='divider-blog'>
                <Image src={BlogImage} />
                <div className='big-blog-contain'>
                  <h6 className='my-3'>Health</h6>
                  <h3>This blog you realy want to know so read</h3>
                  <h5>Auther Name</h5>
                </div>
              </div>
            </div>

            <div className='blog-inside-section3 font-dec'>
              <div className='divider-blog'>
                <Image src={BlogImage} />
                <div className='big-blog-contain'>
                  <h6 className='my-3'>Health</h6>
                  <h3>This blog you realy want to know so read</h3>
                  <h5>Auther Name</h5>
                </div>
              </div>

              <div className='divider-blog'>
                <Image src={BlogImage} />
                <div className='big-blog-contain'>
                  <h6 className='my-3'>Health</h6>
                  <h3>This blog you realy want to know so read</h3>
                  <h5>Auther Name</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="border-top">
          <Col className='blog-content-section my-3'>
            <div className='blog1 d-flex font-dec'>
              <Image src={BlogImage} />
              <div className='big-blog-contain divider-blog'>
                <h6 className='mb-3'>Health</h6>
                <h3>This blog you realy want to know so read</h3>
                <h5>Auther Name</h5>              
              </div>
            </div>
            <div className='blog2 d-flex font-dec'>
              <Image src={BlogImage} />
              <div className='big-blog-contain divider-blog'>
                <h6 className='mb-3'>Health</h6>
                <h3>This blog you realy want to know so read</h3>
                <h5>Auther Name</h5>              
              </div>
            </div>
            <div className='blog3 d-flex font-dec'>
              <Image src={BlogImage} />
              <div className='big-blog-contain divider-blog'>
                <h6 className='mb-3'>Health</h6>
                <h3>This blog you realy want to know so read</h3>
                <h5>Auther Name</h5>              
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
            <div className='blog1 d-flex font-dec'>
              <Image src={BlogImage} />
              <div className='big-blog-contain divider-blog'>                
                <h3>This blog you realy want to know so read</h3>
                <p>Don't remove them with a burned-out match </p>
              </div>
            </div>
            <div className='blog2 d-flex font-dec'>
              <Image src={BlogImage} />
              <div className='big-blog-contain divider-blog'>                
                <h3>This blog you realy want to know so read</h3>
                <p>Don't remove them with a burned-out match </p>
              </div>
            </div>
            <div className='blog3 d-flex font-dec'>
              <Image src={BlogImage} />
              <div className='big-blog-contain divider-blog'>                
                <h3>This blog you realy want to know so read</h3>
                <p>Don't remove them with a burned-out match </p>
              </div>
            </div>
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
              <div className="vertical-blog-1">
                <Card className="card-detail border-0 font-dec">
                  <Card.Img variant="top" src={BlogImage} />
                  <Card.Body>
                    <div className='big-blog-contain divider-blog'>
                      <h6 className='mb-3'>Health</h6>
                      <h3>This blog you realy want to know so read</h3>
                      <h5>Auther Name</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="vertical-blog-2">
                <Card className="card-detail border-0 font-dec">
                  <Card.Img variant="top" src={BlogImage} />
                  <Card.Body>
                    <div className='big-blog-contain divider-blog'>
                      <h6 className='mb-3'>Health</h6>
                      <h3>This blog you realy want to know so read</h3>
                      <h5>Auther Name</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="vertical-blog-3">
                <Card className="card-detail border-0 font-dec">
                  <Card.Img variant="top" src={BlogImage} />
                  <Card.Body>
                    <div className='big-blog-contain divider-blog'>
                      <h6 className='mb-3'>Health</h6>
                      <h3>This blog you realy want to know so read</h3>
                      <h5>Auther Name</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="vertical-blog-4">
                <Card className="card-detail border-0 font-dec">
                  <Card.Img variant="top" src={BlogImage} />
                  <Card.Body>
                    <div className='big-blog-contain divider-blog'>
                      <h6 className='mb-3'>Health</h6>
                      <h3>This blog you realy want to know so read</h3>
                      <h5>Auther Name</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container></>
  );
};
const mapStateToProps = (state) => {
   return {
      setpostData:state.auth.postdata
   };
};
export default connect(mapStateToProps,null)(Blog);
