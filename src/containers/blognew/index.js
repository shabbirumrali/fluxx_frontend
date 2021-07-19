import React from 'react'
import { Col, Container, Row, Image, Card, Form } from 'react-bootstrap'
import BlogImage from '../../assets/img/blogImg/image1.jpg'

const index = () => {
  return (
    <Container fluid>
        <Row className="blogpost-header-container">
          <Col className="blogpost-header">          
            <div className="blog-inside-viewall">
              <div className="vertical-blog-1">
                <Card className="card-detail border-0 font-dec">
                  <Card.Img variant="top" src={BlogImage} />
                  <Card.Body>
                    <div className='big-blog-contain divider-blog'>
                      <h6>Health</h6>
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
                      <h6>Health</h6>
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
                      <h6>Health</h6>
                      <h3>The Best Reason to Keep Whipped Cream in Your Fridge at All Times.</h3>
                      <h5>Auther Name</h5>
                    </div>
                  </Card.Body>
                </Card>
              </div>                
            </div>
          </Col>
        </Row>

        <Row className="blogContainer">
          <Col sm={8} className="blog-divesion-section1">              
            <article className="blog-list-viewall">
              <figure className="blog-list-figure">
                <Image src={BlogImage} />
              </figure>
              <div className="blog-list-content">
                <span>Food &  Drinks </span>
                <h2>The Best Reason to Keep Whipped Cream in Your Fridge at All Times (Besides That One, You Pervert)</h2>
                <div className="blog-post-owener-list d-flex">
                  <Image src={BlogImage} />
                  <div className="blog-list-auther-name">
                    <p>Yesterday 9:00AM</p>
                    <span>Jay Strum</span>                      
                  </div>
                </div>
                <h6 className="py-2">This is a small act of self-indulgence, if not outright self-care.</h6>
              </div>
            </article>

            <article className="blog-list-viewall">
              <figure className="blog-list-figure">
                <Image src={BlogImage} />
              </figure>
              <div className="blog-list-content">
                <span>Food &  Drinks </span>
                <h2>The Best Reason to Keep Whipped Cream in Your Fridge at All Times (Besides That One, You Pervert)</h2>
                <div className="blog-post-owener-list d-flex">
                  <Image src={BlogImage} />
                  <div className="blog-list-auther-name">
                    <p>Yesterday 9:00AM</p>
                    <span className="">Harry Potter</span>                      
                  </div>
                </div>
                <h6 className="py-2">This is a small act of self-indulgence, if not outright self-care.</h6>
              </div>
            </article>

            <article className="blog-list-viewall">
              <figure className="blog-list-figure">
                <Image src={BlogImage} />
              </figure>
              <div className="blog-list-content">
                <span>Food &  Drinks </span>
                <h2>The Best Reason to Keep Whipped Cream in Your Fridge at All Times (Besides That One, You Pervert)</h2>
                <div className="blog-post-owener-list d-flex">
                  <Image src={BlogImage} />
                  <div className="blog-list-auther-name">
                    <p>Yesterday 9:00AM</p>
                    <span className="">Joe Biden</span>                      
                  </div>
                </div>
                <h6 className="py-2">This is a small act of self-indulgence, if not outright self-care.</h6>
              </div>
            </article>

            <article className="blog-list-viewall">
              <figure className="blog-list-figure">
                <Image src={BlogImage} />
              </figure>
              <div className="blog-list-content">
                <span>Food &  Drinks </span>
                <h2>The Best Reason to Keep Whipped Cream in Your Fridge at All Times (Besides That One, You Pervert)</h2>
                <div className="blog-post-owener-list d-flex">
                  <Image src={BlogImage} />
                  <div className="blog-list-auther-name">
                    <p>Yesterday 9:00AM</p>
                    <span className="">Ben</span>                      
                  </div>
                </div>
                <h6 className="py-2">This is a small act of self-indulgence, if not outright self-care.</h6>
              </div>
            </article>            
          </Col>

          <Col sm={4} className="blog-divesion-section2">
            <div>
              <h6>Latest Blog for You!</h6>

              <div className="sidebox-readon d-flex">
                <Image src={BlogImage} />
                <div className="readon-tag">
                  <span>Health</span>
                  <h6> Terminator 2's Famous Kitchen Scene Was More Complicated Than You Thought </h6>
                </div>
              </div>

              <div className="sidebox-readon d-flex">
                <Image src={BlogImage} />
                <div className="readon-tag">
                  <span>Health</span>
                  <h6> Kitchen Scene Was More Complicated Than You Thought </h6>
                </div>
              </div>

              <div className="sidebox-readon d-flex">
                <Image src={BlogImage} />
                <div className="readon-tag">
                  <span>Health</span>
                  <h6> Scene Was More Complicated Than You Thought </h6>
                </div>
              </div>


              
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default index
