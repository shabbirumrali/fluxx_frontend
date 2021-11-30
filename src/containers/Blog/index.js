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

const Blog = (props) => {
   const dispatch = useDispatch();
   const history = useHistory();
   const [data, setData] = useState(props.setpostData);

   useEffect(() => {
    dispatch(actions.fetchPosts());    
    dispatch(actions.fetchcategoryposts('deal'));
    dispatch(actions.fetchothercategoryposts('most-searched'));
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
     <Container fluid>
        <Row>
          <Col className='main-col-section'>
            <div className='blog-inside-section1'>
              <div className='divider-blog'>
                {
                  props.setpostData ?
                  props.setpostData.length > 0 ?  
                  props.setpostData.slice(0,1).map((post,index) => {                    
                    return (                      
                      <a href="#" onClick={fetchpostdetail(post)}><Image src={post._embedded['wp:featuredmedia']['0'].source_url} />
                        <div className='big-blog-contain'>
                          <span>{post.title.rendered}</span>
                          <h3>{removeHTML(post.content.rendered).substr(0,250)}</h3>
                          <h5>{}</h5>
                        </div>
                      </a>                      
                    );
                  }) : null : null
                }                   
              </div>
            </div>
            {/* Section 2 */}
            <div className='blog-inside-section2'>
              <div className='divider-blog'>
                {
                  props.setpostData ?
                  props.setpostData.length > 0 ?  
                  props.setpostData.slice(0,2).map((post,index) => {                    
                    return (
                      <a href="#" onClick={fetchpostdetail(post)}>
                        <Image src={post._embedded['wp:featuredmedia']['0'].source_url} />
                        <div className='big-blog-contain'>
                          <span>{post.title.rendered}</span>
                          <h3>{removeHTML(post.content.rendered).substr(0,250)}</h3>
                          <h5>{post._embedded.author[0].name}</h5>
                        </div>
                      </a>
                    );
                  }) : null : null
                }
              </div>              
            </div>

            {/* Section 3 */}
            <div className='blog-inside-section3'>
              <div className='divider-blog'>
                {
                  props.setpostData ?
                  props.setpostData.length > 0 ?  
                  props.setpostData.slice(0,2).map((post,index) => {
                    return (
                      <a href="#" onClick={fetchpostdetail(post)} key={index}>
                        <Image src={post._embedded['wp:featuredmedia']['0'].source_url} />
                        <div className='big-blog-contain'>
                          <span>{post.title.rendered}</span>
                          <h3>{removeHTML(post.content.rendered).substr(0,250)}</h3>
                          <h5>{post._embedded.author[0].name}</h5>
                        </div>
                      </a>
                    );
                  }) : null : null 
                }
              </div>
            </div>
          </Col>
        </Row>

        {/* Deal Of The Day Section */}
        <>
          <Col className="blog_content_section">
            {/*section - Deal of the day */}
            <div className="deal_day">
                <h2>Deal of the Day</h2>
                <Link  to={{pathname:"/bloglist/"+'deal' }}>View All</Link>
            </div>
          </Col>

          {/* blog Content section */}
          <Col className='blog_sub_sections'>
            <div className="divider-blog">              
              {
                props.setcategoryData ?
                props.setcategoryData.length > 0 ? 
                props.setcategoryData.slice(0,3).map((catpost,index) =>{
                  return (                      
                    <a href="#" onClick={fetchpostdetail(catpost)} className="blog_divider_subsection">
                      <Image src={BlogImage} />
                      <div className='big_blog_contain'>
                        {/* <span>{catpost.title.rendered}</span> */}
                        <h3>{removeHTML(catpost.content.rendered).substr(0,100)} </h3>
                        <p>Check out the best deals of the day for {moment(catpost.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                      </div>
                    </a>
                  )
                }) : null : null  
              }             
            </div>
          </Col>
        </>

        <>
          <Col className="blog_content_section">
            {/*section - Most Searched */}
            <div className="deal_day">
                <h2>Most Searched</h2>
                
                <Link  to={{pathname:"/bloglist/"+'most-searched' }}>View All</Link>
            </div>
          </Col>
          
          <Col className="blog_sub_sections">
            <div className="divider-blog_most_search divider-blog">
              {
                props.setothercategoryData ?
                props.setothercategoryData.length > 0 ? 
                props.setothercategoryData.slice(0,3).map((catpost,index) =>{
                  return(
                    <a href="#" onClick={fetchpostdetail(catpost)}>
                      <Image src={BlogImage} />
                      <div className='big-blog-contain'>
                        <span>{catpost.title.rendered}</span>
                        <h3>{removeHTML(catpost.content.rendered).substr(0,100)}</h3>
                        <h5>{catpost._embedded.author[0].name}</h5>
                      </div>
                    </a>
                  )
                }) : null : null  
              }
            </div>
          </Col>
        </>
      </Container>
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
