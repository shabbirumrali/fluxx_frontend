import React, { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
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
    <Container fluid style={{background: "#3d4a5c"}} className="py-4" >
        <Row>
            <TitleList width={100} pdfdata={props.location.state.detail} showdownload={true} />                  
        </Row>       
    </Container>
    <div className="pdf_download_title my-5">
      <p>You may either scroll to view your charter document progress thus far or click the
        button below to download a PDF copy</p>
        

          <Link to={{ 
             pathname: "/cmain", 
             state: {detail:props.location.state.detail.charterlist} 
            }} >
                 <image src={backimage}  width="100"/>  Back To Charter  
       </Link>


      {
        <PDFDownloadLink
            document={<PdfDocument data={props.location.state.detail} />}
            fileName="charter.pdf"
            className="pdf_download_btn px-5 py-3"
        >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>}
    </div>

{/* PDf details */}
        <Container className="pdf_frame my-5">
            <Row>
                <FinalStepIframe  data={props.location.state.detail} />                
            </Row>
        </Container>
                
  </>);
}


export default MovieList
