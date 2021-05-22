import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TitleList = ({ activeCls, width }) => {

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
                            <p>print / download</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="progress_bar_titles">
                            <ul>
                                <li className={activeCls === 'step1' ? 'steps_active':"" }>project name</li>
                                <li className={activeCls === 'step2' ? 'steps_active':"" }>pm / sponsor</li>
                                <li className={activeCls === 'step3' ? 'steps_active':"" }>background</li>
                                <li className={activeCls === 'step4' ? 'steps_active':"" }>goals</li>
                                <li className={activeCls === 'step5' ? 'steps_active':"" }>benefits</li>
                                <li className={activeCls === 'step6' ? 'steps_active':"" }>scope</li>
                                <li className={activeCls === 'step7' ? 'steps_active':"" }>schedule</li>
                                <li className={activeCls === 'step8' ? 'steps_active':"" }>budget</li>
                                <li className={activeCls === 'step9' ? 'steps_active':"" }>assumptions</li>
                                <li className={activeCls === 'step10' ? 'steps_active':"" }>impact</li>
                                <li className={activeCls === 'step11' ? 'steps_active':"" }>stakeholders</li>                    
                                <li className={activeCls === 'step12' ? 'steps_active':"" }>risks</li>                    
                            </ul>    
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-4">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: `${width}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </Container>        
        </>
    );
}
export default TitleList;
