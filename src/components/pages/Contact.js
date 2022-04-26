import { Container, Col, Row, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container className="p-5  ">
      <Container className="p-5">
        <Row>
          <Col className="p-3 bg-dark text-light  rounded">
            <Row className="display-3  mx-auto p-5 text-center">Get in Touch</Row>
            <Row className="p-3 lead text-secondary mb-5">Fill up the form and our team will get to you in 24 hours</Row>
            <Row className="pb-3">
              <Col>
                <Button className="bi bi-telephone-fill link-dark " href="#" />
                <span className="px-md-3 px-sm-1"> +234-000-000</span>
              </Col>
            </Row>
            <Row className="pb-3">
              <Col>
                <Button className="bi bi-envelope-fill link-dark " />
                <span className="px-md-3 px-sm-1"> Group32@sh.com</span>
              </Col>
            </Row>
            <Row className="pb-3">
              <Col>
                <Button className="bi bi-geo-alt-fill link-dark" />
                <span className="px-md-3 px-sm-1"> Remote str, Lagos</span>
              </Col>
            </Row>
          </Col>

          <Col className="m-4  p-md-3 mw-80 bg-light rounded border">
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder=" Enter Your Message Here" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
