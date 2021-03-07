import React from "react";
import { Col, Container, Image, Row } from 'react-bootstrap'
import Walloutlet from "../../assets/img/walloutlet.jpg";
import Fingersnap from "../../assets/img/fingersnap.png";
import Guided from "../../assets/img/guided.png";
import Aha from "../../assets/img/aha.png";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
    <header className="header">
      <Image src={Walloutlet} fluid />
      <h2>Projects are hard.<br />Managing them shouldn’t be.</h2>
    </header>    
      
      <Container>
            <h2 className="text-center my-5">why Fluxx ?</h2>
        <Row className="py-3 my-5">
          <Col className="align-self-center">
            <p>
              We like bells and whistles as much as the next person, but in the end,
              they just make noise. We're building Fluxx with everything you need to
              get your work done quickly - without all of the extra fluff.            
              <br />
              If it's in Fluxx, it's because it needs to be.
            </p>
          </Col>
          <Col>
            <Image src={Fingersnap} className="mx-auto d-block"/>
          </Col>
        </Row>                  
      </Container>

      <Container fluid>
        <Row className="bg-light py-5 mt-5">
          <Col>
            <Image src={Guided} className="mx-auto d-block"/>
          </Col>

          <Col className="align-self-center">
            <p>
              Every great story has a great guide. Frodo had Gandolf, Luke had
              Yoda, Daniel had Mr. Miyagi... you get the picture. Fluxx is
              designed to lead you down the right path, help you when you need
              it, and guide you (and)
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ background: "#fbf7f7"}} >
        <Row className="py-5">
          <Col className="align-self-center">
            <p>Your company needs visibility into what it's doing to make the
              right decisions, but doesn't always have the resources for a
              formal project management office. With Fluxx, you'll be able to
              take the first step toward organization and transparency without
              having to add another branch to your org chart.</p>
          </Col>
          <Col>
            <Image src={Aha} className="mx-auto d-block" />
          </Col>
        </Row>
      </Container>      
    </>
  );
};

export default Home;
