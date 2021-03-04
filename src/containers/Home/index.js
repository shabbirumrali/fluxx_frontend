import React from "react";
import Banner from "../../assets/img/header_image.jpg";
import Shake from "../../assets/img/handshake.svg";
import choice from "../../assets/img/choice.svg";
import lightbulb from "../../assets/img/lightbulb.svg";
const Home = () => {
  return (
    <>
      <img
        src={`${Banner}`}
        className="img-fluid header_image"
        alt="header_image"
        style={{
          width: "100%",
        }}
      />

      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-auto p-5 my-auto">
            <h2>why Fluxx ?</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-8 py-md-5">
            <p className="lead">
            We like bells and whistles as much as the next person, but in the end,
            they just make noise. We're building Fluxx with everything you need to
            get your work done quickly - without all of the extra fluff.
            </p>
            <p className="lead">
            If it's in Fluxx, it's because it needs to be.
            </p>
          </div>
          <div className="col-4 handshake align-self-center">
            <img src={`${Shake}`} className="img-fluid" alt="handshake" />
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-4 p-5 align-self-center choice_img">
            <img src={`${choice}`} className="img-fluid" alt="Choice" />
          </div>
          <div className="col-8 align-self-center">
            <p className="lead">
              Every great story has a great guide. Frodo had Gandolf, Luke had
              Yoda, Daniel had Mr. Miyagi... you get the picture. Fluxx is
              designed to lead you down the right path, help you when you need
              it, and guide you (and
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row index_last_container p-5">
          <div className="col-8 align-self-center">
            <p className="lead">
              Your company needs visibility into what it's doing to make the
              right decisions, but doesn't always have the resources for a
              formal project management office. With Fluxx, you'll be able to
              take the first step toward organization and transparency without
              having to add another branch to your org chart.
            </p>
          </div>
          <div className="col-4 p-5 align-self-center choice_img">
            <img
              src={`${lightbulb}`}
              className="img-fluid"
              alt="Light_bulb"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
