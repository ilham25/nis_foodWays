import { Modal, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { isLogin, login } from "../../utils/auth";

export default function LoginModal({
  showLogin,
  handleCloseLogin,
  handleShowRegister,
  setCheckLogin,
}) {
  const history = useHistory();
  const openRegister = () => {
    handleCloseLogin();
    handleShowRegister();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    if (login(userData)) {
      history.push("/");
      setCheckLogin(isLogin());
      handleCloseLogin();
    }
  };

  return (
    <Modal show={showLogin} onHide={handleCloseLogin}>
      <Modal.Body className="px-4 py-5">
        <h2 className="text-warning mb-4">Login</h2>
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
            />
          </Form.Group>
          <Button variant="brown" type="submit" className="mb-3">
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
