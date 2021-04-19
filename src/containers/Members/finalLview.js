import React, {useState,useEffect,useCallback} from "react";
import Axios from "axios";
import { Col, Container, Row, Collapse, Button,Form } from "react-bootstrap";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./finalView";
import axios from 'axios';
import { connect, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
export default function MovieList(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [movieDetails, setDetails] = useState([]);
  const [show, setHide] = useState(false);
  return (<>
    <Container fluid style={{background: "#3d4a5c"}}>
        <Row>
          <div className="container member-hello my-4">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>        
        </Row>       
      </Container>
    <div className="container">
      <p>You may either scroll to view your charter document progress thus far or click the
        button below to download a PDF copy</p>
      {
        <PDFDownloadLink
        document={<PdfDocument data={props.location.state.detail} />}
        fileName="movielist.pdf"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a"
        }}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Pdf"
        }
      </PDFDownloadLink>}
    </div>
    <div className="pdf_container">
        <div className="project_info item1">
            1 (project name)
        </div>
        <div className="project_info item2">
            2 (project title)
        </div>
        <div className="project_info item3">
            3 (Project Manager)
        </div>
        <div className="project_info item4">
            4 (Project Manager Name)
        </div>
        <div className="project_info item5">
            5 (Project Start Date:)
        </div>
        <div className="project_info item6">
            6 (Project Start Date Name)
        </div>
        <div className="project_info item7">
            7 (Project Sponsor:)
        </div>
        <div className="project_info item8">
            8 ( Project Sponsor: Name)
        </div>
        <div className="project_info item9">
            9 ( Project End Date:)
        </div>
        <div className="project_info item10">
            10 (Project End Date: Name)
        </div>
        <div className="project_info item11">
            11 (Project Budget:)
        </div>
        <div className="project_info item12">
            12 (Project Budget: Project Budget:)
        </div>

        <div className="project_info item13">
            <div className="pdf_title">
                13 (Background title)
            </div>
            <div className="pdf_content">
                Example of what text that follows. It should not be bold and should be pulled directly 
                from the input fields of the charter. Also, an example of what any wrap-around text 
                should look like and where it should be positioned.
            </div>
        </div>        

        <div className="project_info item14">
            <div className="pdf_title">
                14 (Goals)
            </div>
            <div className="pdf_content">
                <ul>
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                        
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                    
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                </ul>
            </div>
        </div>        
        
        <div className="project_info item15">
            <div className="pdf_title">
                15 (Benefits)
            </div>
            <div className="pdf_content">
                <ul>
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                        
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                    
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                </ul>
            </div>
        </div>        
        
        <div className="project_info item16">
            <div className="pdf_title">
                16 (In Scope)
            </div>
            <div className="pdf_content">
                <ul>
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                        
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                    
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                </ul>
            </div>
        </div>
        
        <div className="project_info item17">
            <div className="pdf_title">
                17 (Out of Scope)
            </div>
            <div className="pdf_content">
                <ul>
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                        
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                    
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                </ul>
            </div>
        </div>
        
        <div className="project_info item18">
            <div className="pdf_title">
                18 (Assumptions)
            </div>
            <div className="pdf_content">
                <ul>
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                        
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                    
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                </ul>
            </div>
        </div>
                
        <div className="project_info item18">
            <div className="pdf_title">
                18 (Assumptions)
            </div>
            <div className="pdf_content">
                <ul>
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                        
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                    
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                </ul>
            </div>
        </div>
                
        <div className="project_info item19">
            <div className="pdf_title">
                19 (Impact)
            </div>
            <div className="pdf_content">
                <ul>
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                        
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                    
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                </ul>
            </div>
        </div>
                
        <div className="project_info item20">
            <div className="pdf_title">
                20 (Risks)
            </div>
            <div className="pdf_content">
                <ul>
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                        
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                    
                    <li>Example of what text that follows. It should not be bold and should be pulled 
                        directly from the input fields of the charter. Also, an example of what any wrap-around text should look like and where it should be positioned.</li>
                </ul>
            </div>
        </div>
        
    </div>
  </>);
}
