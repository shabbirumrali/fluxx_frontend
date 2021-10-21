import React from "react";
import { Col, Container, Image, Row, Card } from 'react-bootstrap'
import Typewriter from "typewriter-effect";
import Walloutlet from "../../assets/img/walloutlet.jpg";
import Fingersnap from "../../assets/img/fingersnap.png";
import Guided from "../../assets/img/guided.png";
import Aha from "../../assets/img/aha.png";

const Home = (props) => {
  return (
    <>
      <header className="header">
        <Card className="header_card">
          <Card.Img src={Walloutlet} alt="Header Image" />
          <Card.ImgOverlay className="header_text_overlay">
            <Card.Title className="header_text">
              <div className="header_banner_text">
                Projects are hard. <br />
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Managing them shouldn’t be.")
                      .start();
                  }}
                />
              </div>
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </header>

      <Container>
        <div className="why_fluxx">
          <h2>why fluxx ?</h2>
        </div>

        <Row className="finger_snap_section">
          <Col sm={8} className="finger_snap_content">
            <p> We like bells and whistles as much as the next person, but in the end,
              they just make noise. We're building Fluxx with everything you need to
              get your work done quickly - without all of the extra fluff. </p>
            <p> If it's in Fluxx, it's because it needs to be. </p>
          </Col>
          <Col className="finger_snap_img" sm={3}>
            <Image src={Fingersnap} className="" />
          </Col>
        </Row>
      </Container>

      <div className="direction_section" style={{ width: "100%", background: "#e7e6e6" }}>
        <Container>
          <Row className="inside_direction_section">
            <Col sm={4} className="direction_left">
              <Image src={Guided} alt="Direction" />
            </Col>
            <Col sm={8} className="direction_right">
              <p>Every great story has a great guide. Frodo had Gandolf, Luke had Yoda, Daniel had Mr. Miyagi... you get the picture. Fluxx is designed to lead you down the right path, help you when you need it, and guide you (and your project) to success.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="light_bulb_section" style={{ background: "#fbf7f7", width: "100%" }}>
        <Container>
          <Row className="light_bulb">
            <Col sm={8} className="lightbulb_left">
              <p>Your company needs visibility into what it's doing to make the
                right decisions, but doesn't always have the resources for a
                formal project management office. With Fluxx, you'll be able to
                take the first step toward organization and transparency without
                having to add another branch to your org chart.</p>
            </Col>
            <Col sm={4} className="lightbulb_right">
              <Image src={Aha} alt="light bulb" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
