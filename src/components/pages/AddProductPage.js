import { Container, Col, Row, Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function AddProductPage() {
  const history = useHistory();

  // Modal Handler
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShow();
    // history.push("/profile");
  };
  return (
    <div className="bg-grey py-5 mt-4">
      <Container>
        <Row className="mb-4">
          <h1 className="heading font-weight-bold">Add Product</h1>
        </Row>
        <Row>
          <Col className="pl-0">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={9}>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Title" />
                  </Form.Group>
                </Col>
                <Col className="pl-0">
                  <Form.Group>
                    <Form.File label="Attach image" data-browse="📎" custom />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Price" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={12} className="text-right">
                  <Button variant="brown" className="w-25" type="submit">
                    Save
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Add Product</Modal.Body>
      </Modal>
    </div>
  );
}

export default AddProductPage;
