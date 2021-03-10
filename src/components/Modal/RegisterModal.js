import { Modal, Button, Form } from "react-bootstrap";
import { register } from "../../utils/auth";

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
    const userData = {
      id: Math.floor(Math.random() * Math.floor(100)),
      email: e.target.email.value,
      password: e.target.password.value,
      fullname: e.target.fullname.value,
      gender: e.target.gender.value,
      phone: e.target.phone.value,
      userrole: e.target.userrole.value,
    };
    register(userData);
    openLogin();
  };
  return (
    <Modal show={showRegister} onHide={handleCloseRegister}>
      <Modal.Body className="px-4 py-5">
        <h2 className="text-warning mb-4">Register</h2>
        <Form className="d-flex flex-column" onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>
          <Form.Group controlId="fullname">
            <Form.Control
              type="text"
              placeholder="Full Name"
              name="fullname"
              required
            />
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Control
              type="text"
              placeholder="Gender"
              name="gender"
              required
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Control
              type="text"
              placeholder="Phone"
              name="phone"
              required
            />
          </Form.Group>
          <Form.Group controlId="userrole" placeholder="njir" name="userrole">
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
