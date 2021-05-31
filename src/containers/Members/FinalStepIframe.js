import React from 'react'
import './pdf_index.css'
import { Container, Col, Row } from 'react-bootstrap'

const FinalStepIframe = (props) => {
    return (
        <Container className="mx-4 border">
            <Row className="project_two_col my-5">
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
                <Col className="col_details_headings" md={{ span: 3, offset: 6 }}><p>Project Budget:</p></Col>
                <Col md={{ span: 3 }} className="col_details_titles"><p>{props.data.charterlist.budget }</p></Col>
            </Row>
            
            <Row className="project_two_col my-5">
                <Col className="col_details_headings" sm={3}>
                    <p>Goals:</p>
                </Col>
                <Col className="col_details_titles" sm={9}>
                    <p><ul><li>{props.data.charterlist.goal }</li></ul></p>
                </Col>
            </Row>
            <Row className="project_two_col my-5">
                <Col className="col_details_headings" sm={3}>
                    <p>Benefits:</p>
                </Col>
                <Col className="col_details_titles" sm={9}>
                    <p><ul><li>{props.data.charterlist.benefits }</li></ul></p>
                </Col>
            </Row>
            <Row className="project_two_col my-5">
                <Col className="col_details_headings" sm={3}><p>In Scope:</p></Col>
                <Col className="col_details_titles" sm={9}>
                    <p><ul><li>{props.data.charterlist.InScope }</li></ul></p>
                </Col>
            </Row>
            <Row className="project_two_col my-5">
                <Col className="col_details_headings" sm={3}><p>Out of Scope:</p></Col>
                <Col className="col_details_titles" sm={9}>
                    <p><ul><li>{props.data.charterlist.outScope }</li></ul></p>
                </Col>
            </Row>
            <Row className="project_two_col my-5">
                <Col className="col_details_headings" sm={3}><p>Assumptions:</p></Col>
                <Col className="col_details_titles" sm={9}>
                    <p><ul><li>
                   {props.data.charterlist.assumptionTime }</li></ul></p>
                </Col>
            </Row>
            <Row className="project_two_col my-5">
                <Col className="col_details_headings" sm={3}><p>Impact:</p></Col>
                <Col className="col_details_titles" sm={9}>
                    <p><ul><li>{props.data.charterlist.impact }</li></ul></p>
                </Col>
            </Row>
            <Row className="project_two_col my-5">
                <Col className="col_details_headings" sm={3}><p>Risks:</p></Col>
                <Col className="col_details_titles" sm={9}>
                    <p><ul><li>{props.data.charterlist.risks }</li></ul></p>
                </Col>
            </Row>
            
        </Container>
    )
}

export default FinalStepIframe