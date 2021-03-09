import { Modal, Button, Form } from "react-bootstrap";

export default function RegisterModal({
  showRegister,
  handleCloseRegister,
  handleShowLogin,
}) {
  const openLogin = () => {
    handleCloseRegister();
    handleShowLogin();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("register");
  };
  return (
    <Modal show={showRegister} onHide={handleCloseRegister}>
      <Modal.Body className="px-4 py-5">
        <h2 className="text-warning mb-4">Register</h2>
        <Form className="d-flex flex-column" onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Control type="email" placeholder="Email" required />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="fullname">
            <Form.Control type="text" placeholder="Full Name" required />
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Control type="text" placeholder="Gender" required />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Control type="text" placeholder="Phone" required />
          </Form.Group>
          <Form.Group controlId="userrole" placeholder="njir">
            <Form.Control as="select">
              <option>As User</option>
              <option>As Partner</option>
            </Form.Control>
          </Form.Group>
          <Button variant="brown" type="submit" className="mb-3">
            Register
          </Button>
          <Form.Text className="text-muted text-center">
            Already have an account ? Click{" "}
            <a
              href="#!"
              className="font-weight-bold text-secondary"
              onClick={openLogin}
            >
              Here
            </a>
          </Form.Text>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
