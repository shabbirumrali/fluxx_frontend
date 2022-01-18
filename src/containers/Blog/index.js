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
    dispatch(actions.fetchcategoryposts());
    
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
    const fetchpostdetailnew = value  => () => { 
      console.log(value)
        history.push({
          pathname: "/blog/"+value.ID, 
          state: { blogdetail: value}
        });
    }
    console.log(props.setcategoryData); 

    const getpostdatadetail =  list  =>{

      let content = [];
      for (let i = 0; i < list.length; i++) {
        const item = list[i].data.postdata;
        console.log(item);
        content.push(<a href="#" onClick={fetchpostdetailnew(item)} className="blog_divider_subsection">
               <Image src={list[i].data.image[0]} />
                <div className='big_blog_contain'>
                 <h3>{removeHTML(item.post_content).substr(0,100)} </h3>
                 <p>Check out the best deals of the day for {moment(item.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
               </div>
             </a>);
      }
      return content;
    }
    
    
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
                    return (<>
                        <Image src={post.featured_img_src} />
                        <div className='big-blog-contain'>
                          <span>{post.categoryName}</span>                         
                          <a href="#" onClick={fetchpostdetail(post)}><h3>{removeHTML(post.title).substr(0,250)}</h3>
                          <p>{removeHTML(post.description).substr(0,250)} </p></a> 
                          <h5>{post.authorname}</h5>
                        </div></>                                          
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
                  props.setpostData.slice(1,3).map((post,index) => {                    
                    return (
                      <a href="#" onClick={fetchpostdetail(post)}>
                        <Image src={post.featured_img_src} />
                        <div className='big-blog-contain'>
                           <span>{post.categoryName}</span>                          
                          <h3>{removeHTML(post.title).substr(0,250)}</h3>
                          <h5>{post.authorname}</h5>
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
                  props.setpostData.slice(3,5).map((post,index) => {
                    return (
                      <a href="#" onClick={fetchpostdetail(post)} key={index}>
                        <Image src={post.featured_img_src} />
                        <div className='big-blog-contain'>
                          <span>{post.categoryName}</span>
                          <h3>{removeHTML(post.title).substr(0,250)}</h3>
                          <h5>{post.authorname}</h5>
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
        {
          props.setcategoryData ?
                
                Object.keys(props.setcategoryData).map((catpost,index) =>{
                  return (<><Col className="blog_content_section">
                  {/*section - Deal of the day */}
                    <div className="deal_day">
                      <h2>{catpost}</h2>
                       <Link  to={{pathname:"/bloglist/"+props.setcategoryData[catpost][0].catid,state:props.setcategoryData[catpost]}}>View All</Link>
                     </div>
                    </Col>
                    <Col className='blog_sub_sections'>
                    <div className="divider-blog">              
                      {
                        getpostdatadetail(props.setcategoryData[catpost]).slice(0,3)
                        // props.setcategoryData ?
                        // props.setcategoryData.length > 0 ? 
                        // props.setcategoryData.slice(0,3).map((catpost,index) =>{
                        //   return (                      
                        //     <a href="#" onClick={fetchpostdetail(catpost)} className="blog_divider_subsection">
                        //       <Image src={BlogImage} />
                        //       <div className='big_blog_contain'>
                        //         {/* <span>{catpost.title.rendered}</span> */}
                        //         <h3>{removeHTML(catpost.content.rendered).substr(0,100)} </h3>
                        //         <p>Check out the best deals of the day for {moment(catpost.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                        //       </div>
                        //     </a>
                        //   )
                        // }) : null : null  
                      }             
                    </div>
                  </Col>
                  </>)

                })
                //.forEach(function eachKey(key) { 
              

                  //return (<><Col className="blog_content_section">
                    //{/*section - Deal of the day */}
                      //<div className="deal_day">
                      //<h2>{key}</h2>
                        // <Link  to={{pathname:"/bloglist/"+'deal' }}>View All</Link>
                     //</div>
                    //</Col>
                  //</>)
                //})
                // props.setcategoryData.map((catpost,index) =>{
                //   // console.log(catpost);
                //    return (<> <Col className="blog_content_section">
                //    {/*section - Deal of the day */}
                //    <div className="deal_day">
                //        <h2>Deal of the Day dfgdfgdfgdfgd</h2>
                //        <Link  to={{pathname:"/bloglist/"+'deal' }}>View All</Link>
                //    </div>
                //  </Col></>)
                // })
                
                //  filterObject(props.setcategoryData).map((key,value) =>{
                //    return (<><Col className="blog_content_section">
                //    {/*section - Deal of the day */}
                //    <div className="deal_day">
                //        <h2>{key}</h2>
                //        <Link  to={{pathname:"/bloglist/"+'deal' }}>View All</Link>
                //    </div>
                //  </Col></>)

                //  })
                 
             
          :null 
        }
          

          {/* blog Content section */}
          <Col className='blog_sub_sections'>
            <div className="divider-blog">              
              {
                // props.setcategoryData ?
                // props.setcategoryData.length > 0 ? 
                // props.setcategoryData.slice(0,3).map((catpost,index) =>{
                //   return (                      
                //     <a href="#" onClick={fetchpostdetail(catpost)} className="blog_divider_subsection">
                //       <Image src={BlogImage} />
                //       <div className='big_blog_contain'>
                //         {/* <span>{catpost.title.rendered}</span> */}
                //         <h3>{removeHTML(catpost.content.rendered).substr(0,100)} </h3>
                //         <p>Check out the best deals of the day for {moment(catpost.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                //       </div>
                //     </a>
                //   )
                // }) : null : null  
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
      setothercategoryData:state.auth.categoryotherpostDetail,
      setcategoryName :state.auth.fetchcategoryname,
   };
};
export default connect(mapStateToProps,null)(Blog);
