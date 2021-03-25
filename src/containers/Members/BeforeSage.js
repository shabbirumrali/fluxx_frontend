import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const BeforeSage = () => {
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged. It was popularised in 
                  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and 
                  more recently with desktop publishing software like Aldus PageMaker including versions 
                  of Lorem Ipsum.</p>
                <p>It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged. It was popularised in 
                  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and 
                  more recently with desktop publishing software like Aldus PageMaker including versions 
                  of Lorem Ipsum.</p>
                <p>It was popularised in 
                  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and 
                  more recently with desktop publishing software like Aldus PageMaker including versions 
                  of Lorem Ipsum.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BeforeSage
