import React, { useState } from "react";
import { Col, Container, Form, Row, Collapse, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import ItemForm from "./ItemForm";

const Schedule = ({ setForm, formData, navigation }) => {
  const { startDate,finishDate } = formData;
  const [scheduledopen, setscheduledopen] = useState(true);
  const { previous, next } = navigation;

  return (   

    <Container>
        <Row className="my-3">
          <Col xs={1} md={5} className="project_details m-2">
            <p> Schedule </p>            
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="form-labels">When do you think the project will start?</Form.Label>
                  <div>
                    <input className="form-control" type="date" id="example-date-input"  name="finishDate" value={finishDate} onChange={setForm} />
                  </div>                
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="form-labels">When do you think the project will finish? </Form.Label>
                  <div>
                    <input className="form-control" type="date" id="example-date-input"  name="finishDate" value={finishDate} onChange={setForm} />
                  </div>                
              </Form.Group>
              <a className="d-block text-right my-3"
              style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}} >
                ADD IN SCOPE ITEM +
              </a>
              <Button variant="light" type="submit" className="p-3" onClick={previous}>
                BACK
              </Button>
              <Button type="submit" className="ml-4 p-3"  onClick={next}
              style={{background: "#5aa380", border: "none"}}>
                SAVE AND CONTINUE
              </Button>              
              <Button variant="link" type="submit" className="d-block mt-4" onClick={next}
                style={{color: "#5aa380", textDecoration: "none"}} >
                Skip this step for now
              </Button>
            </Form>
          </Col>

          <Col xs={1} md={6} className="faq-section border p-4">
            <div>
              <p>Frequently Asked Questions</p>

              <div 
                onClick={() => setscheduledopen(!scheduledopen)}
                aria-controls="example-collapse-text"
                aria-expanded={scheduledopen} 
                className="faq-col mt-4" >
                <p> What exactly does “In Scope” include? </p>

                <Collapse in={scheduledopen}>
                  <div id="example-collapse-text">
                   "Scope creep" is one of the dangers of any
                    project, which is why this part is
                    important.
                    Using our home-building example, things
                    like landscaping, sidewalks, and furniture
                    may be out of scope. Outline the things
                    you <b>won't</b> be addressing as “Out of
                    Scope”.

                  </div>
                </Collapse>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    // <Container>
    //     <Row className="my-3">
    //       <Col xs={1} md={5} className="project_details m-2">
    //         <p> Schedule </p>            
    //            <ItemForm label="When do you think the project will
    //             start?" name="startDate" value={startDate} onChange={setForm} />  
    //             <ItemForm label="When do you think the project will
    //             finish?" name="finishDate" value={finishDate} onChange={setForm} />    
    //           <Link className="d-block text-right my-3"
    //       style={{color: "#5aa380", textDecoration: "none", fontWeight: "600", cursor: "pointer"}} >
    //        ADD IN SCOPE ITEM +
    //       </Link>
             
    //           <Button variant="light" type="submit" className="p-3" onClick={previous}>
    //             BACK
    //           </Button>
    //           <Button type="submit" className="ml-4 p-3" 
    //           style={{background: "#5aa380", border: "none"}} onClick={next}>
    //             SAVE AND CONTINUE
    //           </Button>              
    //           <Button variant="link" type="submit" className="d-block mt-4"
    //             style={{color: "#5aa380", textDecoration: "none"}} onClick={next} >
    //             Skip this step for now
    //           </Button>           
    //       </Col>

    //       <Col xs={1} md={6} className="faq-section border p-4">
    //         <div>
    //           <p>Frequently Asked Questions</p>

    //           <div 
    //             onClick={() => setscheduledopen(!scheduledopen)}
    //             aria-controls="example-collapse-text"
    //             aria-expanded={scheduledopen} 
    //             className="faq-col mt-4" >
    //             <p> What exactly does “In Scope” include? </p>

    //             <Collapse in={scheduledopen}>
    //               <div id="example-collapse-text">
    //                "Scope creep" is one of the dangers of any
    //                 project, which is why this part is
    //                 important.
    //                 Using our home-building example, things
    //                 like landscaping, sidewalks, and furniture
    //                 may be out of scope. Outline the things
    //                 you <b>won't</b> be addressing as “Out of
    //                 Scope”.

    //               </div>
    //             </Collapse>
    //           </div>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
  );
};

export default Schedule;
