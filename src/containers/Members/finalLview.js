import React, { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import { Col, Container, Row, Button } from "react-bootstrap";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./finalView";
import axios from 'axios';
import { connect, useDispatch } from "react-redux";
import { Link, Router, useHistory, Redirect } from "react-router-dom";
import TitleList from  "./titleList";
import FinalStepIframe from './FinalStepIframe';
import backimage from '../../assets/img/backbutton.png';
import './pdf_index.css'

const MovieList = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [movieDetails, setDetails] = useState([]);
  const [show, setHide] = useState(false);

  const forgetpassword = (eventdata) => {    
    history.push({
        pathname: "/cmain",
        state: { newdetail: 'sdsadasdaadad' }
      });
  }
return (
  <>
  <Container fluid style={{background: "#3d4a5c"}}>
      <Container fluid className="py-4" >
        <Row>
          <TitleList width={100} pdfdata={props.location.state.detail} showdownload={true} />                  
        </Row>
      </Container>
  </Container>

    <div className="pdf_download_title">
      <p>You may either scroll to view your charter document progress thus far or click the
        button below to download a PDF copy</p>
      <div className="pdf_download_btns">
      <Link to={{ pathname: "/cmain", 
        state: {detail:props.location.state.detail.charterlist} 
      }} >
        <span className="final_step_back_btn">
        <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
          Back to charter
        </span>
      </Link>
      {<PDFDownloadLink
          document= {<PdfDocument data={props.location.state.detail} />}
          fileName="charter.pdf"
          className="pdf_download_btn"
        >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink> }
      </div>
    </div>

{/* PDf details */}
    <Container className="pdf_frame">
      <Row>
          <FinalStepIframe  data={props.location.state.detail} />
      </Row>
    </Container>  
  </>
);
}


export default MovieList
