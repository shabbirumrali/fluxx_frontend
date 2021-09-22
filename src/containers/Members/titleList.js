import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import PrintDownload from '../../assets/img/Print_Download.png';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./finalView";
import { Link, Router, useHistory, Redirect, useParams } from "react-router-dom";
import appConfig from "./../../config";
import axios from 'axios';
const TitleList = ({ activeCls, width,showdownload, sendDataToParent,pdfdata,projectna }) => {
    

    console.log(projectna+"------>");
    
  const history = useHistory();
  const sendDataToParent1 =  (value) => {
    
    history.push({
              pathname: "/cmain",
              state: { detail: pdfdata.charterlist }
            });
       
  } 

  const finalstep = () => {
            axios({
            "method": "GET",
            "url": appConfig.config().baseUrl + "/fetchcharter/" + projectna,
            "headers": {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            }
            })
            .then((response) => {
                history.push({
                pathname: "/finalStep",
                state: { detail: response.data }
                });
            })
            .catch((error) => {
                console.log(error)
            })
  };
 
    
    return (
        <>
            <Container>
                <Row>
                    <Col sm={6} lg={6} className="charter_heading">
                        <div className="project_charter">
                            <h5>project charter</h5>
                        </div>
                    </Col>
                    <Col sm={6} lg={6}>
                       
                    </Col>
                </Row>
                <Row>
                    <Col>
                        { sendDataToParent ? <div className="progress_bar_titles">
                            <ul>
                                <li className={activeCls === 'step1' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent('names'); }}>project name</li>
                                <li className={activeCls === 'step2' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent('address'); }}>pm / sponsor</li>
                                <li className={activeCls === 'step3' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent('contact'); }}>background</li>
                                <li className={activeCls === 'step4' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent('goal'); }}> goals</li>
                                <li className={activeCls === 'step5' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent('benefits'); }}>benefits</li>
                                <li className={activeCls === 'step6' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent('inscope'); }}>scope</li>
                                <li className={activeCls === 'step7' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent('schedule'); }}>schedule</li>
                                <li className={activeCls === 'step8' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent('budget'); }} >budget</li>
                                <li className={activeCls === 'step9' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent('assumption'); }}>assumptions</li>
                                <li className={activeCls === 'step10' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent('impact'); }}>impact</li>
                                <li className={activeCls === 'step11' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent('stakeholder'); }}>stakeholders</li>
                                <li className={activeCls === 'step12' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent('risk'); }}>risks</li>
                                { showdownload ? 
                                <PDFDownloadLink
                                    document={<PdfDocument data={pdfdata} />}
                                    fileName="charter.pdf"
                                    
                                >
                                {({ blob, url, loading, error }) =>
                                  loading ? "Loading document..." : <li className="steps_active memberSteps" >Print & Download</li>
                                }
                              </PDFDownloadLink>
                                :<li className="memberSteps" onClick={finalstep}>Print & Download</li> }
                            </ul>

                        </div>
                        : <div className="progress_bar_titles">
                            <ul>
                                <li className={activeCls === 'step1' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent1('names'); }}>project name</li>
                                <li className={activeCls === 'step2' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent1('address'); }}>pm / sponsor</li>
                                <li className={activeCls === 'step3' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent1('contact'); }}>background</li>
                                <li className={activeCls === 'step4' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent1('goal'); }}> goals</li>
                                <li className={activeCls === 'step5' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent1('benefits'); }}>benefits</li>
                                <li className={activeCls === 'step6' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent1('inscope'); }}>scope</li>
                                <li className={activeCls === 'step7' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent1('schedule'); }}>schedule</li>
                                <li className={activeCls === 'step8' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent1('budget'); }} >budget</li>
                                <li className={activeCls === 'step9' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent1('assumption'); }}>assumptions</li>
                                <li className={activeCls === 'step10' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent1('impact'); }}>impact</li>
                                <li className={activeCls === 'step11' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent1('stakeholder'); }}>stakeholders</li>
                                <li className={activeCls === 'step12' ? 'steps_active' : "memberSteps"} onClick={() => { sendDataToParent1('risk'); }}>risks</li>
                                { showdownload ? 
                                <PDFDownloadLink
                                    document={<PdfDocument data={pdfdata} />}
                                    fileName="charter.pdf"
                                    
                                >
                                {({ blob, url, loading, error }) =>
                                  loading ? "Loading document..." : <li className="steps_active memberSteps">Print & Download</li>
                                }
                              </PDFDownloadLink>
                                :<li className="memberSteps" onClick={finalstep}>Print & Download</li> }
                            </ul>

                        </div> }
                    </Col>
                </Row>
            </Container>
            <Container className="progress-container">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{ width: `${width}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </Container>
        </>
    );
}
export default TitleList;
