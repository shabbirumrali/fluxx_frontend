import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'

const blogLists = () => {
    return (
        <Container fluid>
            <Row className="blogpost-header-container">
                <Col className="blogpost-header">
                    <div className="blog_list_header">
                        <h1>Best Deals</h1>
                        <p>The best deals on the web curated all year round by The Inventory's legendary editorial staff.</p>
                    </div>
                </Col>
            </Row>

        <Row className="blogContainer">
            <Col sm={8} className="blog-divesion-section1">
                <div className="blog-list-figure blog-list-viewall">
                    <Image src={props.setpostDetail ? props.setpostDetail._embedded['wp:featuredmedia']['0'].source_url : BlogImage} />
                    <div className="blog-list-content">
                        <span>KINJA DEALS</span>
                        <h2>Wish You Could Touch Chrome OS? You're Only a 47% Discount Away</h2>
                        <p>Lenovo's Chromebook Flex is $170 right now on Amazon. Lenovo's Chromebook Flex is $170 right now on Amazon.</p>
                        <div className="blog-list-auther-name">
                            <p>By Wes Davis |</p>
                            <span>| An hour ago</span>
                        </div>
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
}

export default blogLists
