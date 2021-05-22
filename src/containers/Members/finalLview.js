import React, {useState,useEffect,useCallback} from "react";
import Axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./finalView";
import axios from 'axios';
import { connect, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import TitleList from  "./titleList";
import FinalStepIframe from './FinalStepIframe'
import './pdf_index.css'

export default function MovieList(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [movieDetails, setDetails] = useState([]);
  const [show, setHide] = useState(false);
return (
<>
    <Container fluid style={{background: "#3d4a5c"}}>
        <Row>
            <TitleList />
            <div className="container member-hello my-4">
                <div class="progress">
                <div class="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>        
        </Row>       
    </Container>
    <div className="pdf_download_title my-5">
      <p>You may either scroll to view your charter document progress thus far or click the
        button below to download a PDF copy</p>
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
