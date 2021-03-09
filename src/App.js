import { Col, Row, Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

import LoginModal from "./components/LoginModal";
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>
      <LoginModal handleClose={handleClose} show={show} />
    </>
  );
}

export default App;
