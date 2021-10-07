import React from 'react'
import './pdf_index.css'
import { Container, Col, Row } from 'react-bootstrap'

const FinalStepIframe = (props) => {
    return (
        <Container className="mx-4 border data_display_container">
            <Row className="project_two_col">
                <Col className="col_details_headings" sm={3}>
                    <p>Project Title:</p>
                </Col>
                <Col className="col_details_titles" sm={4}>
                    <p>{props.data.charterlist.name}</p>
                </Col>
            </Row>
            <Row className="project_two_col my-4">
                <Col className="col_details_headings" sm={3}><p>Project Manager:</p></Col>
                <Col className="col_details_titles" sm={3}><p>{props.data.charterlist.project_manager}</p></Col>
                <Col className="col_details_headings" sm={3}><p>Project Start Date:</p></Col>
                <Col className="col_details_titles" sm={3}><p>{props.data.charterlist.startDate}</p></Col>
            </Row>
            <Row className="project_two_col my-4">
                <Col className="col_details_headings" sm={3}><p>Project Sponsor:</p></Col>
                <Col className="col_details_titles" sm={3}><p>{props.data.charterlist.project_sponsor}</p></Col>
                <Col className="col_details_headings" sm={3}><p>Project End Date:</p></Col>
                <Col className="col_details_titles" sm={3}><p>{props.data.charterlist.finishDate}</p></Col>
            </Row>
            <Row className="project_two_col my-4">
                <Col className="col_details_headings" sm={3}><p>Project Needed:</p></Col>
                <Col className="col_details_titles" sm={3}><p>{props.data.charterlist.project_need}</p></Col>
                <Col className="col_details_headings" sm={3}><p>Project Budget:</p></Col>
                <Col className="col_details_titles" sm={3}><p>{props.data.charterlist.budget}</p></Col>
            </Row>
            
           
            
            <Row className="project_two_col">
                <Col className="col_details_headings" sm={3}>
                    <p>Goals:</p>
                </Col>
                <Col className="col_details_titles" sm={9}>
                    {
                        props.data.charterlist.goal ?
                        JSON.parse(props.data.charterlist.goal).length > 0 ?
                        JSON.parse(props.data.charterlist.goal).map((list,index) => {
                            return (<> <p>{list.goal}</p> </>)
                        }) : null : null
                    }
                </Col>
            </Row>
            <Row className="project_two_col">
                <Col className="col_details_headings" sm={3}>
                    <p>Benefits:</p>
                </Col>
                <Col className="col_details_titles" sm={9}>
                    {
                        props.data.charterlist.benefits ?
                        JSON.parse(props.data.charterlist.benefits).length > 0 ?
                        JSON.parse(props.data.charterlist.benefits).map((list,index) => {
                            return (<> <p>{list.benefits}</p> </>)
                        }) : null : null
                    }
                </Col>
            </Row>
            <Row className="project_two_col">
                <Col className="col_details_headings" sm={3}><p>In Scope:</p></Col>
                <Col className="col_details_titles" sm={9}>
                    {
                        props.data.charterlist.InScope ?
                        JSON.parse(props.data.charterlist.InScope).length > 0 ?
                        JSON.parse(props.data.charterlist.InScope).map((list,index) => {
                            return (<> <p>{list.InScope}</p> </>)
                        }) : null : null
                    }
                </Col>
            </Row>
            <Row className="project_two_col">
                <Col className="col_details_headings" sm={3}><p>Out of Scope:</p></Col>
                <Col className="col_details_titles" sm={9}>
                    {
                        props.data.charterlist.outScope ?
                        JSON.parse(props.data.charterlist.outScope).length > 0 ?
                        JSON.parse(props.data.charterlist.outScope).map((list,index) => {
                            return (<> <p>{list.outScope}</p> </>)
                        }) :null : null
                    }
                   
                </Col>
            </Row>
            <Row className="project_two_col">
                <Col className="col_details_headings" sm={3}><p>Assumptions:</p></Col>
                <Col className="col_details_titles" sm={9}>
                    {
                        props.data.charterlist.assumptionTime ?
                        JSON.parse(props.data.charterlist.assumptionTime).length > 0 ?
                        JSON.parse(props.data.charterlist.assumptionTime).map((list,index) => {
                            return (<> <p>{list.assumptionTime}</p> </>)
                        })
                        : null : null 
                    }
                </Col>
            </Row>
            <Row className="project_two_col">
                <Col className="col_details_headings" sm={3}><p>Impact:</p></Col>
                <Col className="col_details_titles" sm={9}>
                    {
                        props.data.charterlist.impact ?
                        JSON.parse(props.data.charterlist.impact).length > 0 ?
                        JSON.parse(props.data.charterlist.impact).map((list,index) => {
                            return (<><p>{list.impact}</p></>)
                        }) : null : null 
                    }
                </Col>
            </Row>
            <Row className="project_two_col">
                <Col className="col_details_headings" sm={3}><p>StakeHolders:</p></Col>
                <Col className="col_details_titles" sm={9}>
                    {
                        props.data.charterlist.stakeholder ?
                        JSON.parse(props.data.charterlist.stakeholder).length > 0 ?
                        JSON.parse(props.data.charterlist.stakeholder).map((list,index) => {
                            return (<> <p>{list.stakeholder}</p> </>)
                                }) :null :null
                    }
                </Col>
            </Row>  
            <Row className="project_two_col">
                <Col className="col_details_headings" sm={3}><p>Risks:</p></Col>
                <Col className="col_details_titles" sm={9}>
                    {
                        props.data.charterlist.risks ?
                        JSON.parse(props.data.charterlist.risks).length > 0 ?
                        JSON.parse(props.data.charterlist.risks).map((list,index) => {
                            return (<> <p>{list.risks}</p> </>)
                                }) : null : null
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default FinalStepIframe
