import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import PrintDownload from '../../assets/img/Print_Download.png'

const TitleList = ({ activeCls, width, sendDataToParent }) => {
    console.log(activeCls);
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
                        <div className="print_download">
                            <p onClick={() => setTimeout(window.print, 100)}>
                                <Image src={PrintDownload} className="print_Download_image" alt="Print & Download" />
                                print / download
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="progress_bar_titles">
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
                            </ul>
                        </div>
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
