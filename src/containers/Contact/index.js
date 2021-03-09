import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";

const Contact = (props) => {
    const validationSchema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      firstname:Yup.string().required("FirstName is required"),
      lastname:Yup.string().required("Lastname is required"),
      subject:Yup.string().required("Subject is required"),
      description:Yup.string().required("Description is required"),
    });
    console.log(validationSchema);

    const dispatch = useDispatch();

    const { register, errors, handleSubmit, reset } = useForm({
      resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {
      dispatch(actions.contactus(data));
      reset();
    };

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h3 className="text-center my-3 font-weight-bold">Contact Us</h3>
            <Form className="w-50 mx-auto my-4 form_container" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Form.Row className="mx-1 my-2">
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>first name*</Form.Label>
                  <Form.Control type="text" ref={register} name="firstname" />
                    {errors.firstname && (
                      <span className="errorMessage">{errors.firstname.message}</span>
                    )}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>last name*</Form.Label>
                  <Form.Control type="text" ref={register}  name="lastname" />
                  {errors.lastname && (
                    <span className="errorMessage">{errors.lastname.message}</span>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row className="mx-1 my-2">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>email*</Form.Label>
                  <Form.Control type="email" name="email" ref={register} />
                  {errors.email && (
                    <span className="errorMessage">{errors.email.message}</span>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>subject *</Form.Label>
                  <Form.Control type="password" name="subject" ref={register} />
                  {errors.subject && (
                    <span className="errorMessage">{errors.subject.message}</span>
                  )}
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1" className="my-2 px-2">
                <Form.Label>tell us how we can help*</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" ref={register} />
                {errors.description && (
                  <span className="errorMessage">{errors.description.message}</span>
                )}
              </Form.Group>
              <div className="d-flex justify-content-center mt-5">
                <Button type="submit" variant="dark" className="px-5 btn_class rounded-0" >
                  Submit
                </Button>
              </div>              
            </Form>

              {/* <div class="col-md-6">
                  <label for="inputFirst" class="form-label"><b>first name*</b></label>
                  <input type="text"  class="form-control"   />
                  {errors.firstname && (
                    <span className="errorMessage">{errors.firstname.message}</span>
                  )}
              </div>
              <div class="col-md-6">
                  <label for="inputLast" class="form-label"><b>Last Name*</b></label>
                  <input type="text"  class="form-control"  />
                  {errors.lastname && (
                    <span className="errorMessage">{errors.lastname.message}</span>
                  )}
              </div> */}
              {/* <div class="col-md-6">
                <label for="inputEmail" class="form-label"><b>Email*</b></label>
                <input type="email"  class="form-control"  />
                  {errors.email && (
                    <span className="errorMessage">{errors.email.message}</span>
                  )}
              </div>
              <div class="col-md-6">
                <label for="inputSubject" class="form-label"><b>Subject*</b></label>
                <input type="text" class="form-control" />
                {errors.subject && (
                    <span className="errorMessage">{errors.subject.message}</span>
                  )}
              </div>*/}
              {/* <div class="col-md-12">
                  <label for="inputtext" class="form-label"><b>Tell us how we can help*</b></label>
                  <textarea class="form-control" aria-label="With textarea" ></textarea>
                  {errors.description && (
                    <span className="errorMessage">{errors.description.message}</span>
                  )}
              </div>*/}
              {/* <div class="col-12">
                  <br/>
                  <Button type="submit" class="btn btn-primary">Submit</Button>                  
              </div> */}
            
          </Col>                    
        </Row>        
      </Container>              
    </div>
  );
};

export default withRouter(Contact);
