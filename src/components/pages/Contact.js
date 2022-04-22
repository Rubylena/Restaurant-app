import React from 'react';
import {Container,Col,Row,Form,Button} from "react-bootstrap";


function Contact() {
  return (
    <>
    <Container className="p-5 bg-dark">
   <Container >
  <Row >
    <Col className="bg-info text-light p-5 rounded">
      <Row className="display-3 mb-3 mx-auto">Get in Touch</Row>
      <Row className="lead text-secondary mb-5">Fill up the form and our team will get to you in 24 hours</Row>
    <Row className="pb-3" >
      <Col><a className="bi bi-telephone-fill link-dark "></a><span className="px-3" > +234-000-000-000</span></Col>
      </Row>
    <Row className="pb-3">
      <Col><a className="bi bi-envelope-fill link-dark pt-3"></a><span className="px-3" > group32@sh.com</span></Col> 
    </Row>
    <Row className="pb-3">
    <Col><a  className="bi bi-geo-alt-fill link-dark"></a><span className="px-3" > Remote</span></Col>
    </Row>
    </Col>
    
    <Col className="mt-3 mb-3 p-5 bg-light rounded border-right"><Form>
  <Form.Group className="mb-3" controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Name" />
   
  </Form.Group>
<Form.Group className="mb-3" controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group   className="mb-3" controlId="message">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder=" Enter Your Message Here" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Send Message
  </Button>
</Form></Col>
  </Row>
 
</Container>
</Container>
</>
  )
}

export default Contact