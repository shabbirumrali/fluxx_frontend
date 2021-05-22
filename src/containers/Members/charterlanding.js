import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
const CharterLanding = () => {
  return (
    <>
      <Container fluid style={{background: "#3d4a5c"}}>
        <Row>
          <div className="container member-hello my-4">
            <h1>Hello.</h1> 
          </div>        
        </Row>       
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="contant border my-5 p-5 mx-auto">
                <p>Every project begins somewhere, and that ‘somewhere’ is the project charter. The charter outlines the main elements of the project, authorizes the existence of the project, and gives you the authority to apply organizational resources.</p>
                <p>What does that really mean? Without a charter, it’s not a project - it’s just an idea...and we want this to be a project! So let’s walk through the elements one by one. When we’re done, you’ll have everything you need to get your project approved and get the resources you need to do it.</p>
                <p>Your organization may not require all of the following fields. It’s OK - just leave the field blank and move on to the next section. Just keep in mind that while you might not need everything contained in the following steps, they are all good things to consider and address while working on your project.</p>
            </div>              
          <div className="get_start_btn mb-4">
                <Link to="/cmain" className="py-3 px-5">
                  Get Started
                </Link>            
          </div>
          </Col>        
        </Row>
      </Container>
    </>
  )
}

export default CharterLanding
