import { Container, Col, Row, Form } from "react-bootstrap";

function EditProfilePage() {
  return (
    <div className="bg-grey py-5 mt-4">
      <Container>
        <Row className="mb-4">
          <h1 className="heading font-weight-bold">Edit Profile</h1>
        </Row>
        <Row>
          <Col className="pl-0">
            <Form>
              <Form.Group>
                <Form.Control
                  className="custom-input"
                  type="text"
                  placeholder="Full Name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EditProfilePage;
