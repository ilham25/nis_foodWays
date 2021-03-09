import { Modal, Button, Form } from "react-bootstrap";

export default function LoginModal({
  showLogin,
  handleCloseLogin,
  handleShowRegister,
}) {
  const openRegister = () => {
    handleCloseLogin();
    handleShowRegister();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login");
  };
  return (
    <Modal show={showLogin} onHide={handleCloseLogin}>
      <Modal.Body className="px-4 py-5">
        <h2 className="text-warning mb-4">Login</h2>
        <Form className="d-flex flex-column" onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Control type="email" placeholder="Email" required />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="secondary" type="submit" className="mb-3">
            Login
          </Button>
          <Form.Text className="text-muted text-center">
            Don't have an account ? Click{" "}
            <a
              href="#!"
              className="font-weight-bold text-secondary"
              onClick={openRegister}
            >
              Here
            </a>
          </Form.Text>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
