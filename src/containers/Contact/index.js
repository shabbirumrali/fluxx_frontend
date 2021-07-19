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
            <h3 className="text-center my-3 font-weight-bold">contact us</h3>
            <Form className="w-50 mx-auto my-4 form_container" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Form.Row className="mx-1 my-3">              
                  <Form.Group as={Col} controlId="formGridFirstName" className="mx-2">
                    <Form.Label>first name*</Form.Label>
                    <Form.Control type="text" ref={register} name="firstname" />
                      {errors.firstname && (
                        <span className="errorMessage">{errors.firstname.message}</span>
                      )}
                  </Form.Group>                            
                  <Form.Group as={Col} controlId="formGridLastName" className="mx-2">
                    <Form.Label>last name*</Form.Label>
                    <Form.Control type="text" ref={register}  name="lastname" />
                    {errors.lastname && (
                      <span className="errorMessage">{errors.lastname.message}</span>
                    )}
                  </Form.Group>                
              </Form.Row>
                    
              <Form.Row className="mx-1 my-3">
                <Form.Group as={Col} controlId="formGridEmail" className="mx-2">
                  <Form.Label>email*</Form.Label>
                  <Form.Control type="email" name="email" ref={register} />
                  {errors.email && (
                    <span className="errorMessage">{errors.email.message}</span>
                  )}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword" className="mx-2">
                  <Form.Label>subject*</Form.Label>
                  <Form.Control type="text" name="subject" ref={register} />
                  {errors.subject && (
                    <span className="errorMessage">{errors.subject.message}</span>
                  )}
                </Form.Group>
              </Form.Row>           
                <Form.Group controlId="exampleForm.ControlTextarea1" className="my-3 px-2 mx-2">
                  <Form.Label>tell us how we can help*</Form.Label>
                  <Form.Control as="textarea" rows={3} name="description" ref={register} />
                  {errors.description && (
                    <span className="errorMessage">{errors.description.message}</span>
                  )}
                </Form.Group>              
                <div className="d-flex justify-content-center my-5">
                  <Button type="submit" variant="dark" className="btn_class rounded-0" >
                    Submit
                  </Button>
                </div>              
            </Form>
          </Col>
        </Row>        
      </Container>              
    </div>
  );
};

export default withRouter(Contact);
